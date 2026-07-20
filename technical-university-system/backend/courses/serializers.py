from rest_framework import serializers
from .models import Course, Department


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name', 'description', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class CourseSerializer(serializers.ModelSerializer):
    department = serializers.PrimaryKeyRelatedField(
        queryset=Department.objects.all(),
        required=False,
        allow_null=True,
    )

    class Meta:
        model = Course
        fields = [
            'id',
            'title',
            'slug',
            'department',
            'description',
            'duration_weeks',
            'credits',
            'is_active',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']
