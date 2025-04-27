from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .ml_model import analyze_photo

@api_view(['POST'])
def upload_photo(request):
    if 'photo' not in request.FILES:
        return Response({'error': 'No photo uploaded.'}, status=status.HTTP_400_BAD_REQUEST)

    photo = request.FILES['photo']
    suggestions = analyze_photo(photo)
    return Response({'suggestions': suggestions})
