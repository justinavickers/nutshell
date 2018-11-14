const userAPIfunctions={
    // pulling users from the JSON database to the main js
    getUsers(){
        return fetch("http://localhost:8088/users")
        .then(users => users.json())
        .then(parsedUsers => parsedUsers)
    },
    getUser(email){
        return fetch(`http://localhost:8088/users?email=${email}`)
        .then(user => user.json())
        .then(parsedUser => parsedUser[0])
    },
    // to post new users to the JSON database
    postUser(obj){
        console.log("postrunning", obj)
        return fetch("http://localhost:8088/users",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })}
}

export default userAPIfunctions