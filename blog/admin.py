from django.contrib import admin

from .models import TechBlog,BlogCategory,Author

# Register your models here.

admin.site.register(TechBlog)
admin.site.register(BlogCategory)
admin.site.register(Author)
