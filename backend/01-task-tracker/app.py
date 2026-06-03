import typer
import datetime
import json

app = typer.Typer()

# Adding a new task
@app.command()
def add(description: str):
    task_id = 1
    task = {
        "id": task_id,
        "description": description,
        "status": "todo",
        "createdAt": datetime.datetime.now().isoformat(),
        "updatedAt": None,
    }
    print(f"Task added successfully (ID: {task_id})")

# Updating tasks
@app.command()
def update(id: int, description: str):
    print(description)

# Deleting tasks
@app.command()
def delete(id: int):
    for task in tasks['tasks']:
        del task['id'==id]

# Listing all tasks
@app.command()
def list():
    with open('tasks.json', 'r') as f:
        tasks = json.load(f)
        for task in tasks['tasks']:
            print(task)

# Run "task-cli"
def cli() -> None:
    app()
