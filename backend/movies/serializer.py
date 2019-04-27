from rest_framework import serializers
from movies.models import Movie, Category


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        exclude = ('created_date', 'modified_date',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ('created_date', 'modified_date',)
