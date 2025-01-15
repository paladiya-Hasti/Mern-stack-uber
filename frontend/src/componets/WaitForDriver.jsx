import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
          
    <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{props.setVehiclePanel(false)}}><i className="text-3xl text-gray-200 ri-arrow-down-s-line"></i></h5>
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
    </div>
  <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
  <div className='flex gap-5 justify-between items-center flex-col'>
  <img   className='h-20' src="https://avatars.mds.yandex.net/i?id=e0eabf654431946d88cc0ff43c49150700dfe815-10901265-images-thumbs&n=13" alt="" />
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
  </div>
</div>
  )
}

export default WaitingForDriver