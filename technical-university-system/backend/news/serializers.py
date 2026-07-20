from rest_framework import serializers
from .models import NewsArticle


class NewsArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsArticle
        fields = [
            'id',
            'title',
            'slug',
            'summary',
            'content',
            'author',
            'published_at',
            'is_published',
        ]
        read_only_fields = ['id', 'published_at']
