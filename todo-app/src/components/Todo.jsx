import {useState} from "react"

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
            <h1>{todos}</h1>
            <input value={todo} type="text" onChange={(e)=> setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>)
}