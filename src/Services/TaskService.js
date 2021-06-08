import http from '../HttpCommon'

const addTask = taskData =>{
    return http.post("/task/saveTask",taskData)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {addTask}