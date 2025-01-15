import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
// import { useModal } from './ModalContext';
import Task from '@/utils/taskInterface';

interface TasksContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  createTask: (task: Task) => void;
  editTask: (task: {}, taskId:string) => void;
  deleteTask: (taskId: string) => void;
  fetchTaskById: (taskId: string) => void;
  filterByCategory: (taskCategory: string) =>void;
}

const TasksContext = createContext(null);

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }

  return context;
};

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const { currentUser, userLoggedIn, closeModal } = useAuth();
//   const { closeModal } = useModal();

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    if (!userLoggedIn || !currentUser) return;

    try {
      const response = await axios.get('/api/tasks', {
        params: { uId: currentUser.user_id },
      });

      if (response.data.success) {
        setTasks(response.data.tasks);
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const createTask = async (task: Task) => {
    try {
      const response = await axios.post('/api/tasks', task);
      if (response.status === 201) {
        setTasks((prev) => [...prev, response.data.task]);
        closeModal();
        console.log('Task created successfully:', response.data.task);
      }
    } catch (error) {
      console.log('Error creating task:', error);
    }
  };

  const editTask = async (updatedTask, taskId) => {
    if (!userLoggedIn || !currentUser) return null;

    try {
        const response = await axios.put('/api/tasks', {
            // params: {
                taskName: updatedTask.taskName,
                description: updatedTask.description,
                category: updatedTask.category,
                due: updatedTask.due,
                taskStatus: updatedTask.taskStatus,
                userId: currentUser.user_id,
                taskId: taskId
            // }
        });

      if (response.status === 200) {
        setTasks((prev) =>
          prev.map((task) => (task._id === taskId ? updatedTask : task))
        );
        closeModal();
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      const response = await axios.delete('/api/tasks', {
        params: {
            taskId,
            userId: currentUser?.user_id
        }
      });

      if (response.status === 200) {
        setTasks((prev) => prev.filter((task) => task._id !== taskId));
        closeModal();
      }
    } catch (error) {
      console.log('Error in deleting task:', error);
    }
  };

  const fetchTaskById = async (taskId: string) => {
    if (!userLoggedIn || !currentUser) return null;

    try {
        const response = await axios.get('/api/tasks', {
            params: { uId: currentUser.user_id, taskId: taskId },
        });

      if (response.data.success) {
        return response.data.task;
      }
      return null;
    } catch (err) {
      console.log('Error in fetching the task:', err);
      return null;
    }
  };

  const filterByCategory = async (taskCategory: string) => {
    if (!userLoggedIn || !currentUser) return null;

    try {
        const response = await axios.get('/api/tasks', {
            params: { uId: currentUser.user_id, category: taskCategory },
        });

      if (response.data.success) {
        setTasks(response.data.tasks)
        return response.data.tasks;
      }
      return null;
    } catch (err) {
      console.log('Error in fetching the selected category:', err);
      return null;
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [userLoggedIn, currentUser]);

  const value = {
    tasks,
    setTasks,
    createTask,
    editTask,
    deleteTask,
    fetchTaskById,
    filterByCategory
  };

  return (
    <TasksContext.Provider value={value}>
      {userLoggedIn && children}
    </TasksContext.Provider>
  );
};
