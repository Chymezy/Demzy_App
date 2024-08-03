import React, { useState } from 'react';
import { Task } from '../interfaces/Task';
import AddTaskForm from '../components/AddTaskForm';
import EditTaskForm from '../components/EditTaskForm';
import TaskList from '../components/TaskList';
import { Container, Typography, Box, Modal } from '@mui/material';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setIsEditing(false);
  };

  const editTask = (id: number) => {
    const taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit) {
      setCurrentTask(taskToEdit);
      setIsEditing(true);
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Task Manager
      </Typography>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      <Modal open={isEditing} onClose={() => setIsEditing(false)}>
        <Box sx={{ bgcolor: 'background.paper', padding: 4, margin: 'auto', mt: 5 }}>
          {currentTask && <EditTaskForm task={currentTask} updateTask={updateTask} />}
        </Box>
      </Modal>
    </Container>
  );
};

export default Home;
