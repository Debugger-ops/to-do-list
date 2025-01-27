import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
   
  }, [])


  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) =>{
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    console.log(e, e.target)
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="md:container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh] flex-col justify-center md:w-1/2">

        <h1 className='font-bold text-center text-xl'>Task Manager- Manages your Task </h1>
        <div className='addTod my-5 flex flex-col'>
          <h2 className="text-lg font-bold">Add a Todos</h2>
          <input  onChange={handleChange} value={todo} type="text" className='my-3 w-full rounded-lg px-5' />
          <button onClick={handleAdd} disabled={todo.length<=3}  className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-700 p-3 py-1 text-sm font-bold text-white rounded-lg  w-ful w-auto'>Save</button>
        </div>
        <input onChange={toggleFinished} className='my-5' type="checkbox" checked={showFinished}/>Show Finished
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos w-full">
          {todos.length === 0 && <div className='m5'>No todos to display</div>}
          {todos.map(item => {


            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between md:w-1/2 my-5">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={todo.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-lg mx-2'><FaEdit /></button>
                <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-lg mx-1'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
