import newTaskCreation from "./Tasks/postTaskFunction"
import registerUser from "./User_login/registerUser"
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let newTasks = document.querySelector("submitTask")
newUsers.addEventListener("click", ()=> {
    registerUser()
    alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", ()=>{
    registerUser()
    alert("Welcome to our webpage")
})
newTasks.addEventListener("click", ()=> {
    newTaskCreation()
    console.log("your button works")
    alert("Your task list is now bigger!")
})
