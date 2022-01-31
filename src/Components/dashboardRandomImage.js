import React from "react";

function Image({ loading, products }) {
  let { recipes } = products;
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img className="image" src={recipes[0].image} alt="img" />
          <h3>
            Your Today's recipe is:- <i>{recipes[0].title}</i>
          </h3>
        </div>
      )}
    </div>
  );
}

export default Image;
