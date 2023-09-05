import React from "react";
import Header from "../components/Header";

function Success() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mt-20 mx-auto flex flex-row items-center space-x-10">
        <img
          className="object-contain"
          src="https://img.freepik.com/free-vector/tiny-man-ordering-products-online-via-smartphone_74855-15542.jpg?size=626&ext=jpg&ga=GA1.2.2068163573.1692966248&semt=ais"
        />
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-bold">Order Placed Successfully</h2>
        </div>
      </div>
    </div>
  );
}

export default Success;
