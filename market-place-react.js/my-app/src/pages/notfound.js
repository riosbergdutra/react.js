import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-8">404 - Not Found</h1>
        <button  className="bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105">
            <Link to='/' className="text-lg text-white-500 no-underline">Voltar</Link>
        </button>
      </div>
    )
}
export default Notfound