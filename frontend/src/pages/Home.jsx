import React, { useState, useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../componets/LocationSearchPanel";
import VehiclePanel from "../componets/VehiclePanel";
import ComformRide from "../componets/ComformRide";
import LookingForDriver from "../componets/LookingForDriver";
import WaitingForDriver from "../componets/WaitForDriver";
import RidePopUp from "../componets/RidePopUp";

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const panelColseRef = useRef(null);
  const conformRidePanelRef=useRef(null)
  const [ waitingForDriver, setWaitingForDriver ] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [ vehicleFound, setVehicleFound ] = useState(false)
  const [conformRidePanel,setConformRidePanel]=useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
    // Add your logic here
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
      });
      gsap.to(panelColseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 20,
        opacity: 0,
      });
      gsap.to(panelColseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehiclePanel]);


  useGSAP(() => {
    if (conformRidePanel) {
      gsap.to(conformRidePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(conformRidePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [conformRidePanel]);

  useGSAP(function () {
    if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ vehicleFound ])

useGSAP(function () {
  if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ waitingForDriver ])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute left-5 top-5"
        src="https://e7.pngegg.com/pngimages/631/1023/png-clipart-logo-brand-product-design-font-uber-logo-text-logo.png"
        alt=""
      />

      <div
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="h-screen w-screen"
      >
        <img
          className="h-full w-full object-cover"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[20%] bg-white p-5 relative">
          <h5
            ref={panelColseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[70%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white py-8 h-screen">
          <LocationSearchPanel
            panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel setConformRidePanel={setConformRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div
        ref={conformRidePanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-14"
      >
       <ComformRide setVehicleFound={setVehicleFound} setConformRidePanel={setConformRidePanel}/>
      </div>

      <div ref={vehicleFoundRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-14"
      >
    <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div 
      ref={WaitingForDriver}
        className="fixed w-full z-10  bottom-0 bg-white px-3 py-6 pt-14"
      >
    <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>
      
    </div>
  );
};

export default Home;
