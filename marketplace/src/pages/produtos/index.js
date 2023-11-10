import { Link, useSearchParams } from "react-router-dom";
import './style.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setPage = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <p>Abaixo uma lista de produtos</p>
            <p>Página: {searchParams.get('page')}</p>
            <Link to='/product/1'>Link para o produto</Link>
            <br/>
            <Link to='/product/2'>Link para o produto</Link>           
            <br/>
            <Link to='/product/3'>Link para o produto</Link>
            <br/>
            <Link to='/product/4'>Link para o produto</Link>

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