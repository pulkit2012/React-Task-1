import React from "react";
import { useFetch } from "./CustomHook/useFetch";
import Login from "./Components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Components/error";
import ProtectedRoute from "./Components/protectedRoute";
import Dashboard from "./Components/dashboard";
const url =
  "https://api.spoonacular.com/recipes/random?apiKey=f901b8871ffc4194845cf8e20a40b7b0";

const isAuth = localStorage.getItem("logged-in-user") === null ? false : true;

const App = () => {
  const { loading, products } = useFetch(url);

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/check" element={<Check />} /> */}
          <Route
            path="/"
            element={<Login loading={loading} products={products} />}
          />
          <Route
            element={
              <ProtectedRoute
                isAuth={isAuth}
                loading={loading}
                products={products}
              />
            }
          >
            {console.log("Hiiii")}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
