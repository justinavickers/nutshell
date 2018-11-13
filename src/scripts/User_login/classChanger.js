function hideDiv() {
  const div = document.getElementById("loginBox");
  const div2 = document.getElementById("messages");
  div.classList.toggle("hide") // Makes login & register disappear when pressed
  div2.classList.toggle("hide") // Makeing messenges appear after above
  }

  export default hideDiv