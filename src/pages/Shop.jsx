import InfiniteSlider from "../components/InfiniteSlider";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/cartSlice";
import {
  setCategory,
  setSortOption,
  setPriceRange,
} from "../store/filterSlice";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Shop page component
const Shop = () => {
  const dispatch = useDispatch();

  // Get products and filter/sort state from Redux store
  const products = useSelector((state) => state.product.products);
  const { selectedCategory, sortOption, minPrice, maxPrice } = useSelector(
    (state) => state.filter,
  );

  // Filter products based on selected category and price range
  const filteredProducts = products.filter((product) => {
    // Calculate discounted price if applicable
    const discountedPrice = product.discount
      ? product.price * (1 - product.discount / 100)
      : product.price;

    // Check if product matches selected category
    const isAll =
      selectedCategory === "all" || selectedCategory === "all products";
    const isSale = selectedCategory === "sale" && product.discount > 0;
    const isCategory = product.category === selectedCategory;

    // Check if product is within selected price range
    const isInPriceRange =
      discountedPrice >= minPrice && discountedPrice <= maxPrice;

    // Product is included if it matches category and price range
    return (isAll || isSale || isCategory) && isInPriceRange;
  });

  // Sort filtered products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "recommended":
        return 0; // No sorting, keep original order
      case "newest":
        return b.id - a.id; // Sort by newest (assuming higher id is newer)
      case "price-high-low":
        // Sort by price descending (after discount)
        const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
        return priceB - priceA;
      case "price-low-high":
        // Sort by price ascending (after discount)
        const priceA2 = a.discount ? a.price * (1 - a.discount / 100) : a.price;
        const priceB2 = b.discount ? b.price * (1 - b.discount / 100) : b.price;
        return priceA2 - priceB2;
      case "name-a-z":
        // Sort by name alphabetically (A-Z)
        return a.title.localeCompare(b.title);
      case "name-z-a":
        // Sort by name reverse alphabetically (Z-A)
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // Handle category selection from sidebar
  const handleCategoryClick = (category) => {
    dispatch(setCategory(category.toLowerCase()));
  };

  // Handle sort option change from dropdown
  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  // Handle price range slider change
  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    dispatch(setPriceRange({ minPrice: 100, maxPrice: value }));
  };

  // this is to redirect abd move the uses to the element that he clicked for
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      // Normalize hash for category matching (e.g., "all-products")
      const normalizedCategory = hash.replace(/-/g, " ").toLowerCase();
      dispatch(setCategory(normalizedCategory));
      // Scroll to the button with the corresponding id (e.g., category-sale)
      setTimeout(() => {
        const btn = document.getElementById(`category-${hash}`);
        if (btn) {
          btn.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        // Also scroll to the products section
        const productsSection = document.getElementById("products");
        if (productsSection) {
          productsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, dispatch]);

  return (
    <>
      {/* Top slider/banner */}
      <section id="products">
        <InfiniteSlider sliderText={"Shop Zigh"} />
      </section>

      {/* Page heading and description */}
      <div>
        <h1 className="mt-10 text-center font-[poppins] font-bold text-[#23022E]">
          {selectedCategory}
        </h1>
        <p className="mt-10 mb-10 text-center font-[poppins] text-[#23022E]">
          "Sparkling hemp-infused beverages offering a refreshing, earthy twist.{" "}
          <br />
          Crafted with hemp leaf extract, these drinks provide a unique, legal,
          and revitalizing experience."
        </p>
      </div>

      {/* Main container */}
      <div className="container mx-auto p-4 font-[poppins] text-[#23022E]">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar for category and filter */}
          <div className="w-full rounded-lg p-4 md:w-1/4">
            <h2 className="mb-4 text-lg font-bold">Browse by</h2>

            {/* Category selection list */}
            <ul className="mb-8">
              {["All Products", "Exotic", "Sour", "Sweet", "Pack", "Sale"].map(
                (category) => (
                  <li className="mb-2" key={category}>
                    <button
                      className={`cursor-pointer text-gray-700 hover:text-[#23022E] ${
                        selectedCategory === category.toLowerCase()
                          ? "font-bold"
                          : ""
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  </li>
                ),
              )}
            </ul>
            <h2 className="mb-4 text-lg font-bold">Filter by</h2>
            <div>
              {/* Price range slider */}
              <label className="block text-gray-700" htmlFor="price">
                Price
              </label>
              <input
                className="mt-2 w-full cursor-pointer"
                id="price"
                max="1000"
                min="100"
                name="price"
                type="range"
                value={maxPrice}
                onChange={handlePriceChange}
              />
              <div className="mt-2 flex justify-between text-gray-700">
                <span>₹{minPrice}</span>
                <span>₹{maxPrice}</span>
              </div>
            </div>
          </div>

          {/* Main content area for products */}
          <div className="w-full p-4 md:w-3/4">
            {/* Sort and product count */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-gray-700">
                {sortedProducts.length} products
              </span>
              <div className="relative">
                {/* Sort dropdown */}
                <select
                  className="cursor-pointer appearance-none rounded-md py-2 pr-8 pl-3 font-[poppins] text-[#23022E]"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="recommended">Sort by: Recommended</option>
                  <option value="newest">Newest</option>
                  <option value="price-high-low">Price (High to Low)</option>
                  <option value="price-low-high">Price (Low to High)</option>
                  <option value="name-a-z">Name (A-Z)</option>
                  <option value="name-z-a">Name (Z-A)</option>
                </select>
                {/* Dropdown icon */}
                <i className="fas fa-chevron-down pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 font-[poppins] text-[#23022E]"></i>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Render each product card */}
              {sortedProducts.map((product) => {
                const discountedPrice = product.discount
                  ? product.price * (1 - product.discount / 100)
                  : product.price;
                return (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={product.id}
                  >
                    {/* Product link and image */}
                    <Link to={`/product/${product.id}`}>
                      <div className="flex flex-col items-center justify-center p-6">
                        <div className="h-[20rem] w-[16rem] rounded-2xl bg-[#FFFFFF] p-4 hover:bg-red-600">
                          {/* Sale badge */}
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
                      </div>

                      {/* Product title */}
                      <h1 className="text-center font-[poppins] font-bold text-[#23022E] hover:text-[#0869D9]">
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
                      className="mt-2 cursor-pointer rounded-full bg-[#23022E] px-4 py-2 font-[Playwrite_HU] font-bold text-white hover:bg-[#0869D9]"
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
