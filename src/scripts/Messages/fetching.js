const messagesAPIfunctions={
    // pulling users from the JSON database to the main js
    getAllMessages(){
        fetch("http://localhost:8088/messages")
        .then(users => users.json())
        .then(parsedMessages => parsedMessages)
    },
    // to post new users to the JSON database
    postmessage(obj){
        return fetch("http://localhost:8088/messages",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })}
}
export default messagesAPIfunctions