npm init -y
npm install express
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = { id: Date.now(), text: req.body.text, completed: false };
    tasks.push(task);
    res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === Number(req.params.id));
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = req.body.completed;
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === Number(req.params.id));
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
