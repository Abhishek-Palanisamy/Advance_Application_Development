import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Profile from "./pages/users/Profile";
import Register from "./pages/auth/Register";
import { useEffect, useState } from "react";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Personalized from "./pages/users/Personalized";
import PersonalizedDetails from "./pages/users/PersonalizedDetails";
import CartPage from "./pages/users/CartPage";
import Billing from "./pages/users/Billing";
import Cake from "./pages/users/Cake";
import CakeDetails from "./pages/users/CakeDetails";
import Flowers from "./pages/users/Flowers";
import FlowersDetails from "./pages/users/FlowersDetails";
import ContactUs from "./pages/users/ContactUs";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import PageError from "./pages/auth/PageError";
import UnauthorizedAccess from "./pages/auth/UnauthorizedAccess";
import AddCategory from "./pages/admin/AddCategory";
import AddProduct from "./pages/admin/AddProduct";
import Ordersadmin from "./pages/admin/AdminOrders";
import Admindashboard from "./pages/admin/Admindashboard";
import AdminUsers from "./pages/admin/AdminUsers";
function App() {
  function userRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/personalized" element={<Personalized />} />
        <Route path="/personalized/:id" element={<PersonalizedDetails />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/flowers/:id" element={<FlowersDetails />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    );
  }

  function adminRoutes() {
return(
  <Routes>
  <Route path="/ordertable" element={<Ordersadmin />} />
  <Route path="/userstable" element={<AdminUsers />} />
  <Route path="/" element={<Admindashboard />} />

  <Route path="/addcategory" element={<AddCategory addCategory={addCategory} />} />
  <Route
    path="/addproduct"
    element={<AddProduct categories={categories} addProduct={addProduct} />}
  />

  </Routes>
)

  }
  const navigate=useNavigate();
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
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const addCategory = (category) => {
    setCategories([...categories, category]); // Update the categories state
  };
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<PageError />} /> 
        <Route path="/user/*" element={userRoutes()} />
        <Route path="/admin/*" element={adminRoutes()} />

   
      </Routes>
    </>
  );
}

export default App;
