/*script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script); */

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
