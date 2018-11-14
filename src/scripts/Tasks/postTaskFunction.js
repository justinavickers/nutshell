import userAPIfunctions from "./task_fetching"
import sessionStorageSetup from "../User_login/user_login"
import hideDiv from "./classChanger"
    function newTaskCreation(){
        // let user_id = sessionStorage.getItem("user_id", user_id)
        let taskUserId = sessionStorageSetup(user_id)
        let taskName = document.querySelector("#taskName")
        let taskDate = document.querySelector("#tasDate")
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
    .then((user)=> sessionStorageSetup(user)
    ))
    hideDiv()
    }
    export default newTaskCreation