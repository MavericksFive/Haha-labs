# Generated by Django 4.2.4 on 2023-11-30 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('deal_users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='signed_successful',
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=128, verbose_name='password'),
        ),
    ]