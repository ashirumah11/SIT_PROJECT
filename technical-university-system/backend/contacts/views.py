from rest_framework import generics
from .models import ContactMessage, DepartmentContact
from .serializers import ContactMessageSerializer, DepartmentContactSerializer


class ContactMessageListCreateAPIView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


class ContactMessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


class DepartmentContactListCreateAPIView(generics.ListCreateAPIView):
    queryset = DepartmentContact.objects.all()
    serializer_class = DepartmentContactSerializer


class DepartmentContactDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DepartmentContact.objects.all()
    serializer_class = DepartmentContactSerializer
