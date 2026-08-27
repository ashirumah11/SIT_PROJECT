from django import forms
from django.contrib import admin
from django.db import models
from django.utils.html import format_html, mark_safe
from .models import Announcement, StaffMember, EventItem, Testimonial, GalleryItem, HeroCarouselItem


class RichTextAdminMixin:
    formfield_overrides = {
        models.TextField: {'widget': forms.Textarea(attrs={'class': 'rich-text-editor'})},
    }

    class Media:
        js = (
            'https://cdn.jsdelivr.net/npm/tinymce@7.6.1/tinymce.min.js',
            'content/rich_text.js',
        )


class MultipleImageInput(forms.ClearableFileInput):
    allow_multiple_selected = True


class MultipleImageField(forms.ImageField):
    widget = MultipleImageInput

    def clean(self, data, initial=None):
        if not data:
            return []
        files = data if isinstance(data, (list, tuple)) else [data]
        return [super(MultipleImageField, self).clean(upload, initial) for upload in files]


class GalleryItemForm(forms.ModelForm):
    image = MultipleImageField(required=False)

    class Meta:
        model = GalleryItem
        fields = '__all__'


@admin.register(Announcement)
class AnnouncementAdmin(RichTextAdminMixin, admin.ModelAdmin):
    list_display = ('title', 'is_active', 'starts_at', 'ends_at', 'order')
    list_filter = ('is_active',)
    search_fields = ('title', 'message')
    ordering = ('order', '-created_at')
    fields = (
        'title',
        'message',
        'link',
        'phone',
        'email',
        'is_active',
        'starts_at',
        'ends_at',
        'order',
        'created_at',
        'updated_at',
    )
    readonly_fields = ('created_at', 'updated_at')


@admin.register(StaffMember)
class StaffMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'department', 'image_preview', 'is_active', 'display_order')
    list_filter = ('is_active', 'department')
    search_fields = ('name', 'role', 'department', 'bio')
    ordering = ('display_order', 'name')
    readonly_fields = ('image_preview', 'created_at', 'updated_at')
    fields = (
        'name', 'role', 'department', 'bio', 'image', 'image_preview',
        'email', 'phone', 'is_active', 'display_order', 'created_at', 'updated_at',
    )

    @admin.display(description='Image')
    def image_preview(self, obj):
        try:
            if obj.image:
                return format_html('<img src="{}" style="height: 72px; width: 96px; object-fit: cover; border-radius: 5px;"/>', obj.image.url)
            return mark_safe('<span style="color: red;">❌ No Image</span>')
        except Exception:
            return mark_safe('<span style="color: red;">❌ Error</span>')


@admin.register(EventItem)
class EventItemAdmin(RichTextAdminMixin, admin.ModelAdmin):
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
    readonly_fields = ('created_at', 'updated_at', 'image_preview')
    fields = (
        'title',
        'description',
        'location',
        'starts_at',
        'ends_at',
        'image',
        'image_preview',
        'is_featured',
        'is_active',
        'created_at',
        'updated_at',
    )

    @admin.display(description='Image')
    def image_preview(self, obj):
        try:
            if obj.image:
                return format_html('<img src="{}" style="max-height: 200px; border-radius: 4px;"/>', obj.image.url)
            return mark_safe('<span style="color: red;">❌ No Image</span>')
        except Exception:
            return mark_safe('<span style="color: red;">❌ Error</span>')


@admin.register(Testimonial)
class TestimonialAdmin(RichTextAdminMixin, admin.ModelAdmin):
    list_display = ('author', 'role', 'image_preview', 'is_featured', 'is_active', 'order')
    list_filter = ('is_active', 'is_featured')
    search_fields = ('author', 'role', 'quote')
    ordering = ('order', '-created_at')

    @admin.display(description='Image')
    def image_preview(self, obj):
        try:
            if obj.image:
                return format_html('<img src="{}" style="height: 72px; width: 96px; object-fit: cover; border-radius: 5px;"/>', obj.image.url)
            return mark_safe('<span style="color: red;">❌ No Image</span>')
        except Exception:
            return mark_safe('<span style="color: red;">❌ Error</span>')


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    form = GalleryItemForm
    list_display = ('title', 'category', 'image_preview', 'is_active', 'order')
    list_filter = ('is_active', 'category')
    search_fields = ('title', 'alt_text', 'caption')
    ordering = ('order', '-created_at')
    readonly_fields = ('image_preview', 'created_at', 'updated_at')
    fields = (
        'title', 'image', 'image_preview', 'caption', 'alt_text', 'category',
        'is_active', 'order', 'created_at', 'updated_at',
    )

    class Media:
        js = ('content/gallery_upload.js',)
        css = {'all': ('content/gallery_upload.css',)}

    def save_form(self, request, form, change):
        obj = super().save_form(request, form, change)
        uploads = form.cleaned_data.get('image', [])
        obj.image = uploads[0] if uploads else None
        obj._extra_images = uploads[1:]
        return obj

    def save_model(self, request, obj, form, change):
        extra_images = getattr(obj, '_extra_images', [])
        obj.save()
        for offset, image in enumerate(extra_images, start=1):
            GalleryItem.objects.create(
                title=obj.title,
                image=image,
                caption=obj.caption,
                alt_text=obj.alt_text,
                category=obj.category,
                is_active=obj.is_active,
                order=obj.order + offset,
            )

    @admin.display(description='Image')
    def image_preview(self, obj):
        try:
            if obj.image:
                return format_html('<img src="{}" style="height: 72px; width: 96px; object-fit: cover; border-radius: 5px;"/>', obj.image.url)
            return mark_safe('<span style="color: red;">❌ No Image</span>')
        except Exception:
            return mark_safe('<span style="color: red;">❌ Error</span>')


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
        try:
            if obj.image:
                return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;"/>', obj.image.url)
            return mark_safe('<span style="color: red;">❌ No Image</span>')
        except Exception:
            return mark_safe('<span style="color: red;">❌ Error</span>')