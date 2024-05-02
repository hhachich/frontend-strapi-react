import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import StoreContext from "../hooks/storeContext";
import "./Products.css"
import { addToCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";

function Products() {

  const { filter } = useContext(StoreContext)
  const [products, setProducts] = useState([]);
  const { data, loading } = useFetch(filter);

  useEffect(() => {
    data && setProducts(data);
  }, [data]);
  const dispatch = useDispatch()
  return (
    <>
      <div className="products">
        {loading
          ? "loading ..."
          : products.map((product) => (
            <div className="product" key={product.id}>
              <h1 className="product-title">{product.attributes.title}</h1>
              <div className="product-price">{product.attributes.price}</div>
              <img className="product-image" alt={product.attributes.image.data.attributes.title} src={process.env.REACT_APP_APP_URL + product.attributes.image.data.attributes.url}></img>
              <div className="product-desc">{product.attributes.description}</div>
              <button className="product-btn" onClick={() => dispatch(addToCart({
                id: product.id,
                title: product.attributes.title,
                price: product.attributes.price,
                description: product.attributes.description,
                image: product.attributes.image,
                quantity: 1
              }))}>add To Cart</button>
            </div>

          ))}
      </div>
    </>
  );
}

export default Products;
