"use client";
import Header from "@/app/components/Header";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../../../ecommerce-app/sanity";

function ProductDetails({ params }) {
  const offers = [
    {
      id: "0",
      title:
        "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
      offer: "72% off",
      oldPrice: 7500,
      price: 4500,
      image:
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
      ],
      color: "Green",
      size: "Normal",
    },
    {
      id: "1",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
      ],
      color: "black",
      size: "Normal",
    },
    {
      id: "2",
      title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
      carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
      color: "black",
      size: "Normal",
    },
    {
      id: "3",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 24999,
      price: 19999,
      image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
      ],
      color: "Norway Blue",
      size: "8GB RAM, 128GB Storage",
    },
    {
      id: "10",
      title:
        "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
      offer: "72% off",
      oldPrice: 7500,
      price: 4500,
      image:
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
      ],
      color: "Green",
      size: "Normal",
    },
  ];
//   const product = offers.find((item) => item.id === params?.id);
  const [index, setIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAdded(true);
    dispatch(addToCart(item));
  };
  const {id} = params;
  const [product,setProduct] = useState(null);
  useEffect(() => {
    if(id){
        const fetchData = async() => {
            const query = groq`*[_type == "deal" && _id == $id][0]`;
            const data = await client.fetch(query,{id});
            setProduct(data)
        }

        fetchData();
    }
  },[id])
  console.log(product)
  return (
    <div>
      <Header />
      <div className="flex gap-40 m-40 mt-20">
        {/* Left part */}
        <div>
          <div>
            <img
              className="w-80 h-80 rounded-sm object-contain cursor-pointer"
              src={product?.carouselImages[index]}
            />
          </div>
          <div className="hidden lg:flex lg:mt-12 gap-10 mt-10">
            {product?.carouselImages?.map((item, index) => (
              <img
                key={index}
                className="w-20 h-20 object-contain cursor-pointer"
                src={item}
                onMouseEnter={() => setIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Part */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-lg font-semibold">{product?.title}</h1>

          <p>Color : {product?.color}</p>

          <p>Size : {product?.size}</p>

          <h4>Details :</h4>

          <p>Price : Rs{product?.price}</p>

          <div className="flex flex-col space-y-3">
            <button
              onClick={() => addItemToCart(item)}
              className="w-60 rounded-md p-2 mt-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400"
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </button>

            <button className="w-60 rounded-md p-2 mt-2 text-xs md:text-sm bg-gradient-to-b from-yellow-400 to-yellow-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
