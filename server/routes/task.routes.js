import {Router} from 'express'; 
import {
    getTasks,
    getTask,
    createTasks,
    updateTasks,
    deleteTasks 
} from '../controllers/task.controllers.js';    

const router= Router();


//ruta para obtener las tareas
router.get('/tasks',getTasks)


router.get('/tasks/:id',getTask)

router.post('/tasks',createTasks)

router.put('/tasks/:id',updateTasks)


router.delete('/tasks/:id',deleteTasks)


export default router;