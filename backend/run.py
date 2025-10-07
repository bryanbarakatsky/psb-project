from flask import Flask
from flask_cors import CORS
from app.routes import all_routes_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(all_routes_bp)
if __name__ == "__main__":
    app.run(debug=True, port=5000)