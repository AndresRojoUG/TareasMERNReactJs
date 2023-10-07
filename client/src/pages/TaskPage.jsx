import { useEffect, useState } from 'react'

import TaskCard from '../components/TaskCard';
import {useTasks} from '../context/TaskProvider';

export default function TaskPage() {

  const{tasks,loadTasks}=useTasks()
  
  useEffect(() => {
   
    loadTasks()
  }, [])

  function renderMain(){
    if(tasks.length===0) return <h1>No hay tareas aun</h1>

    return    tasks.map(task => 
        <TaskCard  key={task.id} task={task}/>
      )
    }

  return (
    <> <h1 className='textopage nes-text'>TAREAS</h1>
       <div className='pageTasks '>
     <div className='row'>
{renderMain()}

     </div>
     

    </div>
    
    </>
 
  )
}
