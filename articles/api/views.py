from rest_framework import viewsets
from articles.models import Article
from .serializers import ArticleSerializer


class ArticleViewSets(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


# from rest_framework.generics import (
#     CreateAPIView,
#     ListAPIView,
#     RetrieveAPIView,
#     UpdateAPIView,
#     DestroyAPIView
# )
# from articles.models import Article
# from .serializers import ArticleSerializer


# class ArticleListAPIView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleRetrieveAPIView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleUpdateAPIView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDestroyAPIView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
