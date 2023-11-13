import { Link, useLocation, useSearchParams } from "react-router-dom";
import './style.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {state} = useLocation()

    const setPage = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <p>Abaixo uma lista de produtos</p>
            <p>Usuario recem cadastrado: {state}</p>
            <p>Página: {searchParams.get('page')}</p>
            <Link to='/product/1' state={'1AFB81'}>Link para o produto 1</Link>
            <br/>
            <Link to='/product/2'>Link para o produto 2</Link>           
            <br/>
            <Link to='/product/3'>Link para o produto 3</Link>
            <br/>
            <Link to='/product/4'>Link para o produto 4</Link>

            <ul>
                <li><button onClick={() => setPage(1)}>1</button></li>
                <li><button onClick={() => setPage(2)}>2</button></li>
                <li><button onClick={() => setPage(3)}>3</button></li>
                <li><button onClick={() => setPage(4)}>4</button></li>
            </ul>
        </div>
    );
};

export default Products;