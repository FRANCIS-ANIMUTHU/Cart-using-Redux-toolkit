import { useSelector } from "react-redux";
import React from 'react';
import "./Favorite.css";

function Cart() {
    const State=useSelector((state)=>state)
    console.log(State);

    const removefav=(items)=>{

    }
  return (
    
    <div className="favdiv">
     {State?.favbox.favbox.map((items,index)=>{
       return (
        <div key={index} className="tools">
            <h1 className="head">{items.name}</h1>
            <p className="detail">{items.id}</p>
            <p className="detail">{items.qty}</p>
            <p className="detail">{items.price}</p>
            <img src={items.img} alt="" className="img"></img>
            <button onClick={()=>{removefav(items)}}>Remove Favorite</button>
        </div>
       )
     })}
    </div>
  )
}

export default Cart