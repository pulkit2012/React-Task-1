import React from "react";
import { useFetch } from "../../CustomHook/useFetch";
const Recipes = () => {
  const { query, number, intolerences } = JSON.parse(
    localStorage.getItem("filter")
  );
  const url = `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&intolerances=${intolerences}&number=${number}`;
  const { products, loading } = useFetch(url);
  const { results } = products;

  return (
    <div>
      {loading ? (
        <div className="item">
          <h3>Loading...</h3>
        </div>
      ) : results.length === 0 ? (
        <div className="item">
          <h4>
            Uh Oh! Nothing To Display, Try to Change <br /> Parameters
          </h4>
        </div>
      ) : (
        results.map((recipe) => {
          const { id, name, image } = recipe;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Recipes;
