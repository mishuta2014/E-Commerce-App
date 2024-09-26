"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const stock = 4;
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4 ">
      <h4 className="font-medium ">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex gap-3">
            <button
              className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center hover:bg-gray-300"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center hover:bg-gray-300"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="">
            <div className="text-xs">
              Only <span className="text-misha">4 items</span> left! <br />{" "}
              {"Don't"} miss it!
            </div>
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-misha text-misha py-2 px-2 hover:bg-misha hover:text-white disabled:cursor-not-allowed disabled:bg-pink-300 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Add;
