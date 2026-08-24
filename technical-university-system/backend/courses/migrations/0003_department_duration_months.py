from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_department_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='department',
            name='duration_months',
            field=models.PositiveIntegerField(default=0, help_text='Program duration in months.'),
        ),
    ]