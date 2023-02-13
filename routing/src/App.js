import { Route, Routes, redirect } from 'react-router-dom';

import Welcome from './pages/welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path='welcome' element={<Welcome />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
