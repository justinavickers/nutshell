import registerUser from "./User_login/registerUser";
import messageCreation from "./Messages/messagePostFunction"
import revealMessages from "./Messages/MessageGetFunction"
// import sessionStorageSetup from "./User_login/session_storage";
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
let createMessageButton = document.querySelector("#messageButton")

newUsers.addEventListener("click", ()=> {
    registerUser()
    alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", ()=>{
    registerUser()
    alert("Welcome to our webpage")
})
console.log(createMessageButton)
createMessageButton.addEventListener("click", () => {
    messageCreation()
})

revealMessages()