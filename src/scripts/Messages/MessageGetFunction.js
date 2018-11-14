import messageAPIfunctions from "./fetching"
function messageDisplay(){
messageAPIfunctions.getMessages().then((parsedMessages)=>{
    parsedMessages.forEach(()=>{
       console.log(parsedMessages.message)
    })
})
}

export default messageDisplay