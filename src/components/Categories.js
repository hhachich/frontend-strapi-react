import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Categories.css"
function Categories(props) {
  
  const [categories, setCategories] = useState([]);
  
  const { data, loading, error } = useFetch("/Categories");
  useEffect(() => {
    data && setCategories(data);
    console.log(categories);
  }, [data]);

  return (
    <div className="flex">
    {loading
        ? "loading ..."
        : categories.map((categorie) => (
            <div key={categorie.id}>
              <h1>{categorie.attributes.title}</h1>             
            </div>
          ))}
    </div>
  );
}

export default Categories;
