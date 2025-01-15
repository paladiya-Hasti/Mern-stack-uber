import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import RidePopUp from "../componets/RidePopUp";
import Captaindetail from "../componets/Captaindetail";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ComfireRidingPopup from "../componets/comfireRidingPopup";


const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(true)
  const ridePopuppanelRef = useRef(null);
  const confirmRidePoupPanelRef= useRef(null)
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopuppanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopuppanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePoupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePoupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );
  return (
    <div className="h-screen">
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
      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <Captaindetail />
      </div>
      <div
        ref={ridePopuppanelRef}
        className="fixed w-full z-10 mt-4   bottom-0  
        bg-white px-3 py-10 pt-12"
      >
        <RidePopUp setRidePopupPanel={setRidePopupPanel} />
      </div>
      <div
        className="fixed w-full z-10 mt-4   bottom-0  
        bg-white px-3 py-10 pt-12"
      >
       <ComfireRidingPopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}  />
      </div>
    </div>
  );
};

export default CaptainHome;
