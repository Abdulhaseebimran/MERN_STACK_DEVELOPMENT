import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'>Abdul 👋</span> </h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded-sm font-medium hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header
