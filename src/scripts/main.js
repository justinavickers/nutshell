import newUserCreation from "./User_login/registerUser";
import loginUser from "./User_login/loginUser"
import displayMessages from"./Messages/MessageGetFunction"
import messageDisplay from "./Messages/MessageGetFunction";
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")

newUsers.addEventListener("click", ()=> {
    newUserCreation()
    alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", ()=>{
    loginUser()
    alert("Welcome to our webpage")
})
messageDisplay()

