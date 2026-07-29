from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import ContactMessage, DepartmentContact
from .serializers import ContactMessageSerializer, DepartmentContactSerializer


class ContactMessageListCreateAPIView(generics.ListCreateAPIView):
    """
    Publicly allows anyone to POST/submit contact messages.
    Requires authentication to GET/list messages (protecting visitor data).
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [AllowAny()]
        return [IsAuthenticated()]


class ContactMessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Only authenticated users (admins/staff) can view, update, or delete submitted messages.
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [IsAuthenticated]


class DepartmentContactListCreateAPIView(generics.ListCreateAPIView):
    """
    Public GET access for department contacts; authentication required to POST.
    """
    queryset = DepartmentContact.objects.all()
    serializer_class = DepartmentContactSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class DepartmentContactDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Public GET access for department contact details; authentication required to PUT/PATCH/DELETE.
    """
    queryset = DepartmentContact.objects.all()
    serializer_class = DepartmentContactSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]