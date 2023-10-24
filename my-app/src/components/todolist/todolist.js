import './todolist.css'

const Todolist = () => {
    return(
        <section className="todolist">
            <h2 className='todo-title'>Minha Lista de Tarefas</h2>
            <ol className='todos'>
                <li className='todo-item'>
                <input type='checkbox'/>
                Ir no mercado
                </li>
                <li className='todo-item'>
                <input type='checkbox'/>
                    Estudar 30min de javascript
                    </li>
                <li className='todo-item'>
                <input type='checkbox'/>
                    Meditar 30min
                </li>

            </ol>
        </section>
    )
}

export default Todolist