function sendEmail() {
  Email.send({
    SecureToken : "159f6b99-b22f-44b0-a581-1f02bf901018",
    To :  'abdulhaadiansari@gmail.com',
    From : "troop499dev@gmail.com",
    Subject : "test - Troop 499 Retreat",
    Body : "testing testing testing123"
}).then(
  message => alert(message)
);
console.log(document.getElementById("email").value); // for debugging purposes
}
