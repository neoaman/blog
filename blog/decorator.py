from django.shortcuts import redirect
from rest_framework.views import Response,status
from django.contrib import messages
import re

from .models import Author

def allowed_users(allowed_roles=[],redirect_page='home',error_msg=False):
    def decorator(view_func):
        def wrapper_func(self,request,*args ,**kwargs):
            group = []
            
            if request.user.groups.exists():
                group =[i.name for i in  request.user.groups.all()]
                # print(group)
            if any(i in allowed_roles for i in group):
                return view_func(self,request, *args, **kwargs)
            else:
                if error_msg:
                    desired_route = re.findall("/.+?/",str(request))[0] # It will search for the Desired Route where user eants to go
                    messages.warning(request,"Sorry "+str(request.user).upper()+', you are not authorised to view '+str(desired_route)+" Page")
                return Response({"detail":f"User {request.user.username} has no permission to access {desired_route}"},status=status.HTTP_403_FORBIDDEN)
            return view_func(self, request, *args, **kwargs)
        return wrapper_func
    return decorator


def allowed_author(view_func):
    def wrapper_func(self,request,*args,**kwargs):
        user = request.user
        authorname = request.data.get("author_info",{}).get("name",{})
        if user.is_superuser: return view_func(self,request,*args,**kwargs)
        try:
            author = Author.objects.get(user = user)
        except Author.DoesNotExist:
            author = False
        if user.is_anonymous or not author:
            return Response({"detail":f"User {request.user.username} has no permission to Update {authorname}'s Post"},status=status.HTTP_403_FORBIDDEN)        

        username = user.username
        if request.data["author"] == Author.objects.get(user = user).id:
            return view_func(self,request,*args,**kwargs)
        else:
            return Response({"detail":f"Sorry {username} you cannot Edit {authorname}'s Post"},status=status.HTTP_403_FORBIDDEN)    
    return wrapper_func

def isAuthor(view_func):
    def wrapper_func(self,request,*args,**kwargs):
        
        user = request.user
        if user.is_anonymous : 
            # Though its unnecessary as we have IsAuthenticatedOrReadOnly permission class enabled
            return Response({"detail":f"Please Authenticate"},status=status.HTTP_403_FORBIDDEN)        
        if user.is_superuser: return view_func(self,request,*args,**kwargs)
        username = user.username
        author = Author.objects.filter(user = user)
        if (not author.exists()):
            return Response({"detail":f"Sorry {username} you are not an Author Yet"},status=status.HTTP_403_FORBIDDEN)
        return view_func(self,request,*args,**kwargs)

    return wrapper_func
