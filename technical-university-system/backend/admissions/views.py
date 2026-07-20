from rest_framework import generics
from .models import Admission
from .serializers import AdmissionSerializer


class AdmissionListCreateAPIView(generics.ListCreateAPIView):
    queryset = Admission.objects.all()
    serializer_class = AdmissionSerializer


class AdmissionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admission.objects.all()
    serializer_class = AdmissionSerializer
