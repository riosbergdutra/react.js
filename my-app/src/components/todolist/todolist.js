import { useState } from 'react';
import './todolist.css';
import Todoitem from '../todoitem/todoitem';

const Todolist = () => {
    const [tarefas, setTarefas] = useState(['ir ao supermercado'])
    //const [contador, setContador] = useState(0)
    //const tarefas = ['ir ao mercado', 'estudar javascript','estudar react', 'lavar a louça', 'novo item'];
    const handleclick = () => {
        console.log('clicou')
      setTarefas([...tarefas,'cortar o cabelo'])
    }
    return (
        <section className="todolist">
            <h2 className='todo-title'>Minha Lista de Tarefas</h2>
            <ol className='todos'>
            {tarefas.map(tarefa => (
            <Todoitem tarefa={tarefa} key={tarefa} />
            ))}
            </ol>
            <button onClick={handleclick}>adicionar tarefas</button>
        </section>
    );
}

export default Todolist;