import React from 'react'

const CreateTask = () => {
    return (
        <div className='max-w-5xl mx-auto mt-8 border-2 border-emerald-600 bg-gray-900 shadow-lg shadow-emerald-500/80 rounded-lg p-6'>

        <h2 className='text-2xl font-bold text-center mb-6'>Create a New Task</h2>

        <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          
          <div>
            <label className='block text-gray-100 font-medium mb-2'>Task Title</label>
            <input 
              type="text" 
              placeholder='Make a UI design' 
              className='w-full p-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-gray-100 font-medium mb-2'>Description</label>
            <textarea 
              rows='4' 
              placeholder='Describe the task...' 
              className='w-full p-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            ></textarea>
          </div>

          <div>
            <label className='block text-gray-100 font-medium mb-2'>Date</label>
            <input 
              type="date" 
              className='w-full p-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-gray-100 font-medium mb-2'>Assign To</label>
            <input 
              type="text" 
              placeholder='Employee Name' 
              className='w-full p-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-gray-100 font-medium mb-2'>Category</label>
            <input 
              type="text" 
              placeholder='Design, Dev, etc' 
              className='w-full p-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='md:col-span-2 flex justify-center'>
            <button 
              type='submit' 
              className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300'
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    )
}

export default CreateTask
