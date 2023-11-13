import { Outlet, useLocation, useParams } from "react-router-dom"

const Product = () => {
    const {id} = useParams();
    const {state} = useLocation()


    return (
        <div>
            <h2>Tela interna do produto</h2>
            <p>O id do produto é {id}</p>
            <p>A matricula do produto é:{state}</p>
            <Outlet/>
        </div>
    )
}
export default Product
