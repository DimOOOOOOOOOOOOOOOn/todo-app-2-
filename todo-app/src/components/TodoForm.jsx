import React, { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Нова задача..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  )
}