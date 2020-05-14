import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import logo from './logo.svg';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

function App() {
  return(
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src={logo} width="30" height="30" alt="logo" />
          <Link to="/" className="navbar-brand">MERN-Stack To-Do App</Link>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsiblenavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsiblenavbar">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={TodoList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
      </div>
    </Router>
  )
}

export default App;
