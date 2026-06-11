import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Bienvenido a GameStore </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-sm text-gray-600">Juegos disponibles</p>
          <p className="text-2xl font-bold text-green-500">30</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-sm text-gray-600">Ofertas activas</p>
          <p className="text-2xl font-bold text-blue-500">5</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/catalog" className="bg-blue-500 text-white text-lg px-4 py-2 rounded">Ver catálogo</Link>
      </div>
    </div>
  )
}

export default HomePage
