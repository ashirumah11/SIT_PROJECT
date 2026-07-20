from django.urls import path
from .views import NewsArticleListCreateAPIView, NewsArticleDetailAPIView

urlpatterns = [
    path('', NewsArticleListCreateAPIView.as_view(), name='newsarticle-list-create'),
    path('<int:pk>/', NewsArticleDetailAPIView.as_view(), name='newsarticle-detail'),
]
