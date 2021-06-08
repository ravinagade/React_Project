import { useState } from "react";
import TaskService from "../Services/TaskService"

function AddTask() {


    const taskObj = {
        taskName: " ",
        taskInfo: " ",
        date: " ",
        status: " "
    }


    const [task, setTask] = useState(taskObj)

    const onChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value })
    }


    const saveTask = (e) => {
        e.preventDefault()
        console.log(task);
        TaskService.addTask(task)
            .then(response => console.log(response.data))
    }


    return (

        <div>

            <center>

                <h2>Add Task</h2>

                <form onSubmit={saveTask}>

                Task <input type="text" name="task" onChange={onChange}></input><br></br>
                <br></br>

                    TaskInfo <input type="text" name="taskInfo" onChange={onChange}></input><br></br>
                <br></br>

                    Date<input type="date" name="date" onChange={onChange}></input><br></br>
                <br></br>

                <button type="button">AddTask</button>
                    &nbsp; &nbsp;


                    <a href="/user"><input type="button" value="Back" /></a>

                    </ form>


            </center>
        </div>
    )
}

export default AddTask