# Generated by Django 3.2.9 on 2021-12-07 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_auto_20211207_2105'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='SeasoningName',
        ),
        migrations.AddField(
            model_name='recipe',
            name='seasoning',
            field=models.ManyToManyField(to='api.Seasoning', verbose_name='調味料'),
        ),
    ]
