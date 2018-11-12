const APIfunctions={
    getUser(){
        fetch("http://localhost:8088/users")
        .then(users => users.json())
        .then(parsedUsers => parsedUsers)
    }
}