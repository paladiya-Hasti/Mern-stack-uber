import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../componets/FinishRide";

const CaptainRiding = () => {
  const [finish,setFinish]=useState(false)
  const finishRidePanelRef=useRef(null)
  useGSAP(
    function () {
      if (finish) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finish]
  );
  return (
    <div className="h-screen relative">
      
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://e7.pngegg.com/pngimages/631/1023/png-clipart-logo-brand-product-design-font-uber-logo-text-logo.png"
          alt=""
        />
        <Link
          to="/home"
          className="fixed right-2 top-2 h-10 w-10 bg-white flex item-center justify-center rounded-full"
        >
          <i class="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 bg-yellow-400 flex items-center relative justify-between">
      <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
                setFinish(true)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h4 className="text-xl font-semibold ">4 hm away</h4>
      <button className="mt-5 bg-green-600 text-white font-semibold p-3  px-10 rounded-lg">Complete Ride</button>
      </div>
      <div
      ref={finishRidePanelRef}
        className="fixed w-full mt-4  h-screen translate-y-full  bottom-0  
        bg-white px-3 py-10 pt-12"
      >
       <FinishRide setFinish={setFinish}/>
      </div>
    </div>
  );
};

export default CaptainRiding;