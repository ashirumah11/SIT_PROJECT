(function () {
    function compressImage(file) {
        return new Promise(function (resolve) {
            var reader = new FileReader();
            reader.onload = function () {
                var image = new Image();
                image.onload = function () {
                    var maxSize = 1600;
                    var scale = Math.min(1, maxSize / Math.max(image.width, image.height));
                    var canvas = document.createElement('canvas');
                    canvas.width = Math.round(image.width * scale);
                    canvas.height = Math.round(image.height * scale);
                    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob(function (blob) {
                        resolve(new File([blob], file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' }));
                    }, 'image/jpeg', 0.82);
                };
                image.src = reader.result;
            };
            reader.readAsDataURL(file);
        });
    }

    function initializeGalleryUpload() {
        var input = document.querySelector('input[name="image"]');
        if (!input || input.dataset.galleryReady) {
            return;
        }
        input.dataset.galleryReady = 'true';
        input.multiple = true;
        input.accept = 'image/*';
        var container = input.closest('.form-group') || input.parentElement;
        var dropzone = document.createElement('div');
        dropzone.className = 'gallery-dropzone';
        dropzone.innerHTML = '<i class="fas fa-cloud-upload-alt"></i><strong>Drop images here</strong><span>or click to upload multiple images</span><div class="gallery-previews"></div>';
        input.parentNode.insertBefore(dropzone, input);
        input.classList.add('gallery-file-input');

        function updateFiles(files) {
            var previews = dropzone.querySelector('.gallery-previews');
            previews.innerHTML = '<span class="gallery-processing">Preparing images...</span>';
            Promise.all(Array.from(files).filter(function (file) { return file.type.indexOf('image/') === 0; }).map(compressImage)).then(function (compressed) {
                var transfer = new DataTransfer();
                compressed.forEach(function (file) { transfer.items.add(file); });
                input.files = transfer.files;
                previews.innerHTML = '';
                compressed.forEach(function (file) {
                    var image = document.createElement('img');
                    image.src = URL.createObjectURL(file);
                    image.alt = file.name;
                    previews.appendChild(image);
                });
            });
        }

        dropzone.addEventListener('click', function () { input.click(); });
        input.addEventListener('change', function () { updateFiles(input.files); });
        ['dragenter', 'dragover'].forEach(function (eventName) {
            dropzone.addEventListener(eventName, function (event) {
                event.preventDefault();
                dropzone.classList.add('is-dragging');
            });
        });
        ['dragleave', 'drop'].forEach(function (eventName) {
            dropzone.addEventListener(eventName, function (event) {
                event.preventDefault();
                dropzone.classList.remove('is-dragging');
            });
        });
        dropzone.addEventListener('drop', function (event) { updateFiles(event.dataTransfer.files); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGalleryUpload);
    } else {
        initializeGalleryUpload();
    }
})();
