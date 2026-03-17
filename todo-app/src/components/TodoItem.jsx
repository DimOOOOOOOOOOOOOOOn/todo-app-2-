import React, { useState } from 'react'

export default function TodoItem({ todo, onDelete, onUpdate, onToggle }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)

  const save = () => {
    const trimmed = editValue.trim()
    if (!trimmed) return
    onUpdate(todo.id, trimmed)
    setIsEditing(false)
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {!isEditing ? (
          <span className="text">{todo.text}</span>
        ) : (
          <input
            className="edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        )}
      </div>

      <div className="actions">
        {!isEditing ? (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </>
        ) : (
          <>
            <button onClick={save}>Save</button>
            <button onClick={() => { setEditValue(todo.text); setIsEditing(false) }}>
              Cancel
            </button>
          </>
        )}
      </div>
    </li>
  )
}