import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './components/Shop';
import {useState, useEffect} from 'react';
import Checkout from './components/Checkout';
import AddNewProduct from './components/AddNewProduct';




function App() {
  let localCart = window.localStorage.getItem("cart")
  localCart = JSON.parse(localCart)
  //check if cart structure from localStorage is valid (is not null & has "items" property)
  if(!localCart || !localCart.hasOwnProperty('items')) {
    localCart = {
      items: {},
      total: 0,
      itemCount: 0
    }
  }
  
  const [cart, setCart] = useState({...localCart})

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shop cart={cart} setCart={setCart}/>} />
      <Route path="/checkout" exact element={<Checkout cart={cart} setCart={setCart} />} />
      <Route path="/add" exact element={<AddNewProduct cart={cart} setCart={setCart} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
