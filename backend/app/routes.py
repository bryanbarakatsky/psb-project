from flask import Blueprint, request, jsonify
from .data_access import DataAccess
from datetime import datetime

all_routes_bp = Blueprint('all_routes', __name__)

@all_routes_bp.route('/add-task', methods=['POST'])
def add_task():
    data = request.json
    description = data.get('description')
    is_completed = data.get('isCompleted', False)
    if not description:
        return jsonify({'error': 'Description is required'}), 400
    
    date_now = datetime.now()
    formatted_date = date_now.strftime('%Y-%m-%d, %H:%M:%S')

    db = DataAccess(host='localhost', user='root', database='tododatabase')
    query = f"INSERT INTO todos (description, dateCreated, isCompleted) VALUES ('{description}', '{formatted_date}', '{is_completed}')"
    task_id = db.execute(query)
    return jsonify({'message': 'Task added', 'task_id': task_id}), 201
