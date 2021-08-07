import random, string

from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class BlogCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.TextField(blank=True)
    image = models.URLField(blank=True)


    def __str__(self):
        return self.name

def random_code(k = 6):
    ran = ''.join(random.choices(string.ascii_lowercase + string.digits, k = k))
    while TechBlog.objects.filter(id=ran).exists():
        ran = ''.join(random.choices(string.ascii_lowercase + string.digits, k = k))
    return ran


class Author(models.Model):

    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True,default=None)
    name = models.CharField(max_length=20)
    image = models.ImageField(upload_to=settings.BASE_DIR / 'staticfiles'/ 'media')

    def __str__(self):
        return self.name

class TechBlog(models.Model):

    id = models.CharField(default=random_code,primary_key=True,max_length=6,auto_created=True)
    title = models.TextField()
    subtitle = models.TextField(blank=True)
    image = models.TextField(blank=True)
    content = models.TextField()
    topic = models.ManyToManyField(BlogCategory,blank=True)
    author = models.ForeignKey(Author,on_delete=models.SET_NULL, null=True)
    created = models.DateTimeField(auto_now=True)
    publish = models.BooleanField(default=False,blank=True) # For default = False, it need to be (blank = True so serializer won't conflict)


    def __str__(self):
        return self.title