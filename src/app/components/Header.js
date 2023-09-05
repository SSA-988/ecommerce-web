"use client";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
   
  return (
    <header className="bg-white py-4 drop-shadow-md">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        {/* left Part */}
        <div>
          <span className="text-xl cursor-pointer font-bold ml-2">
            Ecommerce{" "}
            <span className="text-blue-500 font-bold">MarketPlace</span>
          </span>
        </div>

        {/* Middle Part*/}
        <div className="hidden sm:flex flex-row space-x-4">
          <p>Offers</p>

          <p>Products</p>

          <p>Deals</p>
        </div>

        {/* Right Part */}
        <div className="flex space-x-4 items-center">
          <button className="hidden md:inline-block text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-50">
            Your Cart
          </button>

          <Link href="/cart">
            <ShoppingCartIcon class="h-6 w-6 text-gray-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
