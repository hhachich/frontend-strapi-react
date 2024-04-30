import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import StoreContext from "./hooks/storeContext";

function App() {
  const [filter, setFilter] = useState("");
  useEffect(() => {
    console.log("filter : ", filter)
  }, [filter])
  return (
    <>
      < h1>Application</h1>
      <StoreContext.Provider value={{ filter, setFilter }}>
        <Categories />
        <Products />
      </StoreContext.Provider>
    </>


  );
}

export default App;
