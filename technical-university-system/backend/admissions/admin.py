from django.contrib import admin

from .models import Admission


@admin.register(Admission)
class AdmissionAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'course', 'status', 'applied_at')
    list_filter = ('status', 'course', 'applied_at')
    search_fields = ('first_name', 'last_name', 'email', 'phone')
    autocomplete_fields = ('course',)
    readonly_fields = ('applied_at',)
    ordering = ('-applied_at',)
