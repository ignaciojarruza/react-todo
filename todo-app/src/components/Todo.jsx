import {useState} from "react"
import TodoItem from "./TodoItem"

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo("")
    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <h1>{todos.map(item=><TodoItem item={item} key={item}/>)}</h1>
            <input value={todo} type="text" onChange={(e)=> setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>)
}