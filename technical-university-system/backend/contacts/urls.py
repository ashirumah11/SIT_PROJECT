from django.urls import path
from .views import (
    ContactMessageListCreateAPIView,
    ContactMessageDetailAPIView,
    DepartmentContactListCreateAPIView,
    DepartmentContactDetailAPIView,
)

urlpatterns = [
    path('messages/', ContactMessageListCreateAPIView.as_view(), name='contactmessage-list-create'),
    path('messages/<int:pk>/', ContactMessageDetailAPIView.as_view(), name='contactmessage-detail'),
    path('departments/', DepartmentContactListCreateAPIView.as_view(), name='departmentcontact-list-create'),
    path('departments/<int:pk>/', DepartmentContactDetailAPIView.as_view(), name='departmentcontact-detail'),
]
