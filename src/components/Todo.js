import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Todo.css'

function Todo(props) {

  const complete = props.todo.todo_completed

  const confirmDelete = (e) => {
    if(window.confirm('Sure to delete?')){
      e.preventDefault()   
      axios.delete('http://localhost:4000/todos/delete/'+props.todo._id)
          .then(console.log('Deleted successfully'))
          .catch(err => console.log(err))
      window.location.reload(true)
    }
    else{
      window.alert('User pressed cancel')
      window.location.reload(true)
    }       
  }

  return (
    <tr>
      <td className={complete? "complete": null}>
          {props.todo.todo_description}
      </td>
      <td style={{
            textDecoration: complete ? 'line-through' : null
          }}>
          {props.todo.todo_responsible}
      </td>
      <td style={{
            textDecoration: complete ? 'line-through' : null
          }}>
          {props.todo.todo_priority}
      </td>
      <td>
        <button className="btn btn-link"><Link to={"/edit/"+props.todo._id}> Edit </Link></button>
        <button onClick={confirmDelete} className="btn btn-link"> Delete </button>
      </td>
    </tr>
  )
}

export default Todo
