import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='flex items-center justify-start gap-5 overflow-x-auto h-[50%] w-full mt-10 py-5'>
      {/* {data.tasks.map((elem, index) => {
        if(elem.active){
          return <NewTask key={index} data={elem}/>
        }
        if (elem.completed){
          return <CompleteTask key={index} data={elem}/>
        }
        if (elem.failed){
          return <FailedTask key={index} data={elem}/>
        }
        if (elem.accepted){
          return <AcceptTask key={index} data={elem}/>
        }
      })} */}
      {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
    </div>
  )
}

export default TaskList
