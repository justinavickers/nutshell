import userAPIfunctions from "./task_fetching"
import sessionStorageSetup from "../User_login/user_login"
    function newTaskCreation(){
        let taskName = document.querySelector("#taskName")
        let taskDate = document.querySelector("#tasDate")
        let taskCompleted = document.querySelector("#taskCompleted")

    let obj={
        taskName: "",
        taskDate: "",
        taskCompleted: ""
    }
    obj.taskName = (taskName.value)
    obj.taskDate = (taskDate.value)
    obj.taskCompleted = (taskCompleted.value)
    userAPIfunctions.postTask(obj)
    .then((response) =>response.json()
    .then((user)=> sessionStorageSetup(user)
    ))
    console.log("it worked!")
    }
    export default newTaskCreation