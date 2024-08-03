import React, { useState } from 'react';
import { Task } from '../interfaces/Task';
import { TextField, Button, Box } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface Props {
  addTask: (task: Task) => void;
}

const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      addTask({ id: Date.now(), title, description, completed: false, deadline });
      setTitle('');
      setDescription('');
      setDeadline(null);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
        multiline
        rows={4}
      />
      <DateTimePicker
        label="Deadline"
        value={deadline}
        onChange={(newValue) => setDeadline(newValue)}
        renderInput={(params) => <TextField fullWidth margin="normal" {...params} />}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;