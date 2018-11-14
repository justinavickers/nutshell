import sessionStorageSetup from "../User_login/session_storage"

    // Function to post new events to the JSON database
    function newEventCreation() {
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
    .then((response) => response.json()
    .then((user) => sessionStorageSetup(user))
    )
}

export default newEventCreation