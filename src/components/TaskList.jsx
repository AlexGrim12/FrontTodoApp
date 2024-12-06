import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const API_URL = 'http://localhost:5000';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [animate, setAnimate] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    } catch (error) {
      console.error('Error obteniendo tareas:', error);
    }
  };

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskComplete = async (taskId, completed) => {
    try {
      await axios.put(`${API_URL}/tasks/${taskId}`, { completed });
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, completed } : task
      ));
    } catch (error) {
      console.error('Error actualizando tarea:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error eliminando tarea:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={`transition-all duration-500 ${animate ? 'scale-105' : ''}`}>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <div className="space-y-2">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={toggleTaskComplete}
            onDelete={deleteTask}
          />
        ))}
      </div>
      {tasks.length === 0 && (
        <div className="text-center text-gray-400 dark:text-gray-200 italic py-4">
          No hay tareas. ¡Agrega una nueva!
        </div>
      )}
    </div>
  );
};

export default TaskList;