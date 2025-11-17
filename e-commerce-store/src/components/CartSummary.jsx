import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { selectCartItems, selectCartTotalPrice } from "../store/cartSlice";

export default function CartSummary() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckout = () => {
    // If we're on the cart page, go to checkout. Otherwise, go to cart
    if (location.pathname === "/cart") {
      navigate("/checkout");
    } else {
      navigate("/cart");
    }
  };

  return (
    <section className="">
      {/*Centered the heading of the cart */}
      <h1 className="text-xl text-black font-bold mb-4 flex justify-center">
        Bag
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white">
            {/* Product image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Bag Total */}
      <div className="mt-4 mb-4">
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium">Bag Total:</span>
          <span className="font-bold">
            $ {totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </div>

      {/*Centered CTA button */}
      <div className="flex justify-center">
        <button
          onClick={handleCheckout}
          className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-900 transition flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
          Checkout
        </button>
      </div>
    </section>
  );
}
