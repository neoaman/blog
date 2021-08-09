from django.contrib import admin
from django.urls import path,re_path,include

from .views import RootBlogView, TechBlogListView,TechBlogRetriveView,BlogCategoryListView,BlogCategoryRetriveView,AuthorListView,AuthorRetriveView

app_name = "blog"
urlpatterns = [

    path("",RootBlogView.as_view(),name="home"),

    path('post/', TechBlogListView.as_view(), name="post_list"),
    path('post/<str:pk>', TechBlogRetriveView.as_view(), name="post_retrive"),

    path('topic/', BlogCategoryListView.as_view(), name="blogCat_list"),
    path('topic/<str:pk>', BlogCategoryRetriveView.as_view(), name="blogCat_retrive"),

    path('author/', AuthorListView.as_view(), name="author_list"),
    path('author/<str:pk>', AuthorRetriveView.as_view(), name="author_retrive"),

]
