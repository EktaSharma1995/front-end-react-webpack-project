import * as React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../cartItem/cartItem";
import { useState, useEffect } from "react";
import axios from "axios";

export const Cart = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const removeFromCart = (product) => {
    // debugger;
    const remainingProduct = products.filter((item) => item.id !== product.id);
    const index = cart.findIndex((p) => p.id === product.id);
    cart.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    const totalPrice = total - product.quantity * product.price;
    setProducts(remainingProduct);
    setTotal(totalPrice);
  };

  const clearCart = () => {
    console.log("clear");
    sessionStorage.removeItem("cart");
    setProducts([]);
  };

  useEffect(() => {
    console.log("called");
    if (!cart) {
      return;
    } else {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
      }
      setProducts(cart);
      setTotal(total);
    }
  }, []);

  return (
    <div className=" container">
      <h3 className="card-title">Cart</h3>
      <hr />
      {cart.map((product, index) => (
        <CartItem item={product} remove={removeFromCart} key={index} />
      ))}
      <hr />
      {products.length ? (
        <div>
          <h4>
            <small>Total Amount:</small>
            <span className="float-right text-primary">${total}</span>
          </h4>
          <hr />
        </div>
      ) : (
        ""
      )}

      {!products.length ? (
        <h3 className="text-warning">No item on the cart</h3>
      ) : (
        ""
      )}
      <Link to="/checkout">
        <button className="btn btn-success float-right">Checkout</button>
      </Link>
      <button
        className="btn btn-danger float-right"
        onClick={clearCart}
        style={{ marginRight: "10px" }}
      >
        Clear Cart
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};
