from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from .models import Announcement, StaffMember, EventItem, Testimonial, GalleryItem


class ContentApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        Announcement.objects.create(title='Launch', message='Announcement', is_active=True)
        StaffMember.objects.create(name='Alice', role='Director', is_active=True)
        EventItem.objects.create(title='Open Day', starts_at='2026-08-01T09:00:00Z', is_active=True)
        Testimonial.objects.create(author='Bob', quote='Great school', is_active=True)
        GalleryItem.objects.create(title='Campus', image_url='https://example.com/photo.jpg', is_active=True)

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