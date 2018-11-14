import registerUser from "./User_login/registerUser";
// import sessionStorageSetup from "./User_login/session_storage";
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")

newUsers.addEventListener("click", () => {
    registerUser()
    alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", () => {
  registerUser()
    alert("Welcome to our webpage")
})
