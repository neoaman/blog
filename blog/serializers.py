from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from django.forms.models import model_to_dict
from rest_framework.reverse import reverse


from .models import TechBlog,BlogCategory,Author



class TechBlogSerializer(serializers.ModelSerializer):
    # id = serializers.HyperlinkedRelatedField(view_name="blog:post_retrive",lookup_field = "pk",read_only=True)
    # topic = serializers.SlugRelatedField(slug_field= "name",many=True,read_only=True)
    # topic = serializers.HyperlinkedRelatedField(view_name="blog:blogCat_retrive",lookup_field = "pk",many=True,read_only=True)


    url = serializers.HyperlinkedIdentityField(view_name="blog:post_retrive",lookup_field = "pk",read_only=True)
    related_topic = serializers.SerializerMethodField()
    author_info = serializers.SerializerMethodField()
    
    class Meta:
        model =TechBlog
        # fields = ["id","title","image","subtitle","content","topic","author","created","publish","post_url","topics"]
        fields = '__all__'
    def get_related_topic(self,obj):
        category = obj.topic.all()
        topic_info = [model_to_dict(topic) for topic in category]

        return topic_info
    
    def get_author_info(self,obj):
        author = None
        if obj.author != None:
            author = {i:str(j) for i,j in model_to_dict(obj.author).items()}
        
        return author

class BlogCategorySerializer(serializers.ModelSerializer):

    url = serializers.HyperlinkedIdentityField(view_name="blog:blogCat_retrive",lookup_field = "pk",read_only=True)


    class Meta:
        model = BlogCategory
        # fields = ["id","name","description","image"]
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):

    url = serializers.HyperlinkedIdentityField(view_name="blog:author_retrive",lookup_field = "pk",read_only=True)

    class Meta:
        model = Author
        # fields = ["user","name","image"]
        fields = '__all__'   