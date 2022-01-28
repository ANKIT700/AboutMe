import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



export default function RouteConfig() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/bus">bus</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
        </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="bus" element={<Bus />} />
      <Route path="cart" element={<Cart />} />
      <Route component={NotFound} />

    </Routes>
      </div>
    </Router>
  );
}



function Home() {
    return <h3>Home</h3>;
  }


function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

function NotFound() {
    return <h3>NotFound</h3>;
  }
