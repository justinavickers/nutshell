import userAPIfunctions from "./fetching"
import sessionStorageSetup from "./session_storage"
    // function to post new users to the json database
const registration={
//need to write a function to check if an email already exists
// get email
//need to fetch all emails registered
//loop through emails to verify user
emailVerification(){
    let email = document.querySelector(".login")
userAPIfunctions.getUser()
.then( (users) => {
    console.log(users)
    if (users.email === email.value) {
        alert("Sorry, that doesn't work.")
    }
    else {
        newUserCreation()
    }
})

    function newUserCreation(){
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
    .then((user)=> sessionStorageSetup(user))
    )

}}
}
export default registration