from django.test import TestCase
from django.urls import reverse


class AdminPermissionsPolicyTests(TestCase):
    def test_admin_allows_unload_events(self):
        response = self.client.get(reverse('admin:index'))

        self.assertEqual(response.status_code, 302)
        self.assertIn('unload', response.headers.get('Permissions-Policy', ''))
        self.assertIn('self', response.headers.get('Permissions-Policy', ''))
