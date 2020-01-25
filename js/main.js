let button = document.getElementById('submit');
button.addEventListener('click', sendPOSTreq);

sendPOSTreq: async function() {
  let response = await fetch("../api/sumbit_events.js", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!(response.status = undefined)) {
    console.log("Error: " + await response.text());
  }
}
