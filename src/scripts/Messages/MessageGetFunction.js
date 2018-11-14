import messageAPIfunctions from "./fetching"
import displayMessage from "./messageDisplay"

let domEntry= document.querySelector(".messagesContainer")

function messageToDom(parsedMessages){
parsedMessages.forEach((message)=> {
let messageContents= displayMessage(message)
domEntry.innerHTML+= messageContents
})}

function clearMessages(){
    domEntry.innerHTML=""
}

const revealMessages = () => {
    clearMessages()
    messageAPIfunctions.getAllMessages().then(parsedMessages => messageToDom(parsedMessages))
}
export default revealMessages