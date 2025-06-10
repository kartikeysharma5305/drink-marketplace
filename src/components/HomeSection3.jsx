// src/components/HomeSection3.js
import sectionDivider from "../assets/images/home-section-3-divider.png";
import ReusableButton from "./ReusableButton";
import footerDivider from "../assets/images/footer-divider.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// HomeSection3 component displays a section with category buttons and featured products
const HomeSection3 = () => {
  // Get the list of products from Redux store
  const products = useSelector((state) => state.product.products);

  return (
    <section className="bg-[#F0F0F0]">
      {/* Section divider image at the top */}
      <img src={sectionDivider} alt="Section divider" />

      {/* Section title */}
      <h1 className="mt-5 mb-12 text-center font-[poppins] font-bold text-[#23022E]">
        Shop by Category
      </h1>

      {/* Category buttons */}
      <div className="mb-8 flex justify-center gap-16">
        <Link to={"/shop#exotic"}>
          <ReusableButton
            text="Exotic"
            styles="text-white bg-[#D71919] hover:bg-[#F0F0F0] hover:text-[#D71919] hover:shadow-[#D71919] hover:border-[#D71919]"
            iconColor="white"
            buttonSize={2}
          />
        </Link>

        <Link to={"/shope#sour"}>
          <ReusableButton
            text="Sour"
            styles="text-white bg-[#0869D9] hover:bg-[#F0F0F0] hover:text-[#0869D9] hover:shadow-[#0869D9] hover:border-[#0869D9]"
            iconColor="white"
            buttonSize={2}
          />
        </Link>

        <Link to={"/shop#sweet"}>
          <ReusableButton
            text="Sweet"
            styles="text-white bg-[#9A4C95] hover:bg-[#F0F0F0] hover:text-[#9A4C95] hover:shadow-[#9A4C95] hover:border-[#9A4C95]"
            iconColor="white"
            buttonSize={2}
          />
        </Link>
      </div>

      {/* Promotional text */}
      <div className="p-6">
        <h1 className="mb-8 text-center font-[poppins] font-bold text-[#23022E]">
          Find Your Flavor
        </h1>
        <p className="text-center font-[Playwrite_HU] text-4xl font-bold text-[#23022E]">
          Shop @Zigh Something Great in Every Sip
        </p>
      </div>

      {/* Featured products grid */}
      <div className="flex flex-row flex-wrap justify-center">
        {/* Display first 4 products */}
        {products.slice(0, 4).map((product) => {
          // Calculate discounted price if applicable
          const discountedPrice = product.discount
            ? product.price * (1 - product.discount / 100)
            : product.price;

          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center p-6"
            >
              {/* Product card with link to product detail page */}
              <Link to={`/product/${product.id}`}>
                <div className="h-[20rem] w-[16rem] rounded-2xl bg-[#FFFFFF] p-4 hover:bg-red-600">
                  {/* Show "Sale" badge if product has discount */}
                  <p className="inline-block rounded-full bg-[#0869D9] p-2 font-[Playwrite_HU] font-bold text-white">
                    {product.discount > 0 ? "Sale" : ""}
                  </p>
                  {/* Product image */}
                  <div className="flex justify-center">
                    <img
                      className="h-auto w-[12rem] rounded-2xl"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>

                {/* Product title */}
                <h1 className="mt-4 text-center font-[poppins] font-bold text-[#23022E] hover:text-blue-500">
                  {product.title}
                </h1>

                {/* Product price and discount */}
                <div className="space-x-2 text-center">
                  {product.discount > 0 && (
                    <span className="text-gray-500 line-through">
                      ₹{product.price.toFixed(2)}
                    </span>
                  )}
                  <span className="text-blue-600">
                    ₹{discountedPrice.toFixed(2)}
                  </span>
                </div>
              </Link>

              {/* Add to Cart button */}
              <button className="mt-2 cursor-pointer rounded-full bg-[#23022E] px-4 py-2 font-[Playwrite_HU] font-bold text-white hover:bg-[#0869D9]">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer divider image */}
      <img className="mt-10" src={footerDivider} alt="Footer divider" />
    </section>
  );
};

export default HomeSection3;
