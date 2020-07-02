import * as React from "react";

export const CartItem = (props) => {
  // const [quantity, setQuantity] = useState(1);
  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-body">
        <h4 className="card-title">{props.item.title}</h4>
        <h5 className="card-text">
          <small>price: </small>${props.item.price}
        </h5>
        <span className="card-text text-success">
          <small>Quantity: </small>
          {props.item.quantity}
        </span>
        <button
          className="btn btn-sm btn-warning float-right"
          onClick={() => props.remove(props.item)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};
