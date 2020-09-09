from articles.api.views import ArticleViewSets
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSets, basename="article")
urlpatterns = router.urls


# from django.urls import path
# from .views import (
#     ArticleCreateView,
#     ArticleListAPIView,
#     ArticleRetrieveAPIView,
#     ArticleUpdateAPIView,
#     ArticleDestroyAPIView
# )

# urlpatterns = [
#     path('', ArticleListAPIView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>/', ArticleRetrieveAPIView.as_view()),
#     path('<pk>/update/', ArticleUpdateAPIView.as_view()),
#     path('<pk>/delete/', ArticleDestroyAPIView.as_view()),
# ]
