from django.contrib import admin

from .models import NewsArticle


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'is_published', 'published_at', 'updated_at')
    list_filter = ('is_published', 'published_at', 'updated_at')
    search_fields = ('title', 'slug', 'summary', 'content', 'author')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('published_at', 'updated_at')
    ordering = ('-updated_at',)
    fields = ('title', 'slug', 'summary', 'content', 'author', 'is_published', 'published_at', 'updated_at')
