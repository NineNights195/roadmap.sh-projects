# Task Tracker

> **NOT FINISHED**

A simple CLI app to track your tasks and manage your to-do list.

## Getting Started

1. **Prepare venv**:
   Navigate to the `01-task-tracker` folder. Create and activate a Python virtual environment to keep dependencies isolated:

   ```bash
   # Create the virtual environment
   python3 -m venv .venv

   # Activate on Linux or macOS:
   source .venv/bin/activate

   # Activate on Windows (Command Prompt):
   .venv\Scripts\activate.bat

   # Activate on Windows (PowerShell):
   .venv\Scripts\Activate.ps1
   ```

2. **Install the CLI**:
   Install it in editable mode:
   ```bash
   pip install --editable .
   ```

## Features

For a full list of features, visit the [project page](https://roadmap.sh/projects/task-tracker). You can also view all available commands directly in your terminal by using the built-in help menu:

```bash
task-cli --help
```

## Requirements

The application should run from the command line, accept user actions and inputs as arguments, and store the tasks in a JSON file. The user should be able to:

- Add, Update, and Delete tasks
- Mark a task as in progress or done
- List all tasks
- List all tasks that are done
- List all tasks that are not done
- List all tasks that are in progress

Here are some constraints to guide the implementation:

- You can use any programming language to build this project.
- Use positional arguments in the command line to accept user inputs.
- Use a JSON file to store the tasks in the current directory.
- Create the JSON file if it does not exist.
- Use the native file system module of your programming language to interact with the JSON file.
- Do not use any external libraries or frameworks to build this project.
- Ensure errors and edge cases are handled gracefully.

### Task Properties

Each task should have the following properties:

- `id`: A unique identifier for the task
- `description`: A short description of the task
- `status`: The status of the task (todo, in-progress, done)
- `createdAt`: The date and time when the task was created
- `updatedAt`: The date and time when the task was last updated

Make sure to add these properties to the JSON file when adding a new task and update them when updating a task.

#### To-do list

- [ x ] Add, Update, and Delete tasks
- [ x ] Mark a task as in progress or done
- [ x ] List all tasks
- [ x ] List all tasks that are done
- [ x ] List all tasks that are not done
- [ x ] List all tasks that are in progress

---

https://roadmap.sh/projects/task-tracker
