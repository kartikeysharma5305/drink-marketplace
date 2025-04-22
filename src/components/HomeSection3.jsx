// src/components/HomeSection3.js
import React from "react";
import sectionDivider from "../assets/images/home-section-3-divider.png";
import ReusableButton from "./ReusableButton";
import footerDivider from "../assets/images/footer-divider.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeSection3 = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <section className="bg-[#F0F0F0]">
      <img src={sectionDivider} alt="Section divider" />
      <h1 className="mt-5 mb-12 text-center font-[poppins] font-bold">
        Shop by Category
      </h1>
      <div className="mb-8 flex justify-center gap-16">
        <ReusableButton
          text="Exotic"
          styles="text-white bg-[#D71919] hover:bg-[#F0F0F0] hover:text-[#D71919] hover:shadow-[#D71919] hover:border-[#D71919]"
          iconColor="white"
          buttonSize={2}
        />
        <ReusableButton
          text="Sour"
          styles="text-white bg-[#0869D9] hover:bg-[#F0F0F0] hover:text-[#0869D9] hover:shadow-[#0869D9] hover:border-[#0869D9]"
          iconColor="white"
          buttonSize={2}
        />
        <ReusableButton
          text="Sweet"
          styles="text-white bg-[#9A4C95] hover:bg-[#F0F0F0] hover:text-[#9A4C95] hover:shadow-[#9A4C95] hover:border-[#9A4C95]"
          iconColor="white"
          buttonSize={2}
        />
      </div>

      <div className="p-6">
        <h1 className="mb-8 text-center font-[poppins] font-bold">
          Find Your Flavor
        </h1>
        <p className="text-center font-[Playwrite_HU] text-4xl font-bold">
          Shop @Zigh Something Great in Every Sip
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {products.slice(0, 4).map((product) => {
          const discountedPrice = product.discount
            ? product.price * (1 - product.discount / 100)
            : product.price;

          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center p-6"
            >
              <Link to={`/product/${product.id}`}>
                <div className="h-[20rem] w-[16rem] rounded-2xl bg-[#FFFFFF] p-4 hover:bg-red-600">
                  <p className="inline-block rounded-full bg-[#0869D9] p-2 font-[Playwrite_HU] font-bold text-white">
                    {product.discount > 0 ? "Sale" : ""}
                  </p>
                  <div className="flex justify-center">
                    <img
                      className="h-auto w-[12rem] rounded-2xl"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>

                <h1 className="mt-4 text-center font-[poppins] font-bold text-[#23022E] hover:text-blue-500">
                  {product.title}
                </h1>

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

              <button className="mt-2 cursor-pointer rounded-full bg-[#23022E] px-4 py-2 font-[Playwrite_HU] font-bold text-white hover:bg-[#0869D9]">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <img className="mt-10" src={footerDivider} alt="Footer divider" />
    </section>
  );
};

export default HomeSection3;
