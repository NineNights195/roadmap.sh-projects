import typer
from typing import Optional
import datetime
import json

app = typer.Typer()

# Get tasks list from tasks.json (If there's none, create a new one)
try:
    with open('tasks.json', 'r') as f:
        data = json.load(f)
except FileNotFoundError:
    data = {"tasks": []}
    with open('tasks.json', 'w') as f:
        json.dump(data, f, indent=4)
tasks_list = data.get("tasks", [])

# Adding a new task
@app.command(help="Add task")
def add(description: str = typer.Argument(..., help="Short description of the task")):
    existing_ids = {t.get("id", 0) for t in tasks_list}
    task_id = 1

    while task_id in existing_ids:
        task_id += 1
    
    task = {
        "id": task_id,
        "description": description,
        "status": "todo",
        "createdAt": datetime.datetime.now().isoformat(),
        "updatedAt": None,
    }

    tasks_list.append(task)
    data["tasks"] = tasks_list

    with open('tasks.json', 'w') as f:
        json.dump(data, f, indent=4)
    
    print(f"Task added successfully (ID: {task_id})")

# Updating tasks
@app.command(help="Update task")
def update(
    id: int = typer.Argument(..., help="ID of the task you want to update"),
    description: str = typer.Argument(..., help="Short description of the task you want to update")
):
    task_found = False
    for t in tasks_list:
        if id == t["id"]:
            t["description"] = description
            t["updatedAt"] = datetime.datetime.now().isoformat()
            task_found = True
            break

    if task_found:
        with open('tasks.json', 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Updated task successfully (ID: {id})")
    else:
        print(f"Error: Task with ID: {id} was not found")

# Deleting tasks
@app.command(help="Delete task")
def delete(id: int = typer.Argument(..., help="ID of the task you want to delete"),):
    original_length = len(data["tasks"])
    data["tasks"] = [t for t in data["tasks"] if id != t["id"]]

    if len(data["tasks"]) < original_length:
        with open('tasks.json', 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Deleted task successfully (ID: {id})")
    else:
        print(f"Error: Task with ID: {id} was not found")

# Marking a task as todo, in progress or done
@app.command(name="mark-todo", help="Change status of task to todo")
def mark_todo(id: int = typer.Argument(..., help="ID of the task you want to mark")):
    task_found = False
    for t in tasks_list:
        if id == t["id"]:
            t["status"] = "todo"
            task_found = True
            break

    if task_found:
        with open('tasks.json', 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Marked task to todo successfully (ID: {id})")
    else:
        print(f"Error: Task with ID: {id} was not found")

@app.command(name="mark-in-progress", help="Change status of task to in-progress")
def mark_in_progress(id: int = typer.Argument(..., help="ID of the task you want to mark")):
    task_found = False
    for t in tasks_list:
        if id == t["id"]:
            t["status"] = "in-progress"
            task_found = True
            break

    if task_found:
        with open('tasks.json', 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Marked task to in progress successfully (ID: {id})")
    else:
        print(f"Error: Task with ID: {id} was not found")

@app.command(name="mark-done", help="Change status of task to done")
def mark_done(id: int = typer.Argument(..., help="ID of the task you want to mark")):
    task_found = False
    for t in tasks_list:
        if id == t["id"]:
            t["status"] = "done"
            task_found = True
            break

    if task_found:
        with open('tasks.json', 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Marked task to in-progress successfully (ID: {id})")
    else:
        print(f"Error: Task with ID: {id} was not found")

# Listing all tasks, only in progess tasks or only done tasks
@app.command(help="List all tasks, only todo tasks, only in-progess tasks or only done tasks")
def list(
    status: Optional[str] = typer.Argument(None, help="Status of tasks you want to list. If it isn't filled, it will show all tasks")
):
    if status:
        status = status.lower()
        filtered_tasks = [t for t in tasks_list if t.get('status') == status]
        if not filtered_tasks:
            print(f"No tasks found with status: {status}")
        else:
            print(json.dumps(filtered_tasks, indent=2))
    else:
        print(json.dumps(data['tasks'], indent=2))

# Run "task-cli"
def cli() -> None:
    app()
