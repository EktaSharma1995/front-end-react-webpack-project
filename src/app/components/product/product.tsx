import * as React from "react";
import { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

export const Product = (props) => {
  interface PRODUCT {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
  }
  const [enteredQuantity, setEnteredQuantity] = useState(1);
  const handleInputChange = (event) => {
    setEnteredQuantity(parseInt(event.target.value));
  };

  const addNewProduct = (product, enteredQuantity) => {
    const cartProduct: PRODUCT = {
      id: product.id,
      title: product.title,
      description: product.description,
      quantity: 0,
      price: product.price,
    };

    if (product.quantity < enteredQuantity) {
      cartProduct.quantity = product.quantity;
    } else {
      cartProduct.quantity = enteredQuantity;
    }
    return cartProduct;
  };

  const addToCart = () => {
    let cart = [];
    const id = props.product.id;

    //If cart already exists
    if (sessionStorage.getItem("cart") !== null) {
      cart = JSON.parse(sessionStorage.getItem("cart"));

      const existingProduct = cart.filter((product) => product.id === id);
      if (existingProduct.length != 0) {
        cart.map((p) => {
          if (p.id === id) {
            const updatedQuantity =
              parseInt(p.productQuantity, 0) + enteredQuantity;
            if (props.product.quantity < updatedQuantity) {
              p.productQuantity = props.product.quantity;
            } else {
              p.productQuantity = updatedQuantity;
            }
          }
        });
      } else {
        const cartProduct = addNewProduct(props.product, enteredQuantity);
        cart.push(cartProduct);
      }

      sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const cartProduct = addNewProduct(props.product, enteredQuantity);
      cart.push(cartProduct);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <ReactBootStrap.Card style={{ width: "16rem", height: "36rem" }}>
      <ReactBootStrap.Card.Img variant="top" src={props.image.url} />
      <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>
          <h4>{props.product.title}</h4>
        </ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>
          {props.product.description}
        </ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>
          <small>price:</small>
          {`$${props.product.price}`}
        </ReactBootStrap.Card.Text>
        <br />
        {props.product.quantity > 0 ? (
          <div>
            <button
              className="btn btn-sm btn-warning float-right"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <input
              type="number"
              value={enteredQuantity}
              name="quantity"
              onChange={handleInputChange}
              //   className="float-right"
              style={{
                width: "60px",
                marginRight: "10px",
                borderRadius: "3px",
              }}
            />
          </div>
        ) : (
          <p className="text-danger">product is out of stock</p>
        )}
      </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
  );
};
