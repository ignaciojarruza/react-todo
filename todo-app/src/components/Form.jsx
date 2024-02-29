import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo..."
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
