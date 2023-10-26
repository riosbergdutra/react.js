import { useState } from 'react';
import './todolist.css';
import Todoitem from '../todoitem/todoitem';

const Todolist = () => {
    const [tarefas, setTarefas] = useState([]);
    const [tarefatext, setTarefaText] = useState('');

    const handlechange = (event) => {
        setTarefaText(event.target.value);
    }

    const handlesubmit = (event) => {
        event.preventDefault(); // Correção: aqui estava com erro de digitação
        setTarefas([...tarefas, tarefatext]);
        setTarefaText(''); // Limpar o campo de entrada após o envio
    }

    return (
        <section className="todolist">
            <h2 className='todo-title'>Minha Lista de Tarefas</h2>
            <form className='todo-register' onSubmit={handlesubmit}>
                <label htmlFor='tarefa'>Tarefa:</label>
                <input
                    type='text'
                    id='tarefa'
                    placeholder='digite a sua tarefa'
                    value={tarefatext}
                    onChange={handlechange}
                />
                <button type='submit'>Enviar</button>
            </form>
            <ol className='todos'>
                {tarefas.map((tarefa, index) => (
                    <Todoitem tarefa={tarefa} key={index} />
                ))}
            </ol>
        </section>
    );
}

export default Todolist;