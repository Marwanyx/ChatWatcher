# Generated by Django 3.2.3 on 2022-05-01 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_stats_neutralcomments'),
    ]

    operations = [
        migrations.AddField(
            model_name='stats',
            name='streamerThumbnail',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
