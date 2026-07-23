from django.contrib import admin

from .models import Course, Department


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'department', 'duration_weeks', 'credits', 'is_active', 'created_at')
    list_filter = ('is_active', 'department')
    search_fields = ('title', 'slug', 'description')
    prepopulated_fields = {'slug': ('title',)}
    autocomplete_fields = ('department',)
    readonly_fields = ('created_at',)
