import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/createtodo'
import { Todos } from './components/Todos'
function App() {
const [todos,setTodos]=useState([])

fetch("http://13.60.57.80:3000/todos")
.then(async function(res){
  const json=await res.json();
  setTodos(json.todos);
})
  return (
  <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>  
  )
}

export default App
