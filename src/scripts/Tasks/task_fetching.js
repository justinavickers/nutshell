const userAPIfunctions={
    // pulling taks from the JSON database to the main js
    getTask(){
        fetch("http://localhost:8088/tasks")
        .then(tasks => tasks.json())
        .then(parsedTasks => parsedTasks)
    },
    // to post new tasks to the JSON database
    postTask(obj){
        console.log("postrunning", obj)
        return fetch("http://localhost:8088/tasks",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })}
}
export default userAPIfunctions