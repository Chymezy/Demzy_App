export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    deadline: Date | null;
  }
  