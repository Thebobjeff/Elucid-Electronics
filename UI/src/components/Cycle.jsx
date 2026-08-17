import { useState } from "react";

export const Cycle = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  return (
    <div>
      <section className="flex flex-row gap-3 py-2">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-[300px] h-[300px] object-cover rounded-2xl"
        />
        <img
          src={images[(currentImage + 1) % images.length]}
          alt="Product"
          className="w-[300px] h-[300px] object-cover rounded-2xl"
        />
        <img
          src={images[(currentImage + 2) % images.length]}
          alt="Product"
          className="w-[300px] h-[300px] object-cover rounded-2xl"
        />
        <img
          src={images[(currentImage + 3) % images.length]}
          alt="Product"
          className="w-[300px] h-[300px] object-cover rounded-2xl"
        />
      </section>
      <section className="flex justify-end gap-2">
        <button
          onClick={prevImage}
          className="w-12 h-12 bg-gray-300 text-gray-500 rounded-full"
        >
          {"<"}
        </button>
        <button
          onClick={nextImage}
          className="w-12 h-12 bg-gray-300 text-gray-500 rounded-full"
        >
          {">"}
        </button>
      </section>
    </div>
  );
};
