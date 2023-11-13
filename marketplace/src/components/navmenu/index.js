import { Link } from "react-router-dom"
import './style.css'
import styled from "styled-components"
const Navmenu = () => {
    const Button = styled.button`
        background: palevioletred;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: white;
        margin: 0 1em;
        padding: 0.25em 1em;
    `;


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
                <li>
                <Link to='/products'>Produtos</Link>
                </li>
                <li>
                <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Button>clique aqui</Button>
                </li>
            </ul>
        </nav>    
    )
}
export default Navmenu