import styles from './TodoList.module.css';
import { TodoItem } from "./TodoItem/TodoItem";

export function TodoList({ todos, changeStatus, removeTodo }){
    return(
        <div className={styles.list}>
            { todos.length ? todos.map(e => <TodoItem
                key={e.id}
                id={e.id}
                title={e.title}
                completed={e.completed}
                changeStatus={changeStatus}
                removeTodo={removeTodo}
            />) : <p className={styles.noTasks}>У вас пока нету задач</p> }
        </div>
    )
}