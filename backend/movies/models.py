from django.db import models
from autoslug import AutoSlugField
from movie_review.utils.base_model import TimeStampedModel
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres.validators import (MaxValueValidator, MinValueValidator,)


class Category(TimeStampedModel):
    name = models.CharField(_('Category Name'), max_length=255)
    slug = AutoSlugField(populate_from='name', unique=True)

    class Meta:
        verbose_name_plural = _('Categories')

    def __str__(self):
        return self.name


class Movie(TimeStampedModel):
    """
    Model for a Movies.
    """
    title = models.CharField(_('Title'), max_length=255)
    slug = AutoSlugField(populate_from='title', unique=True)
    description = models.TextField(_('Short Description'))
    image = models.ImageField(_('Image'))
    review = models.TextField(_('Review'))
    directors = models.TextField(_('Directors'))
    writers = models.TextField(_('Writers'))
    stars = models.TextField(_('Stars'))
    length = models.IntegerField(_('Length'), default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)],
                                 help_text="Enter Length in Minutes.")
    release_date = models.DateField(_('Release Date'))
    rating = models.IntegerField(_('Rating'), default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])
    categories = models.ManyToManyField(Category, verbose_name=_("Categories"))

    class Meta:
        verbose_name_plural = _("Movies")

    def __str__(self):
        return self.title



