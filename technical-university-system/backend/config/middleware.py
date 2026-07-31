class PermissionsPolicyMiddleware:
    """Allow the admin UI's unload handler without enabling broader browser features."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if 'Permissions-Policy' not in response.headers:
            response.headers['Permissions-Policy'] = 'unload=(self)'
        return response
