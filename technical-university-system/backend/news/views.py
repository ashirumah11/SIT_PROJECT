from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from .models import NewsArticle
from .serializers import NewsArticleSerializer


class NewsArticleListCreateAPIView(generics.ListCreateAPIView):
    """
    Publicly lists all published news articles.
    Creation requires auth unless you specifically want public creation.
    """
    queryset = NewsArticle.objects.filter(is_published=True)
    serializer_class = NewsArticleSerializer
    permission_classes = [AllowAny]


class NewsArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Allows public GET access to individual news articles, 
    while restricting PUT, PATCH, and DELETE to authenticated users.
    """
    queryset = NewsArticle.objects.all()
    serializer_class = NewsArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]