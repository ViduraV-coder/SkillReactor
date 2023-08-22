from flask import Flask

api = Flask(__name__)

@api.route("/")
def welcome():
    return "Welcome to my app"

@api.route("/app")
def app():
    return "My first get endpoint"




