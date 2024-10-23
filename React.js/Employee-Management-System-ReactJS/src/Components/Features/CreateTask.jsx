import React from 'react'

const CreateTask = () => {
  return (
    <div className="bg-black p-8 rounded-lg shadow-lg max-w-6xl mx-auto text-white mt-10 mb-6" style={{ borderColor: 'rgb(0, 255, 255)', borderWidth: '2px' }}>
    <form className="flex w-full items-start justify-between gap-6">
      {/* Left Section */}
      <div className="w-1/2 space-y-6">
        <div>
          <h3 className="text-lg font-medium">Task Title</h3>
          <input 
            type="text" 
            placeholder="Enter a Task here" 
            className="w-full mt-2 p-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">Date</h3>
          <input 
            type="date" 
            className="w-full mt-2 p-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">Assign To</h3>
          <input 
            type="text" 
            placeholder="Employee name" 
            className="w-full mt-2 p-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">Category</h3>
          <input 
            type="text" 
            placeholder="Design, Development" 
            className="w-full mt-2 p-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Right Section (Textarea and Button) */}
      <div className="w-1/2 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-lg font-medium">Description</h3>
          <textarea 
            cols="30" 
            rows="6" 
            placeholder="Describe the task here"
            className="w-full mt-2 p-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-end mt-4">
          <button 
            type="submit" 
            className="bg-blue-600 w-full text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition-colors"
          >
            Create Task
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default CreateTask
