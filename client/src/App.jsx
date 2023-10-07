import { Route, Routes } from 'react-router-dom'
import TaskPage from './pages/TaskPage';
import TaskForm from './pages/TaskForm'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

import {TaskContextProvider} from './context/TaskProvider';



export default function App() {
  return (

    <>
    
      <div className='container rr '>

      <div className="image-container1">
        <i className="img-nes1 nes-ash"></i>
      </div>
      <div className="image-container2">
        <i className="img-nes1 nes-bulbasaur"></i>
      </div>
      <div className="image-container3">
        <i className="img-nes1 nes-charmander"></i>
      </div>
      <div className="image-container4">
        <i className="img-nes1 nes-squirtle"></i>
      </div>

     <TaskContextProvider>
     <NavBar />
   
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm/>  } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
   
     </TaskContextProvider>
     </div>


    
   

    </>
  )
}
