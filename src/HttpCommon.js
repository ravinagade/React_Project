import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:8080/p1",
    headers:{
        "Content-type":"application/json"
    }
})