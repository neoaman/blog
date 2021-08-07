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

    path('', TemplateView.as_view(template_name="index.html"), name='home'), # For frontend
    path('post/<str:pk>', TemplateView.as_view(template_name="index.html"), name='home'), # For frontend
    path('newpost', TemplateView.as_view(template_name="index.html"), name='home'), # For frontend
    path('editpost/<str:pk>', TemplateView.as_view(template_name="index.html"), name='home'), # For frontend

    re_path(r'^staticfiles/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), # Local Static Files

    re_path(r'^static/(?P<path>.*)$', serve, { 'document_root': settings.FRONTEND_ROOT / "static"}),  # For Frontend Static files only
    re_path(r'^(?P<path>[a-z\-0-9]+\.[(js)(png)(ico)(json)(css)(txt)(html)]+)$', serve, { 'document_root': settings.FRONTEND_ROOT }),  # For Frontend files    
    
    # Some re_path to serve frontend
    # re_path(r'^$', TemplateView.as_view(template_name="index.html"), name='home'), # For frontend
    # re_path(r'^(?P<path>.*)$', TemplateView.as_view(template_name="index.html"), name='home'), # For frontend
    
    
]