const eventAPIfunctions = {
  // Pulling events from the JSON database to the main JS
  getEvent() {
      fetch("http://localhost:8088/events")
      .then(events => events.json())
      .then(parsedEvents => parsedEvents)
  },
  // To post new events to the JSON database
  postEvent(event) {
      console.log("postrunning", event)
      return fetch("http://localhost:8088/events", {
      method:"POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
  })}
}

  export default eventAPIfunctions