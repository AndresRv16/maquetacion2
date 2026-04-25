import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../components/contacto';
import Products from '../components/Products';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default AppRouter;