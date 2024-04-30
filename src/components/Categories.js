import React, { Fragment, useEffect, useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Categories.css"
import Checkbox from "./Checkbox";
import StoreContext from "../hooks/storeContext";
function Categories(props) {

  const [categories, setCategories] = useState([]);

  const { data, loading, error } = useFetch("/Categories");

  useEffect(() => {
    data && setCategories(data);
  }, [data]);

  return (
    <div className="categories">
      {loading
        ? "loading ..."
        : categories.map((category) => (
          <Fragment key={category.id}>
            <Checkbox category={category} />
          </Fragment>
        ))}
    </div>
  );
}

export default Categories;
