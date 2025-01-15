import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>     
        
        <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{props.setVehiclePanel(false)}}><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div onClick={()=>props.setConformRidePanel(true)} className="flex border-2 active:border-black  rounded-xl w-full p-3 mb-2 items-center justify-between">
             <img className="h-12" src="https://avatars.mds.yandex.net/i?id=e0eabf654431946d88cc0ff43c49150700dfe815-10901265-images-thumbs&n=13" alt="" />
            <div className="w-1/2">
            <h4 className="font-medium test-lg">UberGo<span><i className="ri-user-fill"></i>4</span></h4>
             <h5 className="font-medium test-sm">5 mins away</h5>
             <p className="font-normal test-xs text-gray-600">Affordable, compact rides</p>
            </div>
            <h2 className="text-2xl font-semibold">$193.20</h2>
             </div>
             <div  onClick={()=>props.setConformRidePanel(true)} className="flex border-2  active:border-black   rounded-xl w-full p-3 mb-2 items-center justify-between">
            <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
           <div className="w-1/2">
           <h4 className="font-medium test-lg">Moto<span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className="font-medium test-sm">3 mins away</h5>
            <p className="font-normal test-xs text-gray-600">Affordable, compact rides</p>
           </div>
           <h2 className="text-2xl font-semibold">$65.20</h2>
          </div>

          <div  onClick={()=>props.setConformRidePanel(true)} className="flex border-2 active:border-black   rounded-xl w-full p-3 mb-2 items-center justify-between">
            <img className="h-12" src="https://avatars.mds.yandex.net/i?id=53e287ef296195889058c92f4b8e935266a683a4a90aa205-5268818-images-thumbs&n=13" alt="" />
            <div className="w-1/2">
            <h4 className="font-medium test-lg">Uberauto<span><i className="ri-user-fill"></i>3</span></h4>
             <h5 className="font-medium test-sm">3 mins away</h5>
             <p className="font-normal test-xs text-gray-600">Affordable, compact rides</p>
            </div>
            <h2 className="text-2xl font-semibold">$118.98</h2>
           </div>
</div>
  )
}

export default VehiclePanel