# Generated by Django 5.1.4 on 2025-01-20 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_product_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='business_image',
            field=models.ImageField(default='default_business_image.png', upload_to='business_image/'),
        ),
        migrations.AlterField(
            model_name='business',
            name='business_logo',
            field=models.ImageField(default='default_logo.png', upload_to='business_logo/'),
        ),
    ]
