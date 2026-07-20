from rest_framework import serializers
from .models import Admission


class AdmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admission
        fields = [
            'id',
            'first_name',
            'last_name',
            'email',
            'phone',
            'course',
            'applied_at',
            'status',
            'message',
        ]
        read_only_fields = ['id', 'applied_at']
