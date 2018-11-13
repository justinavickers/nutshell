const messagesAPIfunctions={
    // pulling users from the JSON database to the main js
    getMessages(){
        fetch("http://localhost:8088/messages")
        .then(users => users.json())
        .then(parsedmessages => parsedmessages)
    },
    // to post new users to the JSON database
    postmessages(){
        return fetch("http://localhost:8088/messages",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })}
}