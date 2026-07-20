from django.urls import path
from .views import AdmissionListCreateAPIView, AdmissionDetailAPIView

urlpatterns = [
    path('', AdmissionListCreateAPIView.as_view(), name='admission-list-create'),
    path('<int:pk>/', AdmissionDetailAPIView.as_view(), name='admission-detail'),
]
