import './App.css';
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import CheckoutPage from "./components/CheckoutPage"
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import Checkout from "./components/CheckoutForm/Checkout"

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/checkout-page" element={<CheckoutPage/>}></Route>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
