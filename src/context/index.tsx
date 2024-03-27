import React, { createContext, useContext, useState } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority:string;
}
interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, updatedTask: Task) => void;
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
    const [tasks, setTasks] = useState<Task[]>([]);
  
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
  
    return (
      <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
        {children}
      </TaskContext.Provider>
    );
  };