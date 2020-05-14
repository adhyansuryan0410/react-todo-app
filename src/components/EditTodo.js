import React, {useState, useEffect} from 'react'
import axios from 'axios'

function EditTodo(props) {
  const [todo, setTodo] = useState({
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  });

  useEffect(() => {
    axios.get('http://localhost:4000/todos/'+props.match.params.id)
         .then(res => {
           setTodo({
             todo_description: res.data.todo_description,
             todo_responsible: res.data.todo_responsible,
             todo_priority: res.data.todo_priority,
             todo_completed: res.data.todo_completed
           })
         })
         .catch(err => {
           console.log(err)
         })
  },[])

  const changeTodoDescription = (e) => {
    setTodo({
      ...todo, todo_description: e.target.value
    })
  }
  const changeTodoResponsible = (e) => {
    setTodo({
      ...todo, todo_responsible: e.target.value
    })
  }
  const changeTodoPriority = (e) => {
    setTodo({
      ...todo, todo_priority: e.target.value
    })
  }
  const changeTodoCompleted = (e) => {
    setTodo({
      ...todo, todo_completed: e.target.checked
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const obj = {
      todo_description: todo.todo_description,
      todo_responsible: todo.todo_responsible,
      todo_priority: todo.todo_priority,
      todo_completed: todo.todo_completed
    }
    console.log(obj)
    axios.post('http://localhost:4000/todos/update/'+props.match.params.id, obj)
          .then(res => console.log(res.data))
          .catch(err => console.log('Could not update \n' + err))
    
  }
  
  return (
    <div>
      <h3 align="center">Update Todo</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
                 className="form-control"
                 value={todo.todo_description}
                 onChange={changeTodoDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input type="text"
                 className="form-control"
                 value={todo.todo_responsible}
                 onChange={changeTodoResponsible}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio"
                   name="priorityOptions"
                   id="priorityLow"
                   value="low"
                   checked={todo.todo_priority==='low'}
                   onChange={changeTodoPriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio"
                   name="priorityOptions"
                   id="priorityMedium"
                   value="medium"
                   checked={todo.todo_priority==='medium'}
                   onChange={changeTodoPriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio"
                   name="priorityOptions"
                   id="priorityHigh"
                   value="high"
                   checked={todo.todo_priority==='high'}
                   onChange={changeTodoPriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-check">
          <input className="form-check-input"
                 id="completedCheckbox"
                 type="checkbox"
                 name="completedCheckbox"
                 onChange={changeTodoCompleted}
                 checked={todo.todo_completed}
                 value={todo.todo_completed}
          />
          <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
          </label>                        
        </div>
        <br />
        <div className="form-group">
          <input type="submit" value="Update Todo" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default EditTodo
