import { Routes, Route } from 'react-router-dom'
import Navbar from '../presentation/components/layout/Navbar'
import HomePage from '../presentation/pages/home/HomePage'
import CatalogPage from '../presentation/pages/catalog/CatalogPage'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
