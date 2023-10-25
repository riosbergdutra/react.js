
import './todoitem.css'

const Todoitem = ({ tarefa }) => {
    return (<li className="todo-item">
        <input type="checkbox"/>
        {tarefa}
    </li>
    )
}
export default Todoitem