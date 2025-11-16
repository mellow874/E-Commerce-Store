
import React from "react";
// Import product images
import Laptop from "../assets/Laptop.png";
import Iphone14 from "../assets/Iphone14mini.png";
import Iphone11 from "../assets/Iphone11mini.png";
import Iphone11mini from "../assets/Iphone11mini-black.png";
import CTA from "../assets/CTA.png";



export default function Products() {
//Opened Array for the products in the cart summary
  const product = [
    {
      image: Laptop,
      name: "Laptop",
    },
    {
      image: Iphone14,
      name: "Iphone 14",
  
    },
    {
      image: Iphone11,
      name: "Iphone 11",
  
    },
    {
      image: Iphone11mini,
      name: "Iphone 11",

    },
    
  ];

  return (
    <section className="">
      {/*Centered the heading of the cart */}
    <h1 className="text-xl text-black font-bold mb-4 flex justify-center">
            Bag
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {product.map((product, index) => (
        <div key={index} className=" w-[300px] h-[90px] gap-4 grid grid-cols-3 mb-4 ">
          

          {/* Product image */}
          <img
            src={product.image}
            alt={product.name}
            className="bg-white mini-cart object-contain flex-wrap gap-4"
          />
        </div>
         
         
      ))}
{/* bag total */}
       <div className="flex flex-col items-center gap-4">
  {/* Bag Total */}
  <h2 className="flex flex-text-lg text-black font-medium">
    Bag Total: $5849.93
  </h2>

  {/* Centered CTA button */}
  <img src={CTA} alt="cta-image" className="w-60 h-auto" />
</div>
</div>
    </section>

  );
}