from django.db import models


class Announcement(models.Model):
    title = models.CharField(max_length=220)
    message = models.TextField()
    link = models.URLField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=True)
    is_active = models.BooleanField(default=True)
    starts_at = models.DateTimeField(null=True, blank=True)
    ends_at = models.DateTimeField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name_plural = 'Announcements'

    def __str__(self):
        return self.title


class StaffMember(models.Model):
    name = models.CharField(max_length=160)
    role = models.CharField(max_length=160)
    department = models.CharField(max_length=160, blank=True)
    bio = models.TextField(blank=True)
    image = models.ImageField(upload_to='staff/', blank=True, null=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', 'name']

    def __str__(self):
        return self.name


class EventItem(models.Model):
    title = models.CharField(max_length=220)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=220, blank=True)
    starts_at = models.DateTimeField()
    ends_at = models.DateTimeField(null=True, blank=True)
    image = models.ImageField(upload_to='events/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-starts_at']

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    author = models.CharField(max_length=160)
    role = models.CharField(max_length=160, blank=True)
    quote = models.TextField()
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.author

class GalleryItem(models.Model):
    title = models.CharField(max_length=220)
    # 👈 Add blank=True, null=True here
    image = models.ImageField(upload_to='gallery/', blank=True, null=True)
    caption = models.CharField(max_length=320, blank=True)
    alt_text = models.CharField(max_length=220, blank=True)
    category = models.CharField(max_length=120, blank=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title