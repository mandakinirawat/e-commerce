import Header from "./component/Header";
import NavBar from "./component/NavBar";
import Cards from "./component/Cards";
import Product from "./component/Product";
import { Routes, Route } from "react-router-dom";
import CategoryProducts from "./component/CategoryProducts";
import SelectCategory from "./component/SelectCategory";
import ItemsInCart from "./component/ItemsInCart";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SelectCategory/>
      
      <Routes>
      
        <Route exact path="/" element={<Cards />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/category/:name" element={ <CategoryProducts/>}/>
        <Route path="/ItemCart" element={<ItemsInCart/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
