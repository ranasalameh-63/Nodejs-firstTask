import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  
  return (
    <div className="min-h-screen bg-pink-100 p-6 text-center">
      <h1 className="text-4xl text-pink-500 font-bold mb-6">Store Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-4 shadow-lg w-64 text-center transform transition duration-200 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-pink-500">{product.title}</h3>
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;