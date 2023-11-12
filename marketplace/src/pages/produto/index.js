import { Outlet, useParams } from "react-router-dom"

const Product = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>Tela interna do produto</h2>
            <p>O id do produto é {id}</p>
            <Outlet/>
        </div>
    )
}
export default Product
