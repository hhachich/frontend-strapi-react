import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const { data, loading, error } = useFetch("/products");
  useEffect(() => {
    data && console.log(data);
  }, [data]);
  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
