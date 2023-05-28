import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemsInCart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc = (acc + curr.price * curr.quantity);
    }, 0);
    setTotal(total);
  }, [cart]);

  if(cart.length===0) {
  <div>Cart is Empty</div>
  }

  const handleInc = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/ItemCart");
  };
  const hanleDec = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/ItemCart");
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/ItemCart");
  };

  return (
    <>
      <div className="Cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action">Remove all</h5>
        </div>
      </div>

      {cart.map((cart) => (
        <div className="Cart-Items">
          <div className="image-box">
            <img src={cart?.image} style={{ height: "120px" }} />
          </div>
          <div className="about">
            <h1 className="title">{cart.title}</h1>
          </div>
          <div className="counter">
            <button onClick={() => handleInc(cart?.id)} className="btn">
              +
            </button>
            <div className="count">{cart.quantity}</div>
            <button onClick={() => hanleDec(cart?.id)} className="btn">
              -
            </button>
          </div>
          <div className="prices">
            <h4>Total</h4>
            <div className="amount">${cart.price * cart.quantity}</div>

            <div onClick={() => handleRemove(cart.id)} className="remove">
              <u>Remove</u>
            </div>
          </div>
        </div>
      ))}

      <hr style={{ width: "66%", float: "right", marginRight: "5%" }} />
      <div className="checkout">
        <div className="total">
          <div>
            <div className="Subtotal">Sub-Total</div>
            <div className="items">{cart.length} items</div>
          </div>
          <div className="total-amount">${total?.toFixed(2)}</div>
        </div>
        <button className="button">Checkout</button>
      </div>
    </>
  );
};

export default ItemsInCart;
