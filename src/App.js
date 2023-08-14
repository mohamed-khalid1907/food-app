import "./App.css";
import Header from "./Components/header";
import Home from "./Components/home.js";
import Product from "./Components/product.js";
import Stats from "./Components/stats.js";
import About from "./Components/about.js";
import Footer from "./Components/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
      <Stats />
      <About />
      <Footer />
    </div>
  );
}

export default App;
