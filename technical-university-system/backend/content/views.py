from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Announcement, StaffMember, EventItem, Testimonial, GalleryItem
from .serializers import (
    AnnouncementSerializer,
    StaffMemberSerializer,
    EventItemSerializer,
    TestimonialSerializer,
    GalleryItemSerializer,
)

class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Announcement.objects.all()
        if self.action == 'list':
            return queryset.filter(is_active=True)
        return queryset

class StaffMemberViewSet(viewsets.ModelViewSet):
    queryset = StaffMember.objects.all()
    serializer_class = StaffMemberSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class EventItemViewSet(viewsets.ModelViewSet):
    queryset = EventItem.objects.all()
    serializer_class = EventItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = EventItem.objects.all()
        if self.action == 'list':
            return queryset.filter(is_active=True)
        return queryset

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class GalleryItemViewSet(viewsets.ModelViewSet):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = GalleryItem.objects.all()
        if self.action == 'list':
            return queryset.filter(is_active=True)
        return queryset