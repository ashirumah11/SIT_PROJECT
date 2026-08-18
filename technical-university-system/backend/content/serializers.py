from rest_framework import serializers
from .models import Announcement, StaffMember, EventItem, Testimonial, GalleryItem, HeroCarouselItem


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']


class StaffMemberSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = StaffMember
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        try:
            if obj.image and hasattr(obj.image, 'url'):
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.image.url)
                return obj.image.url
            return None
        except Exception:
            return None


class EventItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = EventItem
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        try:
            if obj.image and hasattr(obj.image, 'url'):
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.image.url)
                return obj.image.url
            return None
        except Exception:
            return None


class TestimonialSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Testimonial
        fields = '__all__'
        read_only_fields = ['id', 'created_at']

    def get_image_url(self, obj):
        try:
            if obj.image and hasattr(obj.image, 'url'):
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.image.url)
                return obj.image.url
            return None
        except Exception:
            return None


class GalleryItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = GalleryItem
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        try:
            if obj.image and hasattr(obj.image, 'url'):
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.image.url)
                return obj.image.url
            return None
        except Exception:
            return None


class HeroCarouselItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = HeroCarouselItem
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_image_url(self, obj):
        try:
            if obj.image and hasattr(obj.image, 'url'):
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.image.url)
                return obj.image.url
            return None
        except Exception:
            return None