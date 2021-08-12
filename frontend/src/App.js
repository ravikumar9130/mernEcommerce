import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component
import Navbar from "./components/Navbar";
// import Shadow from "./components/Shadow";
// import SideBar from "./components/SideBar";
// pages
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <Main>
      
      <Router>
      <Navbar/>
        <Switch>
        
          <Route exact path="/" component={Shop} ></Route>
          <Route exact path= "/product/:id" component={Product} ></Route>
          <Route exact path = "/cart" component={Cart} ></Route>
         
        </Switch>
      </Router>
    </Main>
  );
}

export default App;

const Main = styled.div`

`
