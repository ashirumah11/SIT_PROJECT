"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView
import os

frontend_url = os.environ.get('FRONTEND_URL', 'http://localhost:5173')

urlpatterns = [
    path('', RedirectView.as_view(url=frontend_url, permanent=False)),
    path('admin/', admin.site.urls),
    path('api/v1/', include('config.api_urls')),
]

# Serve media files in development (when DEBUG = True)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)