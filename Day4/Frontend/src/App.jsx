import { Routes, Route } from "react-router-dom";
import Profile from "./pages/users/Profile";
import Register from "./pages/auth/Register";
import { useEffect, useState } from "react";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Personalized from "./pages/users/Personalized";
import PersonalizedDetails from "./pages/users/PersonalizedDetails";
import CartPage from "./pages/users/CartPage";
import Billing from "./pages/users/Billing";
import Sidebarr from "./pages/admin/adminComponents/Sidebarr";
import Cake from "./pages/users/Cake";
import CakeDetails from "./pages/users/CakeDetails";
import Flowers from "./pages/users/Flowers";
import FlowersDetails from "./pages/users/FlowersDetails";
import ContactUs from "./pages/users/ContactUs";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
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
        <Route path="/register" element={<Register />} />
        <Route path="/personalized" element={<Personalized />} />
        <Route path="/personalized/:id" element={<PersonalizedDetails />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/flowers/:id" element={<FlowersDetails />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/sidebar" element={<Sidebarr />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/user/*" element={userRoutes()} />
      </Routes>
    </>
  );
}

export default App;
