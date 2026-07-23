from django.contrib import admin

from .models import ContactMessage, DepartmentContact


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('subject', 'name', 'email', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',)


@admin.register(DepartmentContact)
class DepartmentContactAdmin(admin.ModelAdmin):
    list_display = ('department', 'phone', 'email', 'updated_at')
    search_fields = ('department', 'phone', 'email', 'address')
    readonly_fields = ('updated_at',)
