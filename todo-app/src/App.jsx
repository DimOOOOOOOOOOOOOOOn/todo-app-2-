import React, { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = 'react-hooks-todos'

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    if (!text || !text.trim()) return
    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    )
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  return (
    <div className="app">
      <h1>Список задач (React Hooks)</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        onToggle={toggleComplete}
      />
    </div>
  )
}