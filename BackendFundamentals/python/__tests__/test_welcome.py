import pytest
from app import api

def test_index_route():
    client = api.test_client()
    response = client.get('/')

    assert response.status_code == 200
    assert response.data.decode('utf-8') == 'Welcome to my app'