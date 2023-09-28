import styles from './AddTodo.module.css';

export function AddTodo({ addTodo }){
    function handler(e){
        if (e.key === 'Enter'){
            if (e.target.value !== '') addTodo(e.target.value);

            e.target.value = '';
        }
    }

    return(
        <input
            type="text"
            placeholder="Введите новую задачу"
            className={styles.input}
            onKeyDown={handler}
        />
    )
}