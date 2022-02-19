import React from "react";
import { useFetch } from "./CustomHook/useFetch";
import Login from "./Components/Login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Components/ErrorPage/error";
import ProtectedRoute from "./Protected-Routes/protectedRoute";
import Dashboard from "./Components/Dashboard/dashboard";
const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`;
const App = () => {
  const { loading, products } = useFetch(url);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login loading={loading} products={products} />}
          />
          <Route
            element={<ProtectedRoute loading={loading} products={products} />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
