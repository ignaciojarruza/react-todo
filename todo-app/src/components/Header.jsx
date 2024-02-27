import styles from "./header.module.css"
import logo from "../assets/todo.png"
export default function Header() {
    return (
        <>
            <img className={styles.logo} src={logo} alt="Todo Logo"/>
            <div className={styles.header}>My Todo List</div>
        </>
    );
}