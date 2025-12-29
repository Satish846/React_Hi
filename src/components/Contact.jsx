import React from 'react'

const Contact = () => {
  return (
    <div className='m-auto'>
      <h1 className='font-bold text-3xl mx-130'>Contact US</h1>
      <form className='flex flex-col w-1/2 mt-5 m-auto'>

        <input className='border border-gray-300 p-2 mb-4 rounded w-100' type="text"  placeholder='Enter your name' />
        <input className='border border-gray-300 p-2 mb-4 rounded w-100' type="text"  placeholder='Enter your message' />
        <button className='bg-blue-500 text-white p-2 rounded w-100' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
