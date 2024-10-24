import React from "react";
import image_1 from "../Assets/maxresdefault.jpg";

const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center md:h-[80vh] lg:h-[90vh] "
      style={{ backgroundImage: `url('${image_1}')` }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <h2 className="text-white text-5xl font-bold md:text-6xl lg:text-5xl text-center m-4">
          Welcome To the Giglit-Baltistan
        </h2>
        <h2 className="text-white text-5xl font-bold md:text-6xl lg:text-5xl text-center">
          Online Furiture House
        </h2>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg md:py-5 md:px-10 lg:py-6 lg:px-12 mr-4"
            type="button"
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </button>

          <button
            className="bg-transparent text-white font-bold py-4 px-8 rounded-lg border-2 border-white hover:border-blue-500 md:py-5 md:px-10 lg:py-6 lg:px-12"
            type="button"
            onClick={() =>
              document
                .getElementById("work&workers")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
