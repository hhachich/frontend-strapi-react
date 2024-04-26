import "./App.css";
import { fetchApi } from "./fetchApi";

function App() {
  const fetchProducts = async () => {
    const res = await fetchApi.get("/products?populate=*");
    console.log(res.data.data);
  };
  fetchProducts();
  const fetchCategorys = async () => {
    const res = await fetchApi.get("/categories?populate=*");
    console.log(res.data.data);
  };
  fetchCategorys();
  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
