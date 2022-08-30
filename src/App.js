import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route,Link,Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Store from './Pages/Store';
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import { Provider } from 'react-redux';

function App() {
 return (
  <div className='appdiv'>
    <Provider store={Store}>
      <BrowserRouter>
       <ul>
         <li>
           <Link to='/' className="link">Home</Link>
         </li>
         <li>
           <Link to='/Cart' className="link">Cart</Link>
         </li>
         <li>
           <Link to='/Favorite' className="link">Favorite</Link>
         </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/Cart' element={<Cart/>}>Home</Route>
        <Route path='/Favorite' element={<Favorite/>}>Home</Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </div>
  )
}

export default App

