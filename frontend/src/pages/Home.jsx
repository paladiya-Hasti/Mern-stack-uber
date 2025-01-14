import React from 'react'

const Home = () => {
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  className='w-16 absolute left-5 top-5' alt="" />
      <div className='h-full w-full object-cover'>
        <img src="https://avatars.mds.yandex.net/i?id=b5402454e02e29922bd80cd4407c448e248f2d5c-4872419-images-thumbs&ref=rim&n=33&w=297&h=200" alt="" />
      </div>
      < div className='bg-white  absolute top-0'>
        <h4>Find a trip</h4>
        <form >
          <input type="text" placeholder='Add a pick up location' />
          <input type="text" placeholder='Enter your destination' />

        </form>
      </div>
    </div>
  )
}

export default Home