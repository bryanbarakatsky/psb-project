from flask import Blueprint, request, jsonify
from app import app
from data_access import DataAccess
from datetime import datetime

@app.route('/add-task', methods=['POST'])
def add_task():
    data = request.json
    description = data.get('description')
    is_completed = data.get('isCompleted', False)
    if not description:
        return jsonify({'error': 'Description is required'}), 400
    
    date_now = datetime.now()
    formatted_date = date_now.strftime('%Y-%m-%d, %H:%M:%S')

    db = DataAccess(host='localhost', user='user', database='tododatabase')
    query = f"INSERT INTO todo (description, dateCreated, isCompleted) VALUES ('{description}', '{formatted_date}', '{is_completed}')"
    task_id = db.execute(query)
    return jsonify({'message': 'Task added', 'task_id': task_id}), 201
