import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";

function App() {
 const RoutesName = {
    HOME: '/',
    CATEGORY: '/category/:category',
    DETAIL:'/product-detail/:product',
  }
  return (
    <>
      <BrowserRouter>
      <Navbar RoutesName={RoutesName}/>
        <Routes>
          <Route path={RoutesName.HOME} element={<Home />} />
          <Route path={RoutesName.CATEGORY} element={<Category RoutesName={RoutesName}/>} />
          <Route path={RoutesName.DETAIL} element={<ProductDetail/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
