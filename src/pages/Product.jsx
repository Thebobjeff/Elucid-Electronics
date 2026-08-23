import { useState } from "react";
import IPhone17 from "../assets/iphone17-p.avif";

export const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "IPhone 17",
    price: 799.99,
    description: "This is where product discription will appear",
    image: IPhone17,
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[80%] h-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold mt-3">
              {product.name}
            </h1>

            <p className="text-2xl font-medium mt-5">${product.price}</p>

            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              {product.description}
            </p>
            <div className="mt-8">
              <p className="font-medium mb-3">Quantity</p>

              <div className="flex items-center border border-gray-300 rounded-full w-fit">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-5 py-3 text-xl"
                >
                  −
                </button>

                <span className="px-4">{quantity}</span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-5 py-3 text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-medium transition">
                Buy Now
              </button>

              <button className="flex-1 border border-black hover:bg-black hover:text-white py-4 rounded-full font-medium transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
