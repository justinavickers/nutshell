function hideDiv() {
  const login = document.getElementById("loginBox");
  const messages = document.getElementById("messages");
  const tasks = document.getElementById("taskBox");
  const events = document.getElementById("eventBox");
  const articles = document.getElementById("articleBox");
  login.classList.toggle("hide") // Makes login & register disappear when pressed2
  messages.classList.toggle("hide") // Making messenges appear after above
  tasks.classList.toggle("hide")
  events.classList.toggle("hide")
  articles.classList.toggle("hide")
  }

  export default hideDiv