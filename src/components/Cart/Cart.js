import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;

let totalPrice = cart.reduce( (total,course)=>total + course.price ,0)

    return (
        <div className="cart">
            <h2 className="h2">Enrolling Here </h2>
            <h3>Total Enroll : {cart.length} </h3>
           <h4> All Course Price : $ {totalPrice} </h4>
           <br/>  <br/>
           <button className="btn btn-dark">Purchase Now</button>
        </div>
    );
};

export default Cart;