import React, { createContext, useContext, useState } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignees: string;
  team: string;
  startDate: string;
  endDate : string | null;
}
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, updatedTask: Task) => void;
  sortTasksByPriority: () => void;
  sortTasksByDate: () => void;
  filterTasks: (filters: {
    assignees?: string;
    priority?: string;
    startDate?: string;
    endDate?: string;
  }) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      startDate: "2024-01-10",
      endDate: null,
      status: "Pending",
      assignees: "John Doe",
      priority: "P2",
      team: "SDE",
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description for Task 6",
      startDate: "2024-05-10", // Predefined start date
      endDate: null, // No end date initially
      status: "Pending",
      assignees: "Aman",
      priority: "P1",
      team: "SDE",
    },
    {
      id: 9,
      title: "Task 9",
      description: "Description for Task 9",
      startDate: "2024-08-19", // Predefined start date
      endDate: null, // No end date initially
      status: "Pending",
      assignees: "Aman",
      priority: "P0",
      team: "SDE",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      startDate: "2024-01-10", // Predefined start date
      endDate: null, // No end date initially
      status: "In Progress",
      assignees: "Jane Smith",
      priority: "P1",
      team: "SDE",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      startDate: "2024-01-10", // Predefined start date
      endDate: "2024-01-15", // Predefined end date
      status: "Completed",
      assignees: "John Doe",
      priority: "P2",
      team: "SDE",
    },
    {
      id: 8,
      title: "Task 8",
      description: "Description for Task 8",
      startDate: "2024-01-10", // Predefined start date
      endDate: "2024-01-20", // Predefined end date
      status: "Completed",
      assignees: "Abhay",
      priority: "P1",
      team: "SDE",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description for Task 4",
      startDate: "2024-01-10", // Predefined start date
      endDate: null, // No end date initially
      status: "Deployed",
      assignees: "Jane Smith",

      team: "SDE",
      priority: "P0",
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description for Task 5",
      startDate: "2024-01-10", // Predefined start date
      endDate: null, // No end date initially
      status: "Deferred",
      assignees: "John Doe",
      priority: "P1",
      team: "SDE",
    },
    {
      id: 7,
      title: "Task 7",
      description: "Description for Task 7",
      startDate: "2024-01-10", // Predefined start date
      endDate: null, // No end date initially
      status: "Deferred",
      assignees: "Raj",
      priority: "P1",
      team: "SDE",
    },
  ]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  // const sortTasksByPriority = () => {
  //   setTasks((prevTasks) => {
  //     const sorted = [...prevTasks].sort((a, b) => {
  //       const priorityOrder: Record<string, number> = { P1: 1, P2: 2, P3: 3 }; // Define priority order

  //       // Compare priorities
  //       if (a.priority !== b.priority) {
  //         return priorityOrder[a.priority] - priorityOrder[b.priority]; // Sort by priority
  //       }

  //       // If priorities are the same, compare start dates
  //       const startDateComparison = new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  //       if (startDateComparison !== 0) {
  //         return startDateComparison;
  //       }

  //       // If start dates are the same, compare end dates
  //       if (a.endDate && b.endDate) {
  //         return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
  //       } else if (!a.endDate && b.endDate) {
  //         return -1;
  //       } else if (a.endDate && !b.endDate) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //     return sorted;
  //   });
  // };

  const sortTasksByPriority = () => {
    setTasks((prevTasks) => {
      const sorted = [...prevTasks].sort((a, b) => {
        const priorityOrder: Record<string, number> = { P1: 1, P2: 2, P3: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
      return sorted;
    });
  };

  const sortTasksByDate = () => {
    setTasks((prevTasks) => {
      const sorted = [...prevTasks].sort((a, b) => {
        return (
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
      });
      return sorted;
    });
  };

  const filterTasks = (filters: {
    assignees?: string;
    priority?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    let filteredTasks: any[] | ((prevState: Task[]) => Task[])=[]

    if (filters.assignees) {
      filteredTasks = tasks.filter(
        (task) => task.assignees === filters.assignees
      );
    }

    if (filters.priority) {
      filteredTasks = tasks.filter(
        (task) => task.priority === filters.priority
      );
    }

    if (filters.startDate) {
      const startDate = new Date(filters.startDate);
      filteredTasks = tasks.filter(
        (task) => task.startDate && new Date(task.startDate) >= startDate
      );
    }

    if (filters.endDate) {
      const endDate = new Date(filters.endDate);
      filteredTasks = tasks.filter(
        (task) => task.endDate && new Date(task.endDate) <= endDate
      );
    }

    setTasks(filteredTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        sortTasksByPriority,
        sortTasksByDate,
        filterTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
