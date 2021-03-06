# Generated by Django 2.2 on 2019-04-26 07:25

import autoslug.fields
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=255, verbose_name='Category Name')),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='name', unique=True)),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='title', unique=True)),
                ('description', models.TextField(verbose_name='Short Description')),
                ('image', models.ImageField(upload_to='', verbose_name='Image')),
                ('review', models.TextField(verbose_name='Review')),
                ('directors', models.TextField(verbose_name='Directors')),
                ('writers', models.TextField(verbose_name='Writers')),
                ('stars', models.TextField(verbose_name='Stars')),
                ('length', models.DurationField(verbose_name='Length')),
                ('release_date', models.DateField(verbose_name='Release Date')),
                ('rating', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)], verbose_name='Rating')),
                ('categories', models.ManyToManyField(to='movies.Category', verbose_name='Categories')),
            ],
            options={
                'verbose_name_plural': 'Movies',
            },
        ),
    ]
