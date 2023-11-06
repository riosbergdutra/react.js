import { Link } from "react-router-dom"

const Products = () => {
    return (
        <div>
            <h2>Lista de Produtos</h2>
            <p>Abaixo uma lista de produtos</p>
            <Link to='/product/1'>Link para o produto</Link>
            <br/>
            <Link to='/product/2'>Link para o produto</Link>           
            <br/>
            <Link to='/product/3'>Link para o produto</Link>
            <br/>
            <Link to='/product/4'>Link para o produto</Link>

        </div>
    )
}
export default Products