import React from 'react'
import Header from '../Features/Header'
import TaskListCard from '../Features/TaskListCard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
     <Header />
     <TaskListCard />
     <TaskList />
   </div>
  )
}

export default EmployeeDashboard