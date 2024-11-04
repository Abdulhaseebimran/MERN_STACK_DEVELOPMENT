import React from 'react'
import Header from '../Features/Header'
import TaskListCard from '../Features/TaskListCard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
     <Header data={data} />
     <TaskListCard data={data} />
     <TaskList data={data} />
     
   </div>
  )
}

export default EmployeeDashboard
