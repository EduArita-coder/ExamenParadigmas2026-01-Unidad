import React from 'react'
import GameBadge from './GameBadge'

interface Props {
  title: string
  genre: string
  price: number
  available: boolean
  icon?: React.ReactNode
}

const GameCard = ({ title, genre, price, available, icon }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-300 ">
      {icon && <div className="mb-2">{icon}</div>}
      <h2 className="font-bold text-lg text-black">{title}</h2>
      <p className="text-gray-500">{genre}</p>
      <p className="mt-2 font-semibold text-green-600">{`$${price.toFixed(2)}`}</p>
      <div className="mt-3">
        {available ? (
          <GameBadge label="Disponible" color="bg-green-500" />
        ) : (
          <GameBadge label="Agotado" color="bg-red-500" />
        )}
      </div>
    </div>
  )
}

export default GameCard
