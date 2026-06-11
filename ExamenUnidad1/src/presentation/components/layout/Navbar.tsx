import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// NabClass: generador de clases para NavLink.
// Uso:
// - Enlaces inline: className={NabClass()}
// - Enlaces tipo bloque (móvil): className={NabClass(true)}
export const NavClass = (block = false) => ({ isActive }: { isActive: boolean }) => {
  const base = block ? 'block py-1 px-2' : 'px-3 py-2'
  return `${base} rounded transition ${isActive ? 'bg-blue-600 shadow-lg' : 'hover:bg-blue-500'}`
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <nav className="bg-blue-400 text-white p-4 hover:bg-blue-500 transition-colors">
      <div className="container mx-auto flex items-center justify-between">
        {/* Izquierda: nombre de la app / logo */}
        <span className="font-bold hover:bg-blue-500 p-2 rounded transition-shadow hover:shadow-lg">GameStore</span>

        {/* Enlaces de escritorio (ocultos en pantallas pequeñas) */}
        <div className="hidden md:flex gap-5 text-bold">
          <NavLink to="/" end className={NavClass()}>
            Inicio
          </NavLink>

          <NavLink to="/catalog" className={NavClass()}>
            Catálogo
          </NavLink>
        </div>

        {/* Botón menú móvil (visible en pantallas pequeñas) */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="menu">
          ☰
        </button>
      </div>

      {/* Menú móvil (renderizado solo cuando isMenuOpen es true) */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 space-y-2">
          <NavLink to="/" end className={NavClass(true)}>
            Inicio
          </NavLink>

          <NavLink to="/catalog" className={NavClass(true)}>
            Catálogo
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
