import newUserCreation from "./User_login/postUserFunction"
import userLogin from "./User_login/user_start_session"
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
newUsers.addEventListener("click", ()=> newUserCreation())
existingUserButton.addEventListener("click", ()=>{ userLogin.getLogin()
})