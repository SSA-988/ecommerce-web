"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/CartReducer";

function Product({ item }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const addItemToCart = (item) => {
    setAdded(true);
    dispatch(addToCart(item));
  };
  return (
    <div className="relative flex border flex-col bg-white m-5 p-3">
      <p>{item?.category}</p>

      <div className="flex justify-center">
        <img className="w-32 h-32 object-contain" src={item?.image} />
      </div>

      <h4 className="text-xs text-yellow-500 mt-1">
        {item?.rating?.rate} ratings
      </h4>

      <p className="text-xs line-clamp-2 mt-1">{item?.description}</p>

      <h3 className="text-md font-semibold mt-1">₹{item?.price}</h3>

      <button
        onClick={() => addItemToCart(item)}
        className="p-2 mt-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400"
      >
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Product;
