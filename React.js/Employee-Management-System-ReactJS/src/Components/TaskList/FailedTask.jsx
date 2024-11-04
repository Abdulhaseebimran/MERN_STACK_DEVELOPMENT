import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-red-300 flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 px-3 py-1 text-sm text-white rounded-lg">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h1 className="text-2xl font-bold mt-5">{data.title}</h1>
      <p className="mt-2 text-sm text-gray-700">{data.description}</p>
    </div>
  
    <div className="flex gap-3 mt-5 items-center">
      <button className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Failed Task
      </button>
    </div>
  </div>
  )
}

export default FailedTask
