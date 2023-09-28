import styles from './TodoItem.module.css';

export function TodoItem({ id, title, completed, changeStatus, removeTodo }){
    return(
        <div
            className={styles.task}
            onClick={() => changeStatus(id)}
            onDoubleClick={() => removeTodo(id)}
            style={{
                backgroundColor: completed ? 'green' : 'red'
            }}
        >
            <h2>{title}</h2>
        </div>
    )
}