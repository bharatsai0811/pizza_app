import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
