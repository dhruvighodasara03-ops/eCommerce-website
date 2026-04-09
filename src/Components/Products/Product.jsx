import { useState } from "react";
import ProductList from "./ProductList";
import { Heart } from "lucide-react";

const Product = ({ searchTerms }) => {
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrival",
    "On Sale",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filterProducts = ProductList.filter((item) => {
    const matchesCategories =
      activeTab === "All" ||
      (activeTab === "New Arrival" && item.newArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      activeTab === item.category;

    const matchSearch = item.name
      .toLowerCase()
      .includes(searchTerms.toLowerCase());

    return matchesCategories && matchSearch;
  });

  const renderProducts = filterProducts.map((product) => {
    return (
      // Card
      <div
        key={product.id}
        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
      >
        <div className="relative">
          <button className="absolute top-2 right-2">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>

          <div>
            {(product.onSale || product.newArrival) && (
              <span
                className={`${product.onSale ? "bg-red-600" : "bg-green-600"}`}
              >
                {product.onSale ? "Sale" : "New"}
              </span>
            )}
          </div>

          {/* Product Image */}
          <img src={product.image} className="w-full h-40 object-contain" />
        </div>

        {/* Product Details */}
        <div className="mt-4 text-center">
          <h3 className="text-sm font-semibold">{product.name}</h3>

          <div className="mt-2">
            {product.onSale && (
              <span className="text-lg font-semibold text-gray-500 line-through mr-8">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <section id="product-section" className="px-6 py-10 bg-gray-50">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === category
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
              onClick={() => {
                setActiveTab(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProducts.length === 0 ? (
          <p
            className="text-center col-span-4 text-emerald-950
 font-bold
text-lg
"
          >
            No Items Found{" "}
          </p>
        ) : (
          renderProducts
        )}
      </div>
    </section>
  );
};

export default Product;
