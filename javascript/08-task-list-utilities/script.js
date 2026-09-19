const addTask = (tasks, title) => {
    const newTask = {
        id: tasks.length == 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1,
        title,
        completed: false
    }
    return [...tasks, newTask];
};

const completeTask = (tasks, taskId) => {
    return tasks.map((task) => 
          task.id === taskId ? {...task, completed: true} : task
    );
};

const removeTask = (tasks, taskId) => {
    return tasks.filter(task => task.id !== taskId);
};

const countIncompleteTasks = (tasks) => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    return incompleteTasks.length;
};

// Sample Checks

const tasks = [
    { id: 1, title: 'Review variables', completed: true },
    { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title)); // ["Review variables", "Practice functions", "Build task utilities"]

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed)); // 1

console.log(removeTask(completed, 1).map((task) => task.id)); // [2, 3]
console.log(tasks.length); // 2
console.log(countIncompleteTasks(tasks)); // 1
