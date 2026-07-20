from rest_framework import generics
from .models import NewsArticle
from .serializers import NewsArticleSerializer


class NewsArticleListCreateAPIView(generics.ListCreateAPIView):
    queryset = NewsArticle.objects.filter(is_published=True)
    serializer_class = NewsArticleSerializer


class NewsArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NewsArticle.objects.all()
    serializer_class = NewsArticleSerializer
