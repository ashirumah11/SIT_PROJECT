(function () {
    function initializeRichText() {
        if (!window.tinymce) {
            return;
        }

        window.tinymce.remove('textarea.rich-text-editor');
        window.tinymce.init({
            selector: 'textarea.rich-text-editor',
            menubar: false,
            height: 420,
            plugins: 'lists link image table',
            toolbar: 'undo redo | blocks | bold italic underline | bullist numlist | link image table | blockquote',
            branding: false,
            promotion: false,
            setup: function (editor) {
                editor.on('change', function () {
                    editor.save();
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeRichText);
    } else {
        initializeRichText();
    }
})();
