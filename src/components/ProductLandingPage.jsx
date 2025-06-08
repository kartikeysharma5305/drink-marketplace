// src/components/ProductLandingPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  increment,
} from "../store/cartSlice";

// ProductLandingPage component displays detailed info for a single product
const ProductLandingPage = () => {
  // Get product ID from URL parameters
  const { id } = useParams();
  const dispatch = useDispatch();

  // Find the product in the Redux store by ID
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(id)),
  );

  // If product is not found, show a message
  if (!product) {
    return <div>Product not found</div>;
  }

  // Calculate discounted price if discount exists
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  // Get cart items from Redux store
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      {/* Header section with product title and navigation buttons */}
      <div className="flex justify-between px-8 py-8 font-[poppins] font-semibold text-[#23022E]">
        <h1>{product.title}</h1>
        <div>
          <i className="fa-solid fa-chevron-left px-2"></i>
          <button>Previous</button> &nbsp;
          <span>|</span> &nbsp;
          <button>Next</button>
          <i className="fa-solid fa-chevron-right px-2"></i>
        </div>
      </div>

      {/* Main content section */}
      <section className="flex gap-8 p-8 text-[#23022E]">
        {/* Product image */}
        <div>
          <div className="flex h-[40rem] w-[32rem] items-center justify-center rounded-2xl bg-[#FFFFFF] p-4 hover:bg-red-600">
            <img
              className="h-auto w-[30rem] rounded-2xl"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>

        {/* Product details */}
        <div className="flex flex-col justify-center gap-8">
          {/* Product title */}
          <h1 className="font-[Playwrite_HU] text-4xl font-bold">
            {product.title}
          </h1>

          {/* Price and discount display */}
          <div className="flex flex-row items-baseline gap-3">
            {product.discount > 0 && (
              <p className="text-[1.2rem] line-through">
                ₹{product.price.toFixed(2)}
              </p>
            )}
            <p className="font-[Playwrite_HU] text-2xl font-bold">
              ₹{discountedPrice.toFixed(2)}
            </p>
          </div>

          {/* Product description */}
          <p className="font-[poppins]">{product.description}</p>

          {/* Quantity controls for each cart item */}
          <div>
            <p className="text-lg font-semibold text-[#23022E]">Quantity</p>
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mt-2 flex items-center space-x-4 rounded-full px-4 py-2"
                >
                  {/* Decrease quantity button */}
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="h-8 w-8 cursor-pointer rounded-full border border-gray-300 focus:outline-none"
                  >
                    <i className="fas fa-minus text-[#23022E]"></i>
                  </button>
                  {/* Display current quantity */}
                  <span className="text-lg font-semibold text-[#23022E]">
                    {item.quantity}
                  </span>
                  {/* Increase quantity button */}
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="h-8 w-8 cursor-pointer rounded-full border border-gray-300 text-[#23022E] focus:outline-none"
                  >
                    <i className="fas fa-plus text-[#23022E]"></i>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Add to Cart and Buy Now buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() =>
                dispatch(
                  increment({
                    id: product.id,
                    title: product.title,
                    price: discountedPrice,
                    image: product.image,
                    realPrice: product.price,
                  }),
                )
              }
              className="w-[25rem] cursor-pointer rounded-full bg-[#23022E] p-4 font-[Playwrite_HU] font-bold text-white"
            >
              Add To Cart
            </button>
            <button className="w-[25rem] cursor-pointer rounded-full bg-[#0869D9] p-4 font-[Playwrite_HU] font-bold text-white">
              Buy Now
            </button>
          </div>

          {/* Social media icons */}
          <div className="mt-2 flex flex-row gap-6">
            <i className="fab fa-whatsapp text-4xl"></i>
            <i className="fab fa-pinterest text-4xl"></i>
            <i className="fab fa-x-twitter text-4xl"></i>
            <i className="fab fa-instagram text-4xl"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLandingPage;
