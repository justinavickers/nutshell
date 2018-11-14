import userAPIfunctions from "./fetching"
import loginUser from "./loginUser"
import hideDiv from "./classChanger";
    function registerUser(){
        let login = document.querySelector("#login")
        let password = document.querySelector("#password")
    // empty object for the login and password to populate
    let obj={
        email:"",
        password:""
    }
    obj.email = (login.value)
    obj.password = (password.value)
    userAPIfunctions.postUser(obj)
    .then((response)=>response.json()
    .then((user)=> loginUser(user))
    )
    hideDiv()
}
export default registerUser