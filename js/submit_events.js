function sendEmail() {
  Email.send({
    SecureToken : "7bc19e23-4746-4446-97fc-494cc2508714",
    To :  document.getElementById("email").value ,
    From : "troop499dev@gmail.com",
    Subject : "test - Troop 499 Retreat",
    Body : "testing testing testing123"
}).then(
  message => alert(message)
);
}
