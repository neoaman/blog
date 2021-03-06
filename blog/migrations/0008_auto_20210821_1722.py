# Generated by Django 3.2 on 2021-08-21 17:22

from django.db import migrations, models
import pathlib


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20210807_1340'),
    ]

    operations = [
        migrations.AddField(
            model_name='techblog',
            name='css_content',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='techblog',
            name='extra_content',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='author',
            name='image',
            field=models.ImageField(default='user.png', upload_to=pathlib.PurePosixPath('/media/aman/Study/PROJECTS/solutions/sql_vlog/staticfiles/media')),
        ),
    ]
