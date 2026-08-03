from django.contrib import admin
from django.utils.html import format_html
from .models import Announcement, StaffMember, EventItem, Testimonial, GalleryItem, HeroCarouselItem


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_active', 'starts_at', 'ends_at', 'order')
    list_filter = ('is_active',)
    search_fields = ('title', 'message')
    ordering = ('order', '-created_at')


@admin.register(StaffMember)
class StaffMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'department', 'image_preview', 'is_active', 'display_order')
    list_filter = ('is_active', 'department')
    search_fields = ('name', 'role', 'department', 'bio')
    ordering = ('display_order', 'name')

    @admin.display(description='Image')
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;"/>', obj.image.url)
        return format_html('<span style="color: {};">{}</span>', 'red', '❌ No Image')


@admin.register(EventItem)
class EventItemAdmin(admin.ModelAdmin):
    list_display = (
        'title', 
        'starts_at', 
        'location', 
        'image_preview', 
        'is_featured', 
        'is_active'
    )
    list_filter = ('is_active', 'is_featured')
    search_fields = ('title', 'description', 'location')
    ordering = ('-starts_at',)

    @admin.display(description='Image')
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;"/>', obj.image.url)
        return format_html('<span style="color: {};">{}</span>', 'red', '❌ No Image')


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('author', 'role', 'image_preview', 'is_featured', 'is_active', 'order')
    list_filter = ('is_active', 'is_featured')
    search_fields = ('author', 'role', 'quote')
    ordering = ('order', '-created_at')

    @admin.display(description='Image')
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;"/>', obj.image.url)
        return format_html('<span style="color: {};">{}</span>', 'red', '❌ No Image')


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'image_preview', 'is_active', 'order')
    list_filter = ('is_active', 'category')
    search_fields = ('title', 'alt_text', 'caption')
    ordering = ('order', '-created_at')

    @admin.display(description='Image')
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;"/>', obj.image.url)
        return format_html('<span style="color: {};">{}</span>', 'red', '❌ No Image')


@admin.register(HeroCarouselItem)
class HeroCarouselItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle_preview', 'image_preview', 'button_text', 'is_active', 'order')
    list_editable = ('is_active', 'order')
    list_filter = ('is_active',)
    search_fields = ('title', 'subtitle', 'button_text')
    ordering = ('order', '-created_at')
    readonly_fields = ('created_at', 'updated_at')
    fields = (
        'title',
        'subtitle',
        'image',
        'button_text',
        'button_link',
        'is_active',
        'order',
        'created_at',
        'updated_at',
    )

    @admin.display(description='Subtitle')
    def subtitle_preview(self, obj):
        return obj.subtitle[:60] if obj.subtitle else '—'

    @admin.display(description='Image')
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;"/>', obj.image.url)
        return format_html('<span style="color: {};">{}</span>', 'red', '❌ No Image')