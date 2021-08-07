from django.contrib import admin
from django.urls import path,re_path,include

from django.conf import settings
from django.views.static import serve
from django.conf.urls.static import static
from django.views.generic import TemplateView

admin.site.site_header = "Aman Solutions"
admin.site.index_title = "Vlog CMS"
admin.site.site_title = "Vlog Dashboard"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog-api/', include('blog.urls'),name="blog"),

    re_path(r'^staticfiles/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), # Local Static Files

    re_path(r'^static/(?P<path>.*)$', serve, { 'document_root': settings.FRONTEND_ROOT / "static"}),  # For Frontend Static files only

    re_path(r'^(?P<path>.*\.[a-z]{3,4})$', serve, { 'document_root': settings.FRONTEND_ROOT }),  # For Frontend files    
    re_path(r'^(?P<path>.*\.js)$', serve, { 'document_root': settings.FRONTEND_ROOT }),  # For Frontend files    

    re_path(r'^(?P<path>.*)$', TemplateView.as_view(template_name="index.html"), name='home'), # For frontend
    
]