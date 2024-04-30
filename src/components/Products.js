import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Products.css"
function Products(props) {

  const [products, setProducts] = useState([]);

  const { data, loading, error } = useFetch("/products");
  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  return (
    <div className="products">
      {loading
        ? "loading ..."
        : products.map((product) => (
          <div className="product" key={product.id}>
            <h1 className="product-title">{product.attributes.title}</h1>
            <div className="product-price">{product.attributes.price}</div>
            <img className="product-image" src={process.env.REACT_APP_APP_URL + product.attributes.image.data.attributes.url}></img>
            <div className="product-desc">{product.attributes.description}</div>
          </div>
        ))}
    </div>
  );
}

export default Products;
