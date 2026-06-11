import GameCard from '../../components/games/GameCard'
import { useState } from 'react'

const CatalogPage = () => {
  const [cartCount, setCartCount] = useState<number>(0)
  const [totalSpent, setTotalSpent] = useState<number>(0)
  const [showCart, setShowCart] = useState<boolean>(false)

  const addToCart = () => {
    setCartCount(prev => prev + 1)
    setTotalSpent(prev => Math.round((prev + 59.99) * 100) / 100)
  }

  const emptyCart = () => {
    setCartCount(0)
    setTotalSpent(0)
  }

  const toggleShowCart = () => setShowCart(prev => !prev)

  const games = [
    { title: 'La Fiera 1', genre: 'Aventura', price: 59.99, available: true, icon: '🎮' },
    { title: 'Padel Simulator', genre: 'Deportes', price: 49.99, available: false, icon: '🎾' },
    { title: 'El anillo de Elder Romero', genre: 'RPG', price: 39.99, available: true, icon: '🗡️' },
    { title: 'Carlos Duty', genre: 'Acción', price: 69.99, available: false, icon: '🔫' },
  ]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Catálogo de Juegos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {games.map((g, idx) => (
          <GameCard
            key={idx}
            title={g.title}
            genre={g.genre}
            price={g.price}
            available={g.available}
            icon={<span className="text-2xl">{g.icon}</span>}
          />
        ))}
      </div>

      <div className="flex gap-3 mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={addToCart}>
          Agregar al carrito (+$59.99)
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={emptyCart}>
          Vaciar carrito
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={toggleShowCart}>
          {showCart ? 'Ocultar resumen' : 'Ver resumen'}
        </button>
      </div>

      {showCart && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded w-full sm:w-1/2">
            <h1 className="text-xl font-bold text-blue-700 mb-2">Resumen del carrito</h1>
          <p>Juegos en carrito: {cartCount}</p>
          <p>Total a pagar: ${totalSpent.toFixed(2)}</p>
        </div>
      )}

    </div>
  )
}

export default CatalogPage
