import messageAPIfunctions from "./fetching"

function messageCreation(){
    let message = document.querySelector("#messageBar")

// empty object for the login and password to populate
let obj={
    message:"",
    userId:""
}
obj.message = (message.value)
obj.userId= sessionStorage.getItem("user_id")
messageAPIfunctions.postmessage(obj)

}

export default messageCreation