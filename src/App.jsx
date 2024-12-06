import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-dark-500 flex flex-col items-center justify-center p-4 transition-colors duration-300">
      <div className="relative w-full max-w-md">
        {/* Botón de modo oscuro */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute -top-12 right-0 bg-primary-500 dark:bg-primary-300 text-white dark:text-dark-500 p-2 rounded-full shadow-lg transform transition hover:scale-110"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <div className="bg-white dark:bg-dark-200 shadow-futuristic dark:shadow-futuristic-dark rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-dark-300 dark:to-dark-200 p-6">
            <h1 className="text-3xl font-bold text-center text-white">
              Lista de Tareas
            </h1>
          </div>
          <div className="p-6">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
