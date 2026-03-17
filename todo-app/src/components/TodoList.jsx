import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onDelete, onUpdate, onToggle }) {
  if (!todos.length) return <p>Список пустий. Додайте першу задачу.</p>

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}