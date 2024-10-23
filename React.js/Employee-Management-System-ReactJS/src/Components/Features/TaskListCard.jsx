import React from 'react'

const TaskListCard = () => {
  return (
    <div className='flex justify-between gap-5 mt-10 screen'>
      <div className='w-[45%] bg-red-400 py-6 px-9 rounded-md '>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-blue-400 py-6 px-9 rounded-md '>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-green-400 py-6 px-9 rounded-md '>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-yellow-400 py-6 px-9 rounded-md '>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListCard
