from django.contrib import admin
from movies.models import Category, Movie
# Register your models here.
admin.site.register(Movie)
admin.site.register(Category)