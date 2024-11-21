import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <div className="min-h-screen bg-customBlue"></div>
      <Footer />
    </>
  );
}

export default App;
