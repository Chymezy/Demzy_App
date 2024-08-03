import React from 'react';
import { Task } from '../interfaces/Task';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  editTask: (id: number) => void;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, editTask, deleteTask, toggleComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
