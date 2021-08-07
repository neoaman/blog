#_____________________Import Required modules / models_______________________________
# Builtin DJANGO
from decimal import Context
from typing import OrderedDict
from django.http.response import Http404
from django.shortcuts import redirect, render
from django.forms.models import model_to_dict
from rest_framework import serializers

# Rest Framework
from rest_framework.views import APIView,Response,status

# LOCAL
from .serializers import TechBlogSerializer,BlogCategorySerializer
from .models import TechBlog,BlogCategory

#_____________________ Required API View _______________________________

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

        # data = [ model_to_dict(i) for i in self.model.objects.all()]
        
        # output = []
        # for obj in data:
        #     cat = [cat_.id for cat_ in obj.pop("topic")]
        #     obj["topic"] = cat
        #     output.append(obj)

        # Serialized_data = self.serializer_class(data = data,many=True,context={'request':request})

        # if Serialized_data.is_valid():
        #     print(Serialized_data.data)
        #     return Response(Serialized_data.data,status=status.HTTP_200_OK)
        # else:
        #     print("x"*20)
        #     print(Serialized_data.errors)
        #     print("x"*20)

        # return Response(output,status=status.HTTP_200_OK)

        data_ = self.serializer_class(self.model.objects.all(),many=True,context={"request":request})
        return Response(data_.data,status=status.HTTP_200_OK)

    def post(self,request,format=None):
        # serializer = self.serializer_class(data = request.data)
        # print(serializer)

        # if serializer.is_valid():
        #     data = serializer.data
        #     print("x"*20,data)
        #     categories = data.pop("topic")
        #     new_data = self.model(**data)
        #     new_data.save()
        #     new_data.topic.set(categories)
        #     data["topic"] = categories
        #     return Response(data, status=status.HTTP_200_OK)
        # else:
        #     print(serializer.error)
        # error = {"status":"HTTP_406_NOT_ACCEPTABLE","message":"Invalid inputs provided Not Acceptable"}
        # return Response(error, status=status.HTTP_406_NOT_ACCEPTABLE)
        data_ = self.serializer_class(data = request.data,context={'request':request})
        if data_.is_valid():
            data_.save()
            return Response(data_.data, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            print(data_.errors)
            return Response(data_.errors,status=status.HTTP_400_BAD_REQUEST)

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
    model = TechBlog
    lookup_field = "id"
    def get_object(self, pk):
        try:
            return TechBlog.objects.get(pk=pk)
        except TechBlog.DoesNotExist:
            raise Http404

    def get(self,request,pk,format=None):
        # model_data = self.model.objects.get(id=pk)
        # data = model_to_dict(model_data)
        # categories = data.pop("topic")
        # categories = [cat.name for cat in categories]
        # data["topic"] = categories

        # return Response(data,status=status.HTTP_200_OK)
        obj = self.get_object(pk)
        data_ = self.serializer_class(obj,context={'request':request})
        return Response(data_.data,status=status.HTTP_200_OK)

    def post(self,request,pk,format=None):
        """
        1. Post Method accepts 1 argument pk (primary Key)
        2. Using Filter as .update method works on list of objects not single object
        """
        # model_data = self.model.objects.filter(id=pk) 
        # serializer = self.serializer_class(data = request.data)
        # if serializer.is_valid():
        #     new_data = serializer.data
        #     categories = new_data.pop("topic")
        #     model_data.update(**new_data)
        #     model_data[0].topic.set(categories)
        #     new_data["topic"] = categories

        #     return Response(new_data,status=status.HTTP_200_OK)
        # error = {"status":"HTTP_406_NOT_ACCEPTABLE","message":"Invalid inputs provided Not Acceptable"}
        # return Response(error, status=status.HTTP_406_NOT_ACCEPTABLE)
        obj = self.get_object(pk)
        data_ = self.serializer_class(instance=obj,data = request.data,context={'request':request})

        if data_.is_valid():            
            data_.save()
            return Response(obj,status=status.HTTP_200_OK)
        else:
            print(data_.errors)
            return Response(data_.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk,format=None):
        data_ = self.get_object(pk)
        id = data_.id
        data_.delete()

        return Response({"deleted":id},status=status.HTTP_204_NO_CONTENT)

class BlogCategoryListView(APIView):
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

    

    def get(self, request,format=None):

        # data = [ model_to_dict(i) for i in self.model.objects.all()]
        # return Response(data,status=status.HTTP_200_OK)
        data_ = self.serializer_class(self.model.objects.all(),many=True,context={"request":request})
        return Response(data_.data,status=status.HTTP_200_OK)

    def post(self,request,format=None):
        # serializer = self.serializer_class(data = request.data)

        # if serializer.is_valid():
        #     data = serializer.data
        #     self.model.objects.create(**data)

        #     return Response(data, status=status.HTTP_200_OK)
        # error = {"status":"HTTP_406_NOT_ACCEPTABLE","message":"Invalid inputs provided Not Acceptable"}
        # return Response(error, status=status.HTTP_406_NOT_ACCEPTABLE)
        data_ = self.serializer_class(data = request.data,context={'request':request})
        if data_.is_valid():
            data_.save()
            return Response(data_.data, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            print(data_.errors)
            return Response(data_.errors,status=status.HTTP_400_BAD_REQUEST)

class BlogCategoryRetriveView(APIView):
    """
    Methods: get, post, delete   
    Input : pk   
    **get** Single Blog Category with desired pk as Category Id   
    **post** Update the Current Blog Category attribute   
    **delete** Delete Blog Category   
    """
    name = "Blog Category Retrive View"

    serializer_class = BlogCategorySerializer
    model = BlogCategory

    def get_object(self, pk):
        try:
            return BlogCategory.objects.get(pk=pk)
        except BlogCategory.DoesNotExist:
            raise Http404

    def get(self,request,pk,format=None):
        # model_data = self.model.objects.get(id=pk)
        # data = model_to_dict(model_data)

        # return Response(data,status=status.HTTP_200_OK)
        obj = self.get_object(pk)
        data_ = self.serializer_class(obj,context={'request':request})
        return Response(data_.data,status=status.HTTP_200_OK)

    def post(self,request,pk,format=None):
        """
        1. Post Method accepts 1 argument pk (primary Key)
        2. Using Filter as .update method works on list of objects not single object
        """
        # model_data = self.model.objects.filter(id=pk) 
        # serializer = self.serializer_class(data = request.data)
        # if serializer.is_valid():
        #     new_data = serializer.data
        #     model_data.update(**new_data)
        #     return Response(new_data,status=status.HTTP_200_OK)
        # error = {"status":"HTTP_406_NOT_ACCEPTABLE","message":"Invalid inputs provided Not Acceptable"}
        # return Response(error, status=status.HTTP_406_NOT_ACCEPTABLE)
        obj = self.get_object(pk)
        data_ = self.serializer_class(instance=obj,data = request.data,context={'request':request})

        if data_.is_valid():            
            data_.save()
            return Response(obj,status=status.HTTP_200_OK)
        else:
            print(data_.errors)
            return Response(data_.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk,format=None):
        # post = self.model.objects.get(id=pk)
        # data  = model_to_dict(post)
        # data["message"] = "Content Deleted Successfully"
        # post.delete()

        # return Response(data,status=status.HTTP_204_NO_CONTENT)
        data_ = self.get_object(pk)
        id = data_.id
        data_.delete()

        return Response({"deleted":id},status=status.HTTP_204_NO_CONTENT)