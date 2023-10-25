import './todolist.css';
import Todoitem from '../todoitem/todoitem';

const Todolist = () => {
    const tarefas = ['ir ao mercado', 'estudar javascript','estudar react', 'lavar a louça', 'novo item'];

    return (
        <section className="todolist">
            <h2 className='todo-title'>Minha Lista de Tarefas</h2>
            <ol className='todos'>
            {tarefas.map(tarefa => (
            <Todoitem tarefa={tarefa} key={tarefa} />
            ))}
            </ol>
        </section>
    );
}

export default Todolist;