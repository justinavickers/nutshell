import newUserCreation from "./User_login/postUserFunction"
import newTaskCreation from "./Tasks/postTaskFunction"
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let newTasks = document.getElementById("")
newUsers.addEventListener("click", ()=> {
    registerUser()
    alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", ()=>{
    registerUser()
    alert("Welcome to our webpage")
})
newTask.addEventListener("click", ()=> {
    newTaskCreation()
    alert("Your task list is now bigger!")
})
