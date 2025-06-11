// src/components/ProductLandingPage.js
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  increment,
} from "../store/cartSlice";
import { useEffect } from "react";

// ProductLandingPage component displays detailed info for a single product
const ProductLandingPage = () => {
  // Get product ID from URL parameters
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the product in the Redux store by ID
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(id)),
  );

  // If product is not found, show a message
  if (!product) {
    return <div>Product not found</div>;
  }

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Calculate discounted price if discount exists
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  // Get cart items from Redux store
  const items = useSelector((state) => state.cart.items);

  // Get all products for navigation
  const products = useSelector((state) => state.product.products);
  // Find the index of the current product
  const currentIndex = products.findIndex((p) => p.id === parseInt(id));
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <>
      {/* // Header section with product title and navigation buttons */}
      <div className="flex justify-between px-8 py-8 font-[poppins] font-semibold text-[#23022E]">
        {/* Display the product title */}
        <h1>{product.title}</h1>
        <div>
          {/* Left chevron icon */}
          <i className="fa-solid fa-chevron-left px-2"></i>
          {/* Previous button: navigates to previous product if available */}
          <button
            disabled={!prevProduct}
            onClick={() => {
              if (prevProduct) navigate(`/product/${prevProduct.id}`);
            }}
            className={`mr-2 ${!prevProduct ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          >
            Previous
          </button>
          {/* Separator */}
          <span>|</span> &nbsp;
          {/* Next button: navigates to next product if available */}
          <button
            disabled={!nextProduct}
            onClick={() => {
              if (nextProduct) navigate(`/product/${nextProduct.id}`);
            }}
            className={`ml-2 ${!nextProduct ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          >
            Next
          </button>
          {/* Right chevron icon */}
          <i className="fa-solid fa-chevron-right px-2"></i>
        </div>
      </div>
      {/* // Main content section */}
      <section className="flex gap-8 p-8 text-[#23022E]">
        {/* Product image */}
        <div>
          <div className="flex h-[32rem] w-[32rem] items-center justify-center rounded-2xl bg-[#FFFFFF] p-4 hover:bg-red-600">
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

          {/* Quantity controls for this product only */}
          <div>
            <p className="text-lg font-semibold text-[#23022E]">Quantity</p>
            {items
              .filter((item) => item.id === product.id)
              .map((item) => (
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
              ))}
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
