import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex item-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-home-9-line"></i>
      </Link>
      <div className="h-1/2 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
      <div className='flex items-center justify-between'>
    <img
          className="h-12"
          src="https://avatars.mds.yandex.net/i?id=e0eabf654431946d88cc0ff43c49150700dfe815-10901265-images-thumbs&n=13"
          alt=""
        />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>hasti</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MPO4 AB1234</h4>
          <p className='text-sm text-gray-600'>Maruti suzuki Alto</p>
          
        </div>
    </div>.
    <div className='w-full mt-5'>
  <div className='flex items-center gap-5 p-3 border-b-2'>
                  <i className="ri-map-pin-user-fill"></i>
                  <div>
                      <h3 className='text-lg font-medium'>562/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Kakariya talab, bhopal</p>
                  </div>
              </div>
              <div className='flex items-center gap-5 p-3 border-b-2'>
                  <i className="text-lg ri-map-pin-2-fill"></i>
                  <div>
                      <h3 className='text-lg font-medium'>562/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Kakariya talab, bhopal</p>
                  </div>
              </div>
              <div className='flex items-center gap-5 p-3'>
                  <i className="ri-currency-line"></i>
                  <div>
                  <h3 className='text-lg font-medium'>$193.20</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                  </div>
              </div>
  </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
