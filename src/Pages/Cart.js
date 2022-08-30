import { useSelector,useDispatch } from "react-redux";
import React from 'react';
import "./Cart.css";
import {removecart,increase} from "./Slice";

function Cart() {
    const State=useSelector((state)=>state)
    // console.log(State);
    const dispatch=useDispatch();

    const removeproduct=(items)=>{
     const remove=State.cartbox.cartbox.filter((data)=> data.id !== items.id)
     dispatch(removecart(remove))}
    
    const increaseqty=(items)=>{
      //  console.log(items);
      // const x=State.cartbox.cartbox.find((data)=>data.id===items.id).qty++;
      const x=[...State.cartbox.cartbox].find((data)=>data.id===items.id).qty++;
       console.log(items.qty);
    
    dispatch(increase(x))
    }
    
    
  return (
    
    <div className="cartdiv">
     {State?.cartbox.cartbox.map((items,index)=>{
       return (
        <div key={index} className="tools">
            <h1 className="head">{items.name}</h1>
            <p className="detail">{items.id}</p>
            <p className="detail">{items.qty}</p>
            <p className="detail">{items.price}</p>
            <img src={items.img} alt="" className="img"></img><br></br>
            <button onClick={()=>increaseqty(items)}>+</button>
            <button onClick={()=>removeproduct(items)}>Remove</button>
        </div>
       )
     })}

    </div>
  )
}

export default Cart