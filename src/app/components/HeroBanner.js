"use client"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function HeroBanner() {
    const cards = [
        {
          id: "0",
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg",
          description: "Up to 70% off | Clearance store",
        },
        {
          id: "1",
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_758X608_1._SY608_CB614835787_.jpg",
          description: "Bluetooth Calling Smartwatch starts at ₹1,999",
        },
        {
          id: "2",
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/GW/2023/WK32/PC_CC_Set_750X608_AP._SY608_CB598135139_.jpg",
          description: "Amazon Pharmacy | Up to 30% off on medicines",
        },
        {
            id: "3",
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg",
            description: "Up to 70% off | Clearance store",
          },
      ];
  return (
    <div className="relative">
      <Carousel
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img12/home-improvement/HMDGATEWAYS/Aug-HMD---Hero-2_3000x1200-N-2._CB598590461_.jpg" />
        </div>
        <div>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" />
        </div>
        <div>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/MFD/Shoes/unrec/3000._CB598492396_.jpg" />
        </div>
      </Carousel>

      <div className="hidden py-10 px-10 lg:flex flex-row space-x-3 absolute mt-2 top-1/3">
          {cards?.map((item,index) => (
              <div className="p-4 bg-white w-full border shadow-md flex flex-col space-y-3" key={index}>
                  <h1 className="font-bold text-xl">{item?.description}</h1>

                  <img className="object-cover w-80 h-80" src={item?.image}/>
              </div>
          ))}
      </div>
    </div>
  );
}

export default HeroBanner;
