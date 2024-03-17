import { Routes, Route } from "react-router-dom";
import Profile from "./pages/users/Profile";
import Contact from "./pages/Contact";
import Register from "./pages/auth/Register";
import { useEffect, useState } from "react";
import Login from "./pages/auth/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
import Personalized from "./pages/users/Personalized";

function App() {
  function userRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    );
  }

  function adminRoutes() {}

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const tokenexpiration = sessionStorage.getItem("tokenexpiration");
      if (Date.now() < tokenexpiration) {
        setIsLoggedIn(true);
      }
    }
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal" element={<Personalized />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/*" element={userRoutes()} />
        <Route path="/header" element={<Header/>} />
      </Routes>
    </>
  );
}

export default App;
