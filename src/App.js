import Cards from "./component/cards/Cards";
import Categories from "./component/categories/Categories";
import Food from "./component/food/Food";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
