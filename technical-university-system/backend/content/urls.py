from django.urls import path
from .views import (
    AnnouncementViewSet,
    StaffMemberViewSet,
    EventItemViewSet,
    TestimonialViewSet,
    GalleryItemViewSet,
)

urlpatterns = [
    # Announcements
    path(
        'announcements/',
        AnnouncementViewSet.as_view({'get': 'list', 'post': 'create'}),
        name='announcement-list-create'
    ),
    path(
        'announcements/<int:pk>/',
        AnnouncementViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}),
        name='announcement-detail'
    ),

    # Staff
    path(
        'staff/',
        StaffMemberViewSet.as_view({'get': 'list', 'post': 'create'}),
        name='staffmember-list-create'
    ),
    path(
        'staff/<int:pk>/',
        StaffMemberViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}),
        name='staffmember-detail'
    ),

    # Events
    path(
        'events/',
        EventItemViewSet.as_view({'get': 'list', 'post': 'create'}),
        name='eventitem-list-create'
    ),
    path(
        'events/<int:pk>/',
        EventItemViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}),
        name='eventitem-detail'
    ),

    # Testimonials
    path(
        'testimonials/',
        TestimonialViewSet.as_view({'get': 'list', 'post': 'create'}),
        name='testimonial-list-create'
    ),
    path(
        'testimonials/<int:pk>/',
        TestimonialViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}),
        name='testimonial-detail'
    ),

    # Gallery
    path(
        'gallery/',
        GalleryItemViewSet.as_view({'get': 'list', 'post': 'create'}),
        name='galleryitem-list-create'
    ),
    path(
        'gallery/<int:pk>/',
        GalleryItemViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}),
        name='galleryitem-detail'
    ),
]