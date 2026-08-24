from django.contrib import admin
from django.utils.html import format_html

from .models import Course, Department


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('image_preview', 'name', 'duration_months', 'created_at', 'updated_at')
    search_fields = ('name', 'description', 'requirements')
    readonly_fields = ('image_preview', 'created_at', 'updated_at')
    fields = ('name', 'description', 'requirements', 'duration_months', 'image', 'image_preview', 'created_at', 'updated_at')

    @admin.display(description='Image')
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height: 100px; width: 150px; object-fit: cover; border-radius: 5px;"/>',
                obj.image.url,
            )
        return 'No image selected'


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'department', 'duration_months', 'duration_weeks', 'credits', 'is_active', 'created_at')
    list_filter = ('is_active', 'department')
    search_fields = ('title', 'slug', 'description')
    prepopulated_fields = {'slug': ('title',)}
    autocomplete_fields = ('department',)
    readonly_fields = ('created_at',)
    fieldsets = (
        (None, {'fields': ('title', 'slug', 'department', 'description')}),
        ('Course details', {'fields': ('duration_months', 'duration_weeks', 'credits', 'is_active')}),
        ('Timestamps', {'fields': ('created_at',)}),
    )
