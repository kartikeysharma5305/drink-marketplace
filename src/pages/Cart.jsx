import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  decrement,
  increaseQuantity,
} from "../store/cartSlice";

const Cart = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <>
      <section className="mt-6 flex flex-row justify-evenly">
        <div className="flex w-full flex-col gap-4 p-6">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <h1 className="font-[Playwrite_HU] text-2xl font-bold text-[#23022E]">
              My cart
            </h1>
            <a
              href="#"
              className="font-[poppins] font-bold text-[#0869D9] hover:underline"
            >
              Continue Browsing &gt;
            </a>
          </div>

          {/* Divider */}
          <hr className="mb-4 border-2 border-t border-[#23022E]" />

          {/* Cart Item */}
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="mb-4 flex items-center font-[poppins]"
              >
                <img
                  src={item.image}
                  alt="Image of a can with a cartoonish design"
                  className="mr-4 h-28 w-28"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[#23022E]">
                    {item.title}
                  </h2>
                  <div className="flex flex-row gap-3">
                    <span className="text-gray-500 line-through">
                      {" "}
                      ₹{item.realPrice}
                    </span>
                    <span className="text-xl font-bold text-[#23022E]">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-lg border border-gray-300">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="cursor-pointer px-2 py-1 text-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-gray-700">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="cursor-pointer px-2 py-1 text-gray-700"
                  >
                    +
                  </button>
                </div>
                <div className="ml-4 text-xl font-bold text-[#23022E]">
                  ₹{item.price}
                </div>
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="mr-8 ml-4 cursor-pointer text-[#23022E]"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            );
          })}

          {/* Divider */}
          <hr className="mb-4 border-2 border-t border-[#23022E]" />

          {/* Promo Code */}
          <div className="mb-4">
            <div className="mb-2 flex items-center font-[poppins] font-bold text-blue-600">
              <i className="fas fa-tag mr-2"></i>
              <span>Enter a promo code</span>
            </div>
            <div className="flex w-[25rem] font-[poppins]">
              <input
                type="text"
                placeholder="e.g., SAVE50"
                className="flex-1 rounded-l-lg border-2 border-[#23022E] p-2 font-bold focus:outline-none"
              />
              <button className="rounded-r-lg bg-[#23022E] px-4 py-2 font-bold text-white hover:bg-[#F8CE35] hover:text-[#23022E]">
                Apply
              </button>
            </div>
          </div>

          {/* Note */}
          <div>
            <div className="mb-2 flex items-center font-[poppins] font-bold text-blue-600">
              <i className="fas fa-sticky-note mr-2"></i>
              <span>Add a note</span>
            </div>
            <textarea
              placeholder="e.g., Leave outside the front door"
              className="w-[25rem] rounded-lg border-2 border-[#23022E] p-2 font-[poppins] font-bold focus:ring-2 focus:outline-none"
            ></textarea>
          </div>
        </div>

        {/* other section starts */}
        <div className="flex w-full max-w-sm flex-col gap-2 p-4">
          <h2 className="mb-4 font-[Playwrite_HU] text-xl font-bold text-[#23022E]">
            Order summary
          </h2>
          <hr className="mb-4 border-2 border-t border-[#23022E]" />
          <div className="mb-2 flex justify-between font-[poppins]">
            <span className="font-bold text-[#23022E]">Subtotal</span>
            <span className="text-[#23022E]">₹{totalAmount}</span>
          </div>
          <div className="mb-2 flex justify-between font-[poppins]">
            <span className="font-bold text-[#23022E]">Delivery</span>
            <span className="text-[#23022E]">FREE</span>
          </div>
          <div className="mb-2">
            <a
              href="#"
              className="font-[poppins] font-bold text-blue-700 underline"
            >
              Haryana, India
            </a>
          </div>
          <div className="mb-2 flex justify-between font-[poppins]">
            <span className="font-bold text-[#23022E]">
              Sales Tax <i className="fas fa-question-circle text-gray-500"></i>
            </span>
            <span className="text-[#23022E]">₹0.00</span>
          </div>
          <hr className="mb-4 border-2 border-t border-[#23022E]" />
          <div className="mb-4 flex justify-between font-[poppins]">
            <span className="text-xl font-bold text-[#23022E]">Total</span>
            <span className="text-xl font-bold text-[#23022E]">
              ₹{totalAmount}
            </span>
          </div>
          <button className="mb-4 w-full cursor-pointer rounded-lg bg-blue-600 py-2 font-[Playwrite_HU] text-lg font-bold text-white">
            Checkout
          </button>
          <div className="flex items-center justify-center text-gray-700">
            <i className="fas fa-lock mr-2"></i>
            <span className="font-[poppins] font-bold">Secure Checkout</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
