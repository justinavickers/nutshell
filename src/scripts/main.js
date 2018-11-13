import registration from "./User_login/postUserFunction";
import sessionStorageSetup from "./User_login/session_storage";
import displayMessages from"./Messages/MessageGetFunction"
import messageDisplay from "./Messages/MessageGetFunction";
// import sessionStorageSetup from "./User_login/session_storage";
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
newUsers.addEventListener("click", ()=> registration.newUserCreation())
existingUserButton.addEventListener("click", ()=>{ sessionStorageSetup()
})
messageDisplay()