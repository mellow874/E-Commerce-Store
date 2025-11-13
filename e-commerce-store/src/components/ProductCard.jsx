
import React from "react";
// Import product images
import watch from "../assets/Apple-watch.png";
import Headphones from "../assets/Headphones.png";
import Blackiphone11 from "../assets/Black-iphone11.png";
import Blueiphone11 from "../assets/Blue-iphone11.png";
import Rediphone11 from "../assets/Red-iphone11.png";
import Whiteiphone11 from "../assets/White-iphone11.png";
import Iphone13 from "../assets/iPhone13.png";
import Iphone14 from "../assets/iPhone14.png";
import Button from "../assets/Button.png";

export default function Products() {
  const product = [
    {
      image: watch,
      name: "Apple Watch",
      modal: "Series 5 SE",
      price: "$ 529,99",
      Bag: Button,
    },
    {
      image: Headphones,
      name: "Sony ZX330BT",
      modal: "Light Grey",
      price: "$ 39,99",
      Bag: Button,
    },
    {
      image: Blackiphone11,
      name: "Iphone 11",
      modal: "Serious Black",
      price: "$ 619,99",
      Bag: Button,
    },
    {
      image: Blueiphone11,
      name: "Iphone 11",
      modal: "Subway Blue",
      price: "$ 619,99",
      Bag: Button,
    },
    {
      image: Rediphone11,
      name: "Iphone 11",
      modal: "Product Red",
      price: "$ 619,99",
      Bag: Button,
    },
    {
      image: Whiteiphone11,
      name: "Iphone 11",
      modal: "Milky White",
      price: "$ 619,99",
      Bag: Button,
    },
    {
      image: Iphone13,
      name: "Iphone 13",
      modal: "Product Red",
      price: "$ 529,99",
      Bag: Button,
    },
    {
      image: Iphone14,
      name: "Iphone 14",
      modal: "Product Red",
      price: "$ 619,99",
      Bag: Button,
    }
  ];

  return (
    <>
      {product.map((product, index) => (
        <div key={index} className=" w-[905px] h-[397px] gap-4 cols">
          {/* Product header */}
          

          {/* Product image */}
          <img
            src={product.image}
            alt={product.name}
            className="bg-white rounded-[22px] p-4 w-[191.36px] h-[232px] object-contain"
          />

          {/* Product details */}
          <div className="flex flex-col w-[191.36px] h-[125px] p-2 gap-2">
            <h1 className=" product-name">{product.name}</h1>
            <h2 className="text-sm text-description">{product.modal}</h2>
            <p className="product-name flex items-center gap-2">
             {product.price} <img src={product.Bag}
             alt="checkout-bag" />
            </p>
          </div>
        </div>
      ))}
    </>
  );
}