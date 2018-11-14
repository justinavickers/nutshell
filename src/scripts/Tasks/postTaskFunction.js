import userAPIfunctions from "./task_fetching"
// import hideDiv from "./classChanger"
    function newTaskCreation(){
        // let user_id = sessionStorage.getItem("user_id", user_id)
        // let taskUserId = sessionStorageSetup(user_id)
        let taskName = document.querySelector("#taskName")
        let taskDate = document.querySelector("#taskDate")
        let taskCompleted = document.querySelector("#taskCompleted")

    let obj={
        user_id: taskUserId,
        taskName: "",
        taskDate: "",
        taskCompleted: null
    }
    obj.taskName = (taskName.value)
    obj.taskDate = (taskDate)
    obj.taskCompleted = (taskCompleted.value)
    userAPIfunctions.postTask(obj)
    .then((response) =>response.json()
    .then((task)=> sessionStorage.setItem("task", task)
    ))
    // hideDiv()
    }
    export default newTaskCreation