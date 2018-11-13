import eventAPIfunctions from "./fetching"
import sessionStorageSetup from "./user_login"
import hideDiv from "./classChanger"

    // function to post new users to the json database
    function newEventCreation(){
        let name = document.querySelector("#eventName")
        let location = document.querySelector("#eventLocation")
        let date = date.querySelector("#eventDate")

    // Empty object for the Event info to populate
    let event = {
        name: "",
        location: "",
        date: ""
    }

    event.name = (name.value)
    event.location = (location.value)
    event.date = (date.value)

    userAPIfunctions.postUser(obj)
    .then((response)=>response.json()
    .then((user)=> sessionStorageSetup(user))
    )
}

export default newEventCreation