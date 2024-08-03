import React, { useState } from 'react';
import { Task } from '../interfaces/Task';
import { TextField, Button, Box } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface Props {
  task: Task;
  updateTask: (task: Task) => void;
}

const EditTaskForm: React.FC<Props> = ({ task, updateTask }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState<Date | null>(task.deadline);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask({ ...task, title, description, deadline });
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
        Update Task
      </Button>
    </Box>
  );
};

export default EditTaskForm;
