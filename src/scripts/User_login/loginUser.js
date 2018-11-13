import userAPIfunctions from "./fetching"
import hideDiv from "./classChanger";
// creating a function to send logged in users information on the rest of there page
function loginUser(){
    sessionStorage.clear()
    let email= document.querySelector("#login").value
    userAPIfunctions.getUser(email)
    .then((user)=>{
        console.log(user.password)
        let validated= validatePassword(user)
            console.log("Setting session storage", user)
           if(validated){
                sessionStorage.setItem("user_id", user.id)
            } else {
                alert("wrong password!")
            }
        })
        hideDiv()
    }

    function validatePassword(user){
        const passwordValue= document.querySelector("#password")
        console.log(user.password)
        console.log(passwordValue)
        // user.password === passwordValue.value ? true : false
        if (user.password===passwordValue.value){
            return true
        } else {
            return false
        }
    }
export default loginUser