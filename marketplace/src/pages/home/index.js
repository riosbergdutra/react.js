import "./style.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to ={'/login'}>Vá PARA LOGIN</Link>
        </div>
    )
}
export default Home