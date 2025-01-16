import React from 'react'
import { Link } from 'react-router-dom'
const FinishRide = (props) => {
  return (
    <div className='h-screen'>
   <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
                setFinish(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
    <h3 className="text-2xl font-semibold mb-5">Finish this Ride </h3>

    {/* Driver Info */}
    <div className="flex items-center justify-between p-3 border-2  bg-yellow-400 rounded-xl mt-4">
      <div className="flex items-center gap-3">
        <img
          className="h-12 rounded-full object-cover w-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wUHRDiKgRh-PeAdt7x2ooym7wS7-QeY2OA&s"
          alt="Driver"
        />
        <h2 className="text-lg font-medium">Hasti Patel</h2>
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

      
     <div className='mt-6 w-full'>
    

     <Link
        to='/captain-home'
        className="w-full mt-5 flex justify-center text-lg bg-green-600 text-white font-semibold p-2 rounded-lg"
      >
        Finish Ride
      </Link>
      <p className='mt-10 text-xs'>click on finish ride  button if you have completed the payment.</p>
     
     </div>
     
    </div>
  </div>
  )
}

export default FinishRide