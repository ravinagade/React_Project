import {useState} from "react";
import UserService from "../Services/UserService"

function Register(){

    const userObj={
        name:" ",
        email:" ",
        password:" ",
        mobileN0:" "
         }


    const [user, setUser]= useState(userObj)

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }


    const saveUser=(e)=>{
        e.preventDefault()
        console.log(user);
        UserService.registerUser(user)
        .then(response=>console.log(response.data))
    }


    return(

        <div>
            <center>
                <h2>Register</h2>

                <form onSubmit={saveUser}>

                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" onChange={onChange}></input><br></br>
                    <br></br>

                    <label htmlFor="email">Email : </label>
                    <input type="text" name="email" onChange={onChange}></input><br></br>
                    <br></br>

                    <label htmlFor="password">Password : </label>
                    <input type="text" name="password" onChange={onChange}></input><br></br>
                    <br></br>

                    <label htmlFor="mobileNo">MobileNumber : </label>
                    <input type="text" name="mobileN0" onChange={onChange}></input><br></br>
                    <br></br>

                   
                    <input type="submit" value="Register"></input>

                    <a href="/"><input type="button" value="Back"/></a>
                    
                    
                    </form>

            </center>

        </div>
    )
 }

 export default Register;
