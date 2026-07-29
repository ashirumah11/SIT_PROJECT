from rest_framework import serializers
from .models import ContactMessage, DepartmentContact


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email','phone', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class DepartmentContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepartmentContact
        fields = ['id', 'department', 'phone', 'email', 'address', 'status','updated_at']
        read_only_fields = ['id', 'updated_at']
