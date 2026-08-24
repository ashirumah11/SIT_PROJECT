from django import forms
from django.contrib import admin
from django.db import models
from django.utils.html import format_html

from .models import NewsArticle


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': forms.Textarea(attrs={'class': 'rich-text-editor'})},
    }

    class Media:
        js = (
            'https://cdn.jsdelivr.net/npm/tinymce@7.6.1/tinymce.min.js',
            'content/rich_text.js',
        )
    list_display = ('image_preview', 'title', 'author', 'is_published', 'published_at', 'updated_at')
    list_filter = ('is_published', 'published_at', 'updated_at')
    search_fields = ('title', 'slug', 'summary', 'content', 'author')
    prepopulated_fields = {'slug': ('title',)}
    ordering = ('-updated_at',)
    fields = ('title', 'slug', 'summary', 'content', 'image', 'image_preview', 'author', 'is_published', 'published_at', 'updated_at')
    readonly_fields = ('published_at', 'updated_at', 'image_preview')

    @admin.display(description='Image')
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height: 72px; width: 112px; object-fit: cover; border-radius: 5px;"/>',
                obj.image.url,
            )
        return 'No image'
