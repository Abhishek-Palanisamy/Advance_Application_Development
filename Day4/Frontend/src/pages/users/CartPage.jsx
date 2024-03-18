import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/css/Styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeSingleIteams,
  addToCart,
  removeToCart,

} from "../../Redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

function CartPage() {
  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();

  // Fetch cart items from Redux store
  const { carts } = useSelector((state) => state.allCart);

  // add to cart
  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  // remove from cart
  const handleDecrement = (itemId) => {
    dispatch(removeToCart(itemId));
  };

  // remove single item
  const handleSingleDecrement = (item) => {
    dispatch(removeSingleIteams(item));
  };
  
  // count total price
  const total = () => {
    let totalprice = 0;
  
    carts.forEach((ele, ind) => {
      totalprice = ele.price * ele.qnty + totalprice;
    });
  
    // Round the totalprice to 2 decimal places
    totalprice = Number(totalprice.toFixed(2));
  
    setPrice(totalprice);
  };

  // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);
  const nav=useNavigate();
  const handleCheckout = () => {
    // Calculate total quantity and total bill
    const totalQuantity = carts.reduce((total, item) => total + item.qnty, 0);
    const totalBill = carts.reduce((total, item) => total + (item.qnty * item.price), 0);

    // Dispatch actions to update Redux store
    dispatch(updateTotalQuantity(totalQuantity));
    dispatch(updateTotalBill(totalBill));
    nav("/billing");
    // Navigate to checkout page or perform any other action
  };
  return (
    <>
      <Header />
      <Breadcrumbs/>
      <div className="cart-container">
        {carts.length === 0 ? (
          <div className="no-items">
            <h1>No items in cart</h1>
          </div>
        ) : (
          <>
            <h1>Your Cart</h1>
            <div className="cart-items">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "150px", height: "150px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <div className="quantity-controls">
                          <button
                            onClick={
                              item.qnty <= 1
                                ? () => handleDecrement(item.id)
                                : () => handleSingleDecrement(item)
                            }
                          >
                            -
                          </button>
                          <span>{item.qnty}</span>
                          <button onClick={() => handleIncrement(item)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>&#8377; {item.qnty * item.price}</td>
                      <td>
                        <button
                          className="button-remove"
                          onClick={() => handleDecrement(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                      </tr>
                      ))}
                      <tr className="total1">
                      <td colSpan="5">
                      <div className="total">
                        <h3>Items In Cart: {totalquantity}</h3>
                        <h3>Total Price: &#8377; {totalprice}</h3>
                      </div>
                      </td>
                      </tr>
                </tbody>
              </table>
              <div className="final-bottom">
              <button>Continue Shopping</button>
              <button onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
