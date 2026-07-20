from django.urls import path
from .views import (
    CourseListCreateAPIView,
    CourseDetailAPIView,
    DepartmentListCreateAPIView,
    DepartmentDetailAPIView,
)

urlpatterns = [
    path('departments/', DepartmentListCreateAPIView.as_view(), name='department-list-create'),
    path('departments/<int:pk>/', DepartmentDetailAPIView.as_view(), name='department-detail'),
    path('courses/', CourseListCreateAPIView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', CourseDetailAPIView.as_view(), name='course-detail'),
]
