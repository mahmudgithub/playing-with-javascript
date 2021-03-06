# Generated by Django 3.1.4 on 2020-12-25 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('script_one', '0002_auto_20201225_0441'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='date',
            new_name='Date',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='image',
            new_name='Image',
        ),
        migrations.AddField(
            model_name='post',
            name='Link',
            field=models.URLField(blank=True, verbose_name='Web Address'),
        ),
    ]
