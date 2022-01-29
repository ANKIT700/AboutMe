import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import MyProfileMain from "./components/myProfile/MyProfileMain";





class App extends Component {
  render() {
    return (
      <>
       <Router>
       <Navbar />
      <Routes>
        <Route path='/' exact element={<MyProfileMain/>} />
        <Route path='/about' element={<Bus/>} />
        <Route path='/events' element={<Cart/>} />
        <Route path='/annual' element={<NotFound/>} />
      </Routes>
    </Router>
      </>
    )
  }
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


export default App
