from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='department',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='departments/'),
        ),
    ]