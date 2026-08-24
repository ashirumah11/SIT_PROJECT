from django.db import models


class Department(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    requirements = models.TextField(blank=True, help_text='Enter one requirement per line.')
    image = models.ImageField(upload_to='departments/', blank=True, null=True)
    duration_months = models.PositiveIntegerField(default=0, help_text='Program duration in months.')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Course(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True)
    department = models.ForeignKey(
        Department,
        related_name='courses',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    description = models.TextField(blank=True)
    duration_months = models.PositiveIntegerField(default=0, help_text='Course duration in months.')
    duration_weeks = models.PositiveIntegerField(default=0)
    credits = models.PositiveSmallIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title
