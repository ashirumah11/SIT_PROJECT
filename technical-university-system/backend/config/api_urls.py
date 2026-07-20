from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('courses/', include('courses.urls')),
    path('admissions/', include('admissions.urls')),
    path('contacts/', include('contacts.urls')),
    path('news/', include('news.urls')),
    path('accounts/', include('accounts.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
