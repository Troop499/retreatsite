document.getElementById("submit").onclick = sendPOSTreq;

async function sendPOSTreq() {
  console.log("commencing async function sendPOSTreq...");
  let response = await fetch("../api/sumbit_events.json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(await response.text());
}
