from io import BytesIO

from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from django.urls import reverse
from PIL import Image
from rest_framework import status
from rest_framework.test import APIClient

from .models import (
    Announcement,
    HeroCarouselItem,
    StaffMember,
    EventItem,
    Testimonial,
    GalleryItem,
)


class ContentApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            username='adminuser',
            email='admin@example.com',
            password='secure-pass-123',
            is_staff=True,
        )
        Announcement.objects.create(title='Launch', message='Announcement', is_active=True)
        StaffMember.objects.create(name='Alice', role='Director', is_active=True)
        EventItem.objects.create(title='Open Day', starts_at='2026-08-01T09:00:00Z', is_active=True)
        Testimonial.objects.create(author='Bob', quote='Great school', is_active=True)
        GalleryItem.objects.create(title='Campus', image='gallery/campus.jpg', is_active=True)
        HeroCarouselItem.objects.create(
            title='Learn by doing',
            subtitle='Build practical skills that matter.',
            image='gallery/hero-slide.jpg',
            is_active=True,
            order=1,
        )

    def test_announcements_list(self):
        url = reverse('announcement-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_staff_list(self):
        url = reverse('staffmember-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_events_list(self):
        url = reverse('eventitem-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_testimonials_list(self):
        url = reverse('testimonial-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_gallery_list(self):
        url = reverse('galleryitem-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_hero_carousel_list(self):
        url = reverse('herocarouselitem-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_hero_carousel_create(self):
        self.client.force_authenticate(user=self.user)
        url = reverse('herocarouselitem-list-create')

        image_bytes = BytesIO()
        Image.new('RGB', (10, 10), color='blue').save(image_bytes, format='PNG')
        image_bytes.seek(0)

        payload = {
            'title': 'Industry-ready training',
            'subtitle': 'Practical learning with modern facilities.',
            'image': SimpleUploadedFile('hero.png', image_bytes.read(), content_type='image/png'),
            'button_text': 'Apply now',
            'button_link': 'https://example.com/apply',
            'is_active': True,
            'order': 2,
        }
        response = self.client.post(url, payload, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(HeroCarouselItem.objects.count(), 2)