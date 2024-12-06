import React, { useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:5000'

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/tasks`, {
        title,
        description,
      })
      onTaskCreated(response.data)
      setTitle('')
      setDescription('')
    } catch (error) {
      console.error('Error creando tarea:', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-1 bg-gray-100 dark:bg-dark-300 rounded-xl"
    >
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-3 bg-transparent text-dark-500 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-b border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary-500"
      />
      <textarea
        placeholder="Descripción (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 bg-transparent text-dark-500 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-b border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary-500"
      />
      <button
        type="submit"
        className="w-full mt-2 p-3 bg-primary-500 dark:bg-primary-400 text-white rounded-b-xl hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors duration-300"
      >
        Crear Tarea
      </button>
    </form>
  )
}

export default TaskForm
