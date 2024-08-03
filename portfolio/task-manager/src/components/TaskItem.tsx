import React, { useEffect, useState } from 'react';
import { Task } from '../interfaces/Task';
import { Card, CardContent, Typography, IconButton, Box, Grid } from '@mui/material';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Props {
  task: Task;
  editTask: (id: number) => void;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, editTask, deleteTask, toggleComplete }) => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (task.deadline) {
        const now = new Date().getTime();
        const distance = task.deadline.getTime() - now;

        if (distance < 0) {
          setTimeLeft('Expired');
          clearInterval(interval);
        } else {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [task.deadline]);

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="div" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <IconButton onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={() => editTask(task.id)}>
                <FaEdit />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={() => deleteTask(task.id)}>
                <FaTrash />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {task.description}
        </Typography>
        {task.deadline && (
          <Typography variant="body2" color="error">
            Time left: {timeLeft}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskItem;
