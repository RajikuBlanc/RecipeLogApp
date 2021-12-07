from django.db import models
import uuid
# Create your models here.


class Seasoning(models.Model):
    name = models.CharField(max_length=100, verbose_name='調味料名')
    measure = models.IntegerField(default=0, verbose_name='重量')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'seasoning'
        verbose_name_plural = '調味料'


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    memo = models.TextField()
    # seasoningName = models.ForeignKey(Seasoning, on_delete=models.CASCADE, null=True)
    seasoningName = models.ManyToManyField(Seasoning, verbose_name='調味料')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'recipes'
        verbose_name_plural = 'レシピ'
