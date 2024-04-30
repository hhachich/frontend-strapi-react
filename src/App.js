import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import TestCard from "./components/TestCard";
import StoreContext from "./hooks/storeContext";

function App() {
  const [filter, setFilter] = useState("/products?populate=*");
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    console.log("filter APP: ", filter)
  }, [filter])
  return (
    <>
      < h1>Application</h1>
      <StoreContext.Provider value={{ filter, setFilter, selectedCategories, setSelectedCategories }}>

        <Categories />
        <Products />
      </StoreContext.Provider>
    </>


  );
}

export default App;
