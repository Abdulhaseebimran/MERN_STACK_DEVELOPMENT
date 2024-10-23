import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='flex items-center justify-start gap-5 overflow-x-auto h-[50%] w-full mt-10 py-5'>
      <div className=' flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-red-300'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 px-3 py-1 text-sm rounded'>high</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h1 className='text-2xl font-bold mt-5'>Task Title</h1>
        <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?</p>
      </div>

    </div>
  )
}

export default TaskList
