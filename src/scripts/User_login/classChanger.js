function hideDiv() {
  const div = document.getElementById("loginBox");
  const div2 = document.getElementById("messages");
  const div3 = document.getElementById("tasks")
  div.classList.toggle("hide") // Makes login & register disappear when pressed
  div2.classList.toggle("hide") // Makeing messenges appear after above
  div3.classList.toggle("hide")
  }

  export default hideDiv