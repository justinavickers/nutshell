const articleAPIfunctions={
  // pulling users from the JSON database to the main js
  getArticles(){
      fetch("http://localhost:8088/articles")
      .then(users => users.json())
      .then(parsedmessages => parsedmessages)
  },
  // to post new users to the JSON database
  postArticles(){
      return fetch("http://localhost:8088/articles",{
      method:"POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify()
  })}
}