import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Products.css"
function Products(props) {
  
  const [products, setProducts] = useState([]);
  
  const { data, loading, error } = useFetch("/products");
  useEffect(() => {
    data && setProducts(data);
    console.log(products);
  }, [data]);

  return (
    <div className="flex">
    {loading
        ? "loading ..."
        : products.map((product) => (
            <div key={product.id}>
              <h1>{product.attributes.title}</h1>
              <p>{product.attributes.description}</p>
              <p>{product.attributes.price}</p>
              <img src={process.env.REACT_APP_APP_URL+product.attributes.image.data.attributes.url}></img>
            </div>
          ))}
    </div>
  );
}

export default Products;
