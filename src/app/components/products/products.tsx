import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import { Product } from "../product/product";

export const Products = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [products, setProducts] = useState([]);

  const imageArray = [
    { id: 1, url: "http://localhost:3000/1.jpeg", title: "T-shirt" },
    { id: 2, url: "http://localhost:3000/2.jpeg", title: "trouser" },
    { id: 3, url: "http://localhost:3000/3.jpeg", title: "tank-top" },
    { id: 4, url: "http://localhost:3000/4.jpeg", title: "shirt" },
    { id: 5, url: "http://localhost:3000/5.jpeg", title: "Pyjamas" },
    { id: 6, url: "http://localhost:3000/6.jpeg", title: "Kurti" },
    { id: 7, url: "http://localhost:3000/7.jpeg", title: "high-neck t-shirt" },
    { id: 8, url: "http://localhost:3000/8.jpeg", title: "shorts" },
  ];

  useEffect(() => {
    console.log("called");
    axios
      .get("http://localhost:3000/products", {
        headers: { Authorization: `${token}` },
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2> Products</h2>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div>
                {imageArray.map((image) => {
                  if (image.id === product.id) {
                    return <Product product={product} image={image} />;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
