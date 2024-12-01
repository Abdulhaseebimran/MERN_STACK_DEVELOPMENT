import React from 'react'
import Header from '../Features/Header'
import TaskListCard from '../Features/TaskListCard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
     <Header data={props.data} changeUser={props.changeUser}/>
     <TaskListCard data={props.data} />
     <TaskList data={props.data} />
     
   </div>
  )
}

export default EmployeeDashboard
