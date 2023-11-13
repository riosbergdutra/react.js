import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()

    const HandleSubmit = (event) =>{
        event.preventDefault()
        console.log('formulario enviado')
        navigate('/products', {state: 'teste'})
    }
    return (
        <form onSubmit={HandleSubmit}>
            <div>
                <label htmlFor="">Nome:</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email"/>
            </div>
            <div>
                <label htmlFor="">Senha:</label>
                <input type="password"/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default Register