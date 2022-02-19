import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Dashboard-Image/dashboardRandomImage";
import validate from "../../Form-Validation/Validate-Login";
const Login = ({ loading, products }) => {
  const [person, setPerson] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(person)) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      };
      localStorage.setItem("logged-in-user", JSON.stringify(newPerson));
      setPerson({ name: "", email: "", password: "" });
      navigate("/dashboard");
    }
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [property]: value });
  };

  return (
    <div>
      <article>
        <div className="item">
          <h3>Welcome to Spoonacular</h3>
        </div>
        <form className="form">
          <div className="form-control">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn">
            Submit
          </button>
        </form>
        <div className="item">
          <Image loading={loading} products={products} />
        </div>
      </article>
    </div>
  );
};

export default Login;
