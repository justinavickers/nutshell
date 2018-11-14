import newUserCreation from "./User_login/postUserFunction"
import newTaskCreation from "./Tasks/postTaskFunction"
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let newTask = document.querySelector("#taskButton")
newUsers.addEventListener("click", ()=> newUserCreation())
existingUserButton.addEventListener("click", ()=>{ userLogin.getLogin()
})
newTask.addEventListener("click", ()=> newTaskCreation())
