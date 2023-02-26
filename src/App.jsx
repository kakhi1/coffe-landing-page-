import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product  from "./components/Product";
import Taste from'./components/Taste'
import Costumers from './components/Costumers'
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Product/>
      <Taste/>
      <Costumers/>
      <Footer/>
    </div>
  );
}

export default App;
