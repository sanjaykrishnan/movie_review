from rest_framework import viewsets
from movies.models import Movie, Category
from movies.serializer import MovieSerializer, CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    lookup_field = 'slug'
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class MovieViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    lookup_field = 'slug'
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
