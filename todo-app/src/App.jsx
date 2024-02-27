import Todo from "./components/Todo"
import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Todo text="test"/>
    </div>
  )
}

export default App
