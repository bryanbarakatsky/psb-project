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

@all_routes_bp.route('/edit-task/<int:task_id>', methods=['PUT'])
def edit_task(task_id):
    data = request.json
    description = data.get('description')
    is_completed = data.get('isCompleted', False)
    if not description:
        return jsonify({'error': 'Description is required'}), 400

    db = DataAccess(host='localhost', user='root', database='tododatabase')
    query = f"UPDATE todos SET description = '{description}', isCompleted = '{is_completed}' WHERE id = {task_id}"
    db.execute(query)
    return jsonify({'message': 'Task updated'}), 200

@all_routes_bp.route('/tasks', methods=['GET'])
def get_tasks():
    db = DataAccess(host='localhost', user='root', database='tododatabase')
    query = "SELECT * FROM todos"
    tasks = db.fetch(query, is_all=True)
    return jsonify(tasks), 200