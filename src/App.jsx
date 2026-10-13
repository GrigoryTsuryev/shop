import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { ScrollManager, Toast } from './components/Utils';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Business from './pages/Business';
import NotFound from './pages/NotFound';

function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:slug" element={<ProductPage />} />
        <Route path="business" element={<Business />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
