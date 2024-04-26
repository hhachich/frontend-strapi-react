import { useEffect, useState } from "react";
import "./App.css";
import { fetchApi } from "./fetchApi";

function App() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);

  const fetchProducts = async () => {
    const res = await fetchApi.get("/products?populate=*");
    setProducts(res.data.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchCategorys = async () => {
    const res = await fetchApi.get("/categories?populate=*");
    setCategorys(res.data.data);
  };
  useEffect(() => {
    fetchCategorys();
  }, []);

  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
