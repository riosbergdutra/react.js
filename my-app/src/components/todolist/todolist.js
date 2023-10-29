import { useState } from 'react';
import './todolist.css';
import Todoitem from '../todoitem/todoitem';
import TodoForm from '../todoform/todoform';

const Todolist = (params) => {
    const [tarefas, setTarefas] = useState([]);

    const addTodo = (tarefatext) => {
        setTarefas([...tarefas, tarefatext])
    }

    return (
        <section className="todolist">
            <h2 className='todo-title'>Minha Lista de Tarefas</h2>
            <TodoForm onAdd={addTodo}/>
            <ol className='todos'>
                {tarefas.map((tarefa, index) => (
                    <Todoitem tarefa={tarefa} key={index} />
                ))}
            </ol>
        </section>
    );
}

export default Todolist;