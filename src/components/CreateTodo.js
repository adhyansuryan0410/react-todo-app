import React, { useState } from 'react';
import axios from 'axios'

function CreateTodo() {
  const [todo, setTodo] = useState({
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  });

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
    console.log(`Todo Description ${todo.todo_description}`)
    console.log(`Todo Responsible ${todo.todo_responsible}`)
    console.log(`Todo Priority ${todo.todo_priority}`)

    const newTodo = {
      todo_description: todo.todo_description,
      todo_responsible: todo.todo_responsible,
      todo_priority: todo.todo_priority,
      todo_completed: todo.todo_completed
    }

    axios.post('http://localhost:4000/todos/add', newTodo)
         .then(res => {console.log(res.data)})
         .catch(err => {console.log(err)})

    setTodo({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
  }
  return(
    <div style={{marginTop: 10}}>
      <h3>Create new Todo</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={todo.todo_description}
            onChange={(e) => setTodo({...todo, todo_description: e.target.value})}/>
        </div>
        <div className="form-group">
          <label>Responsible</label>
          <input
            type="text"
            className="form-control"
            value={todo.todo_responsible}
            onChange={(e) => setTodo({...todo, todo_responsible: e.target.value})}/>
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="low"
              checked={todo.todo_priority==='low'}
              onChange={(e) => setTodo({...todo, todo_priority:e.target.value})}/>
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="medium"
              checked={todo.todo_priority==='medium'}
              onChange={(e) => setTodo({...todo, todo_priority:e.target.value})}/>
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="high"
              checked={todo.todo_priority==='high'}
              onChange={(e) => setTodo({...todo, todo_priority:e.target.value})}/>
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Todo" className="btn btn-primary"/>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo
