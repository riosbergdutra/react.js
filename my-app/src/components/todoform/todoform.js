import { useState } from 'react';
import './todoform.css'

const TodoForm = ({onAdd}) => {
    const [tarefatext, setTarefaText] = useState('');

    const handlechange = (event) => {
        setTarefaText(event.target.value);
    }

    const handlesubmit = (event) => {
        event.preventDefault(); // Correção: aqui estava com erro de digitação
        //setTarefas([...tarefas, tarefatext]);
        onAdd(tarefatext)
        setTarefaText(''); // Limpar o campo de entrada após o envio
    }
    return (
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
    )
}
export default TodoForm