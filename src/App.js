import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
 
 
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route
          exact
          path="/"
          element={ <Home user={'0xNishchit'} /> }
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        /> 

      </Routes>
    </div>
  );
}

export default App;