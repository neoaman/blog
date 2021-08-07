#_____________________Import Required modules / models_______________________________
# Builtin DJANGO
from decimal import Context
from typing import OrderedDict
from django.http.response import Http404
from django.shortcuts import redirect, render
from django.forms.models import model_to_dict

# Rest Framework
from rest_framework import serializers
from rest_framework.views import APIView,Response,status
from rest_framework.reverse import reverse

# LOCAL
from .serializers import TechBlogSerializer,BlogCategorySerializer,AuthorSerializer
from .models import TechBlog,BlogCategory,Author

#_____________________ Required API View _______________________________

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

class RootBlogView(APIView):
    

    def get(self, request, *args, **kwargs):
        data = {
            "Post List":reverse("blog:post_list",request=request),
            "Topic List":reverse("blog:blogCat_list",request=request),
            "Author List":reverse("blog:author_list",request=request),
            "Post retrive":reverse("blog:post_retrive",kwargs={"pk":"1"}, request=request),
            "Topic Retrive":reverse("blog:blogCat_retrive",kwargs={"pk":"1"},request=request),
            "Author Retrive":reverse("blog:author_retrive",kwargs={"pk":"1"},request=request),           
            
        }
        return Response(data,status=status.HTTP_200_OK)

class TechBlogListView(APIView):
    """
    Methods: get, post   
    Input : pk   
    **get** Fetch all Blog posts   
    **post** Create new Blog post   
    """
    name = "Blog List View"

    serializer_class = TechBlogSerializer
    model = TechBlog
    lookup_field = "id"
    

    def get(self, request,format=None):

        serializer_ = self.serializer_class(self.model.objects.all(),many=True,context={"request":request})
        return Response(serializer_.data,status=status.HTTP_200_OK)

    def post(self,request,format=None):
       
        serializer_ = self.serializer_class(data = request.data,context={'request':request})
        if serializer_.is_valid():
            author = Author.objects.get(user=request.user)
            serializer_.save(author = author)
            return Response(serializer_.data, status=status.HTTP_200_OK)
        else:
            print(serializer_.errors)
            return Response(serializer_.errors,status=status.HTTP_406_NOT_ACCEPTABLE)

class TechBlogRetriveView(APIView):
    """
    Methods: get, post, delete   
    Input : pk   
    **get** Single Blog post with desired pk as post Id   
    **post** Update the Current Blog post   
    **delete** Delete Blog post   
    """
    name = "Blog Retrive View"

    serializer_class = TechBlogSerializer
    lookup_field = "id"
    model = TechBlog

    def get_object(self, pk):
        try:
            return self.model.objects.get(pk=pk)
        except self.model.DoesNotExist:
            raise Http404

    def get(self,request,pk,format=None):
        
        obj = self.get_object(pk)
        serializer_ = self.serializer_class(instance=obj,context={'request':request})
        return Response(serializer_.data,status=status.HTTP_200_OK)

    def post(self,request,pk,format=None):
        """
        1. Post Method accepts 1 argument pk (primary Key)
        2. Using Filter as .update method works on list of objects not single object
        """
        
        obj = self.get_object(pk)
        serializer_ = self.serializer_class(instance=obj,data = request.data,context={'request':request})
        


        if serializer_.is_valid():            
            print(bcolors.OKGREEN,serializer_.validated_data,bcolors.ENDC)
            serializer_.save()
            return Response(serializer_.data,status=status.HTTP_200_OK)
        else:
            print(bcolors.FAIL,serializer_.errors,bcolors.ENDC)
            return Response(serializer_.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk,format=None):
        data_ = self.get_object(pk)
        id = data_.id
        data_.delete()

        return Response({"deleted":id},status=status.HTTP_204_NO_CONTENT)

class BlogCategoryListView(TechBlogListView):
    """
    Methods: get, post   
    Input : pk   
    **get** Fetch all Blog Category   
    **post** Create new Blog Cateogry       
    """
    name = "Blog Category View"
    serializer_class = BlogCategorySerializer
    model = BlogCategory
    lookup_field = "id"

    def post(self,request,format=None):
       
        serializer_ = self.serializer_class(data = request.data,context={'request':request})
        if serializer_.is_valid():
            serializer_.save()
            return Response(serializer_.data, status=status.HTTP_200_OK)
        else:
            print(serializer_.errors)
            return Response(serializer_.errors,status=status.HTTP_406_NOT_ACCEPTABLE)

class BlogCategoryRetriveView(TechBlogRetriveView):
    """
    Methods: get, post, delete   
    Input : pk   
    **get** Single Blog Category with desired pk as Category Id   
    **post** Update the Current Blog Category attribute   
    **delete** Delete Blog Category   
    """
    name = "Blog Category Retrive View"

    serializer_class = BlogCategorySerializer
    lookup_field = "id"
    model = BlogCategory

class AuthorListView(BlogCategoryListView):
    """
    Methods: get, post   
    Input : pk   
    **get** Fetch all Blog Category   
    **post** Create new Blog Cateogry       
    """
    name = "Author List View"
    serializer_class = AuthorSerializer
    model = Author
    lookup_field = "id"

class AuthorRetriveView(TechBlogRetriveView):
    """
    Methods: get, post, delete   
    Input : pk   
    **get** Single Blog Category with desired pk as Category Id   
    **post** Update the Current Blog Category attribute   
    **delete** Delete Blog Category   
    """
    name = "Author Retrive View"

    serializer_class = AuthorSerializer
    lookup_field = "user"
    model = Author
