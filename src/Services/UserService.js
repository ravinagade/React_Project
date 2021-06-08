import http from '../HttpCommon'

const registerUser = userData =>{
    return http.post("/user/saveUser",userData)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {registerUser}