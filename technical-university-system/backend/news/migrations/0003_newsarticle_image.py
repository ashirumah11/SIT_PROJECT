from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_alter_newsarticle_options_newsarticle_updated_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsarticle',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='news/'),
        ),
    ]