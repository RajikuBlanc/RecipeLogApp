# Generated by Django 3.2.9 on 2021-11-25 01:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20211125_1043'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='Measure',
            field=models.IntegerField(default=1, verbose_name='数量'),
        ),
    ]
