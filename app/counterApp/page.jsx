"use client"
import React, { useState } from 'react'

const counterApp = () => {
    const [count , setCount]  = useState(0);
if (count < 0) {
  setCount(0);
}
  return (
    <div className='flex justify-center items-center  h-screen p'>
    <div className=' font-roboto border-2 border-gray-600 p-10 rounded-lg' >
          <h1 className="text-3xl font-bold text-center ">Counter App</h1>
        <p className="text-center text-2xl mt-5 font-bold">{count}</p>
        <div className="gap-4 mt-5 flex ">
          <button onClick={() => setCount(count + 1)} className='cursor-pointer border border-gray-300 p-2 rounded  bg-gray-100'>increment</button>
        <button onClick={() => setCount(count -1)} className='cursor-pointer border border-gray-300 p-2 rounded bg-gray-100'>Degrement</button>
        <button onClick={() => setCount(0)} className='cursor-pointer border border-gray-300 p-2 rounded bg-gray-100'>Reset</button>
        </div>  
    </div>
    </div>
  )
}

export default counterApp