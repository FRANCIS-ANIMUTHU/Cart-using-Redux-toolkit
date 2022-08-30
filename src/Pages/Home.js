import Product from "./Product.json";
import "./Home.css";
import { addtocart, addtofavorite } from "./Slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const State = useSelector((state) => state);
  const dispatch = useDispatch();
 
  const Addcart = (items) => {
    dispatch(addtocart([...State.cartbox.cartbox, items]));
    
  };
  const Addfavorite = (items) => {
    dispatch(addtofavorite([...State.favbox.favbox, items]));
  };
  return (
    <div className="maindiv">
      Home
      {Product.map((items, index) => {
        return (
          <div key={index} className="tools">
            <h1 className="head">{items.name}</h1>
            <p className="detail">{items.id}</p>
            <p className="detail">{items.price}</p>
            <p className="detail">{items.qty}</p>
            <img src={items.img} alt="" className="img"></img>
            <br></br>
            <button onClick={() => Addcart(items)}>Add to Cart</button>
            <button onClick={() => Addfavorite(items)}>Add to Favorite</button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
