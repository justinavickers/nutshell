console.log("hello")
// Save data to sessionStorage
let billy ={
    "id": 1, 
    "name": "daniel"
}
sessionStorage.setItem("currentUser", JSON.stringify(billy));
// Get saved data from sessionStorage
var data = sessionStorage.getItem("currentUser");
console.log(data)
console.log(JSON.parse(data))
