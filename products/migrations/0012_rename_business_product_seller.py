# Generated by Django 5.0.6 on 2025-01-31 21:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_remove_order_buyer_remove_order_timestamp_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='business',
            new_name='seller',
        ),
    ]
