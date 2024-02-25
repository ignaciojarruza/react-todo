import useState from "react"

export default function Todo() {
    const [todo, setTodo] = useState("")
    return <div>
        <form>
            <h1>{todo}</h1>
            <input value={todo} type="text" onChange={()=> setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>
}