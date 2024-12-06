import React from 'react'

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div
      className={`
        flex justify-between items-center p-4 
        ${
          task.completed
            ? 'bg-gray-100 dark:bg-dark-300 text-gray-500 dark:text-gray-400'
            : 'bg-white dark:bg-dark-200 text-dark-500 dark:text-white'
        }
        border-l-4 border-transparent 
        ${
          task.completed
            ? 'border-gray-300 dark:border-dark-100'
            : 'hover:border-primary-500 dark:hover:border-primary-400'
        }
        rounded-lg transition-all duration-300 transform hover:scale-[1.02]
      `}
    >
      <div className="flex-grow mr-4">
        <h3 className={`font-bold ${task.completed ? 'line-through' : ''}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className="text-sm opacity-70">{task.description}</p>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id, !task.completed)}
          className="form-checkbox h-5 w-5 text-primary-500 dark:text-primary-400 rounded focus:ring-primary-500"
        />
        <button
          onClick={() => onDelete(task.id)}
          className="
            bg-red-500 dark:bg-red-600 
            text-white px-3 py-1 rounded-full 
            hover:bg-red-600 dark:hover:bg-red-700 
            transition-colors duration-300
          "
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default TaskItem
