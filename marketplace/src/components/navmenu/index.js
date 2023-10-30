import { Link } from "react-router-dom"
import './style.css'
const Navmenu = () => {
    return (
        <nav>
            <h1>MarketPlace</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                
            </ul>
        </nav>    
    )
}
export default Navmenu