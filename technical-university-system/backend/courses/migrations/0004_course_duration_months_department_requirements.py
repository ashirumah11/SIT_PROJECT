from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_department_duration_months'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='duration_months',
            field=models.PositiveIntegerField(default=0, help_text='Course duration in months.'),
        ),
        migrations.AddField(
            model_name='department',
            name='requirements',
            field=models.TextField(blank=True, help_text='Enter one requirement per line.'),
        ),
    ]