import React, { useState } from "react";
import { Link } from "react-router-dom";
import Recipes from "../Recipes/recipes";
import validate from "../../Form-Validation/Dashboard-Validate";

const Dashboard = () => {
  const [productFilter, setProductFilter] = useState({
    query: "",
    number: "",
    intolerences: [],
  });

  let person = JSON.parse(localStorage.getItem("logged-in-user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(productFilter)) {
      localStorage.setItem("filter", JSON.stringify(productFilter));
      setProductFilter({
        ...productFilter,
        query: "",
        number: "",
      });
    } else {
      localStorage.removeItem("filter");
      setProductFilter({
        ...productFilter,
        query: "",
        number: "",
      });
    }
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    if (property === "intolerences" && value && checked) {
      setProductFilter({
        ...productFilter,
        [property]: [...productFilter.intolerences, value],
      });
    } else if (property === "intolerences" && !checked) {
      let arr = productFilter.intolerences;
      arr = arr.filter((val) => val !== value);
      setProductFilter({
        ...productFilter,
        [property]: arr,
      });
    } else if (property !== "intolerences") {
      setProductFilter({ ...productFilter, [property]: value });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("logged-in-user");
    localStorage.removeItem("filter");
  };

  return (
    <div>
      <article>
        <div className="item">
          <h3>Welcome {person.name}</h3>
          <button onClick={logoutHandler}>
            <Link to="/">Logout</Link>
          </button>
        </div>
        <form className="form">
          <div className="form-control">
            <label htmlFor="query">Food Item : </label>
            <input
              type="text"
              id="query"
              name="query"
              value={productFilter.query}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="number">No. Of results : </label>
            <input
              type="text"
              id="number"
              name="number"
              value={productFilter.number}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Intelorences">Intolerances : </label>
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                id="intolerences"
                value=""
                name="intolerences"
                onChange={handleChange}
              />
              <label htmlFor="intolerences"> None</label>
              <br />
              <input
                type="checkbox"
                id="intolerences"
                value="Dairy"
                name="intolerences"
                onChange={handleChange}
              />
              <label htmlFor="intolerences"> Dairy</label>
              <br />
              <input
                type="checkbox"
                id="intolerences"
                value="Egg"
                name="intolerences"
                onChange={handleChange}
              />
              <label htmlFor="intolerences"> Egg</label>
              <br />
              <input
                type="checkbox"
                id="intolerences"
                value="Gluten"
                name="intolerences"
                onChange={handleChange}
              />
              <label htmlFor="intolerences"> Gluten</label>
              <br />
              <input
                type="checkbox"
                id="intolerences"
                value="Grain"
                name="intolerences"
                onChange={handleChange}
              />
              <label htmlFor="intolerences"> Grain</label>
              <br />
              <input
                type="checkbox"
                id="intolerences"
                value="Peanut"
                name="intolerences"
                onChange={handleChange}
              />
              <label htmlFor="intolerences"> Peanut</label>
              <br />
              <input
                type="checkbox"
                id="intolerences"
                value="Seafood"
                name="intolerences"
                onChange={handleChange}
              />
              <label htmlFor="intolerences"> Seafood</label>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {localStorage.getItem("filter") ? <Recipes /> : ""}
      </article>
    </div>
  );
};

export default Dashboard;
