import userAPIfunctions from "./fetching"
// creating a function to send logged in users information on the rest of there page
function sessionStorageSetup(user){
    if(user){
        sessionStorage.setItem("user_id", user.id)
    }
}
export default sessionStorageSetup