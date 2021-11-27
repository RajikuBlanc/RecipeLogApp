from django.contrib import admin
from .models import Recipe, Seasoning


class SeasoningAdmin(admin.ModelAdmin):
    list_display = ['name', 'measure']


admin.site.register(Recipe)
admin.site.register(Seasoning, SeasoningAdmin)
