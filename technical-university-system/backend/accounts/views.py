from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .serializers import RegisterSerializer, UserListSerializer


class RegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserListSerializer
    permission_classes = [permissions.IsAdminUser]
