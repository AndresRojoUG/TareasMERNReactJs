import { pool } from '../db.js';

///OBTENER TAREAS
export const getTasks = async (req, res) => {
    try {

        const [result] = await pool.query('SELECT * FROM tasks ORDER BY createAt DESC')
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//OBETENER UNA SOLA TAREA
export const getTask = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM tasks WHERE id=${req.params.id}`)

        if (result.length == 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' })
        }
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


/////CREAR UNA TAREA 
export const createTasks = async (req, res) => {
    try {
        const { title, description_task } = req.body
        const [result] = await pool.query('INSERT INTO tasks(title,description_task) VALUES (?,?)', [
            title,
            description_task
        ])
     
        console.log(result);
        res.json({
            id: result.insertId,
            title,
            description_task
        })
    } catch (error) {
      
        return res.status(500).json({ message: error.message })
    }
}

///ACTUALIZAR UNA TAREA
export const updateTasks = async (req, res) => {
    console.log('-----------------cuerpo');
    console.log(req.body);
    try {
        const result = await pool.query('UPDATE tasks SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ])
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const deleteTasks = async (req, res) => {
    try {
        const [result] = await pool.query(`DELETE FROM tasks WHERE id=${req.params.id}`)

        if (result.affectedRows === 0) return res.status(404).json({ message: 'Tarea no encontrada' })
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}