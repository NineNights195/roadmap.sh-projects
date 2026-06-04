import typer
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
@app.command()
def add(description: str):

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
    print(json.dumps(data['tasks'], indent=2))

# Run "task-cli"
def cli() -> None:
    app()
