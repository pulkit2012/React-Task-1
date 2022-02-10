import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Dashboard-Image/dashboardRandomImage";

const Login = ({ loading, products }) => {
  const [person, setPerson] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  function ValidateEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
  }

  const validate = (person) => {
    if (person.name && person.email && person.password) {
      if (!/[^a-zA-Z]/.test(person.name)) {
        if (ValidateEmail(person.email)) {
          if (person.password.length >= 8) {
            return true;
          } else {
            alert("Password must contains atleast 8 characters");
          }
        } else {
          alert("Enter Valid Email Address");
        }
      } else {
        alert("Your name should not contains numerical values");
      }
    } else {
      alert("Form Values Must Not Be Empty");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(person)) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      };
      localStorage.setItem("logged-in-user", JSON.stringify(newPerson));
      setPerson({ name: "", email: "", password: "" });
    }
    if (localStorage.getItem("logged-in-user")) {
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
