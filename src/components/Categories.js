import React, { Fragment, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Categories.css"
import Checkbox from "./Checkbox";
function Categories() {

  const [categories, setCategories] = useState([]);

  const { data, loading, error } = useFetch("/Categories?populate=*");

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
