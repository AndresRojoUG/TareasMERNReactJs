
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskProvider';
export default function TaskCard({ task }) {
    const { deleteTask, toggleTaskDone } = useTasks()
    const navigate = useNavigate()
    const handleDone = async () => {
        await toggleTaskDone(task.id)
    }

    const fechaCreacion = new Date(task.createAt);

    // Formatear la fecha en un formato más legible
    const opcionesDeFormato = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaLegible = fechaCreacion.toLocaleDateString('es-ES', opcionesDeFormato);
    

    return (

<div className=" col  pageTasks">
        <div className="card" style={{width: "18rem" ,}}>
            <div className="card-header">
                <strong>TAREA</strong>  
                <button className='btn' onClick={() => {
                    deleteTask(task.id)
                }} >❌</button>
            </div>
            <div className="card-body cuerpoTarjeta"  >
                <h5 className="card-title"> <span>{task.done == 1 ? " ✔️" : " ❌"}</span> {task.title}</h5>
                <p className="card-text">{task.description_task}</p>

               
                <span><strong> Fecha de creación {fechaLegible}</strong> </span>
               <div className='botonesCard'>
                
               <button className='nes-btn is-error' onClick={() => {
                    navigate(`/edit/${task.id}`)
                }}>Actualizar</button>

                <button className="nes-btn is-error"onClick={() => { handleDone(task.done) }}>Toggle task</button>
               </div>
            </div>
        </div>
        </div>
    )
}
