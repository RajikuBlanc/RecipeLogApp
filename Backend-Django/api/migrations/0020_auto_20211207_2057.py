# Generated by Django 3.2.9 on 2021-12-07 11:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_auto_20211125_1555'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='seasoning',
        ),
        migrations.AddField(
            model_name='recipe',
            name='Seasoning',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.seasoning'),
        ),
    ]
