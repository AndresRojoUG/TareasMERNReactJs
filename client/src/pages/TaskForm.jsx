import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description_task: "",
 
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description_task: task.description_task,
          done:task.done
        });
      }
    };
    loadTask();
  }, []);

  return (
    <> <h1 className="text-xl font-bold uppercase text-center textopage">
    {params.id ? "Edit Task" : "New Task"}
  </h1>
  <div className="contenedor-form">
    <div className="card tarjetaForm" style=
    {{height:"27rem",width:"25rem"}}>
    
       <div className="image-container5">
       <i class="nes-mario itsMario"></i>
      </div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            console.log('actualizando con los siguiente');
            console.log(values);
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description_task: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
       
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
           {console.log(values)}
           
            <label className="form-label"><strong>Titulo</strong></label>
            <input
              type="text"
              name="title"
              placeholder="Escribe un titulo"
              className="nes-input"
              onChange={handleChange}
              value={values.title}
              style={{marginBottom:"1rem"}}
            />

            <label className="block"><strong>Descripción</strong></label>
            <textarea
              name="description_task"
              rows="3"
              placeholder="Escribe la descripción de la tarea"
              onChange={handleChange}
              className="nes-textarea"
              value={values.description_task}
              style={{marginBottom:"1rem"}}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="nes-btn is-error"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
    </>
  );
}

export default TaskForm;