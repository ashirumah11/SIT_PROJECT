from datetime import timedelta
from pathlib import Path
from pickle import TRUE
import os

import dj_database_url
from dotenv import load_dotenv

# Base directory (backend folder)
BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / '.env')

SECRET_KEY = 'django-insecure-dev-key'
DEBUG = True
ALLOWED_HOSTS = ['localhost',
                '127.0.0.1', 
                'wrongness-prude-calzone.ngrok-free.dev',
                '[::1]']

INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'rest_framework_simplejwt',
    'accounts',
    'admissions',
    'contacts',
    'content',
    'courses',
    'news',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'config.middleware.PermissionsPolicyMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'
WSGI_APPLICATION = 'config.wsgi.application'
ASGI_APPLICATION = 'config.asgi.application'

DATABASES = {
    'default': dj_database_url.parse(
        os.environ.get('DATABASE_URL')
    )
}
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / 'staticfiles'
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
}

CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://wrongness-prude-calzone.ngrok-free.dev',
]
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_ORIGINS = False

JAZZMIN_SETTINGS = {
    # ==========================================
    # Branding
    # ==========================================
    "site_title": "PTVTI Administration",
    "site_header": "Palazzolo Technical & Vocational Training Institute",
    "site_brand": "PTVTI CMS",
    "site_logo": None,
    "login_logo": None,
    "welcome_sign": "Welcome to PTVTI Administration",
    "copyright": "© Palazzolo Technical & Vocational Training Institute",

    # ==========================================
    # Layout
    # ==========================================
    "navigation_expanded": True,
    "show_sidebar": True,
    "show_ui_builder": False,
    "hide_apps": [],
    "hide_models": [],

    # ==========================================
    # Sidebar Order
    # ==========================================
    "order_with_respect_to": [
        "auth",
        "courses",
        "admissions",
        "content",
        "contacts",
        "news",
    ],

    # ==========================================
    # Top Menu
    # ==========================================
    "topmenu_links": [
        {"model": "auth.User"},
        {"app": "courses"},
        {"app": "content"},
        {"app": "contacts"},
        {"app": "news"},
        {"name": "Website", "url": "/", "new_window": True},
    ],

    # ==========================================
    # Icons
    # ==========================================
    "icons": {

        # Apps
        "auth": "fas fa-user-shield",
        "courses": "fas fa-graduation-cap",
        "content": "fas fa-layer-group",
        "contacts": "fas fa-address-book",
        "news": "fas fa-newspaper",
        "admissions": "fas fa-user-graduate",

        # Authentication
        "auth.user": "fas fa-users",
        "auth.group": "fas fa-user-lock",

        # Courses
        "courses.course": "fas fa-book-open",
        "courses.department": "fas fa-building",

        # Contacts
        "contacts.contactmessage": "fas fa-envelope-open-text",
        "contacts.departmentcontact": "fas fa-phone-square-alt",

        # Content
        "content.announcement": "fas fa-bullhorn",
        "content.eventitem": "fas fa-calendar-check",
        "content.galleryitem": "fas fa-images",
        "content.staffmember": "fas fa-user-tie",
        "content.testimonial": "fas fa-comments",

        # News
        "news.newsarticle": "fas fa-newspaper",
    },

    # ==========================================
    # Custom Links
    # ==========================================
    "custom_links": {
        "courses": [{
            "name": "Course Website",
            "url": "/",
            "icon": "fas fa-globe",
        }],
    },

    # ==========================================
    # Change Form
    # ==========================================
    "changeform_format": "horizontal_tabs",

    # ==========================================
    # Admin Index
    # ==========================================
    "show_sidebar": True,
    "navigation_expanded": True,

    # ==========================================
    # Dashboard
    # ==========================================
    "default_icon_parents": "fas fa-folder",

    "default_icon_children": "fas fa-circle",

    # ==========================================
    # Buttons
    # ==========================================
    "related_modal_active": True,

    # ==========================================
    # Language
    # ==========================================
    "language_chooser": False,
}

JAZZMIN_SETTINGS = {
    # ==========================================
    # Branding
    # ==========================================
    "site_title": "PTVTI Administration",
    "site_header": "Palazzolo Technical & Vocational Training Institute",
    "site_brand": "PTVTI CMS",
    "site_logo": None,
    "login_logo": None,
    "welcome_sign": "Welcome to PTVTI Administration",
    "copyright": "© Palazzolo Technical & Vocational Training Institute",

    # ==========================================
    # Layout
    # ==========================================
    "navigation_expanded": True,
    "show_sidebar": True,
    "show_ui_builder": False,
    "hide_apps": [],
    "hide_models": [],

    # ==========================================
    # Sidebar Order
    # ==========================================
    "order_with_respect_to": [
        "auth",
        "courses",
        "admissions",
        "content",
        "contacts",
        "news",
    ],

    # ==========================================
    # Top Menu
    # ==========================================
    "topmenu_links": [
        {"model": "auth.User"},
        {"app": "courses"},
        {"app": "content"},
        {"app": "contacts"},
        {"app": "news"},
        {"name": "Website", "url": "/", "new_window": True},
    ],

    # ==========================================
    # Icons
    # ==========================================
    "icons": {

        # Apps
        "auth": "fas fa-user-shield",
        "courses": "fas fa-graduation-cap",
        "content": "fas fa-layer-group",
        "contacts": "fas fa-address-book",
        "news": "fas fa-newspaper",
        "admissions": "fas fa-user-graduate",

        # Authentication
        "auth.user": "fas fa-users",
        "auth.group": "fas fa-user-lock",

        # Courses
        "courses.course": "fas fa-book-open",
        "courses.department": "fas fa-building",

        # Contacts
        "contacts.contactmessage": "fas fa-envelope-open-text",
        "contacts.departmentcontact": "fas fa-phone-square-alt",

        # Content
        "content.announcement": "fas fa-bullhorn",
        "content.eventitem": "fas fa-calendar-check",
        "content.galleryitem": "fas fa-images",
        "content.staffmember": "fas fa-user-tie",
        "content.testimonial": "fas fa-comments",

        # News
        "news.newsarticle": "fas fa-newspaper",
    },

    # ==========================================
    # Custom Links
    # ==========================================
    "custom_links": {
        "courses": [{
            "name": "Course Website",
            "url": "/",
            "icon": "fas fa-globe",
        }],
    },

    # ==========================================
    # Change Form
    # ==========================================
    "changeform_format": "horizontal_tabs",

    # ==========================================
    # Admin Index
    # ==========================================
    "show_sidebar": True,
    "navigation_expanded": True,

    # ==========================================
    # Dashboard
    # ==========================================
    "default_icon_parents": "fas fa-folder",

    "default_icon_children": "fas fa-circle",

    # ==========================================
    # Buttons
    # ==========================================
    "related_modal_active": True,

    # ==========================================
    # Language
    # ==========================================
    "language_chooser": False,
}

