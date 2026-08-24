from django.db import models


class NewsArticle(models.Model):
    title = models.CharField(max_length=220)
    slug = models.SlugField(max_length=240, unique=True)
    summary = models.CharField(max_length=320)
    content = models.TextField()
    image = models.ImageField(upload_to='news/', blank=True, null=True)
    author = models.CharField(max_length=120, blank=True)
    published_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['-updated_at']

    def __str__(self):
        return self.title
