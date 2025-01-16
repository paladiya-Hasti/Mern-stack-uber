


import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      {/* Close Panel */}
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

      {/* Driver Info */}
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-xl mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU31Yw7qw46xPDsS56PEZZ4TvJcg-rBacexroO0u3DAuiPVjqExkTALBRrJRv44D2wkeo&usqp=CAU"
            alt="Driver"
          />
          <h2 className="text-lg font-medium">Ayushi Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 km</h5>
      </div>

      {/* Ride Details */}
      <div className="flex gap-5 justify-between items-center flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Pickup Address</h3>
              <p className="text-sm -mt-1 text-gray-600">
                562/11-A, Kakariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Drop-Off Address</h3>
              <p className="text-sm -mt-1 text-gray-600">
                782/22-B, New Market, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Payment Method: Cash</p>
            </div>
          </div>
        </div>

       
       <div className="flex w-full items-center justify-between">
       <button
          onClick={() => {
            props.setRidePopupPanel(false); 
          }}
          className="mt-5 bg-gray-300 text-black font-semibold p-3 px-10 rounded-lg"
        >
          Ignore
        </button>
       <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true)
    
          }}
          className="mt-5 bg-green-600 text-white font-semibold p-3  px-10 rounded-lg"
        >
          Accept
        </button>
        
        
       </div>
      </div>
    </div>
  );
};

export default RidePopUp;
