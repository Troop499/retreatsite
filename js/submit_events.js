/* function sendEmail() {
  Email.send({
    SecureToken : "63d026a7-42da-4c19-80a1-6adce1172ec6",
    To :  "abdulhaadiansari@gmail.com",
    From : "troop499dev@gmail.com",
    Subject : "test - Troop 499 Retreat",
    Body : "testing testing testing123"
}).then(
  message => alert(message)
);
console.log(document.getElementById("email").value); // for debugging purposes
} */

/* var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sbia.troop499.retreatcommittee@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: "Troop 499 Retreat Committee",
  to: '@gmail.com', // change this to a var later on
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>hi</h1>'
};

function sendEmail() {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  function sendEmail() {
    transporter.sendMail(data[, callback]);
  }
} */

function sendEmail() {

  /* var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script); */

  /* var imported = document.createElement('script');
  imported.src = 'http://code.jquery.com/jquery-3.4.1.min.js';
  document.head.appendChild(imported);

  $.getScript('./bundle.js', function() {
  var nodemailer = require('nodemailer');
}); */

  /* var nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'sbia.troop499.retreatcommittee@gmail.com',
      pass: ''
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let HelperOptions = {
    from: '"Troop 499 Retreat Committee" <sbia.troop499.retreatcommittee@gmail.com>',
    to: 'abdulhaadiansari@gmail.com',
    subject: 'hi',
    text: 'hello'
  };



  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });

   module.exports = function (n) { return n * 111 } */

/*  const nodemailer = require("nodemailer");
  const mailer =  {
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "sbia.troop499.retreatcommittee@gmail.com",
      serviceClient: "102174391030440648688",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAAZsPJ/PETp/v\n7HjSSvkrVzSSIf20pVg3j5qMjGAM2E8B5WqUGzuTpUjDT2Bq4LXPK+gF69m8t8it\nKvICi87wzz2ciEVWOHploSVzDJl+aSnEsESrn/XxKtdUIXxIaICZ5rj8SY3tuVBf\nLaJtV1h+eGBxYlBHprle6bJ/1IknqJaqOYoCQRJ2WBEOjN/uIPRaniEipGnDxT+c\nxUxMOdDMu1kZZKYJEH0/uiEJR4B1Ktr3AeW01Ma7uyGCOSmQC/BXES2UQd+R8xHv\nUacEEmFyIoePh0vMjZd3BVqd9jVRAhKMTBnJx7t6u3dgR62LNoBhoIrzasQOA/kK\ntHqXqGZ7AgMBAAECggEADGHuII+Yim/xo5TyA8nfANsKYmQ7yuMg6dBijK7e4OUw\nTzR+55dMA80UgLgFRU9Bml9AAuW/cIq/r99FpUFj8qbC1+333sQcrKI0WpOU8JCS\np4MgoprZzxhOs7fHHppStNoq0uZhd1PMqZ61S2znIZzcx2MqPzyy1rqmjtTjlYGO\njAJ429wVqhMrBtJjcrr65JRxi1sAUWEQwIpcByhqZltVF18l+VbpLZ3oe++6g8Uj\nTXDN6YXtNHaYTI8ZWJFzv4OQkEPLvL742w6WEtvdYbJrWZVzx6f1zW1/mAmMNiuG\n10fieEAOwupJTPW3Hy3VjGwDXftRevBlCyY6TlIfUQKBgQD6G1O69LOMfrcj/DYl\nwapfmcgqpQtaWyxNFgvbHsEqLgbqOpA0ra4lp45glggbTg2nooldjcKq40nr1oDk\nBK0OMp/Xnu6ZoyV/c2ojePNPaQfvjo/FXdSKlZdkxKlqV5tM0lyUm1iguYS41sYu\nm0CliiOGaiDGLdrFRt1Z0lpP0QKBgQDEh89Qn3CJ/E18BJgv8fytEY41vPOaJuLG\nRffTRSCbyqoracNukkxLJUOUfFH+Pnwj0bk60J3Ul18k0qwxk49SBIDWSV/+J5Mt\nJfVv5EjRrQyZZY5DKaiEZHR4Z9+pGi+P3FsrKncJ23fYHPaK94jIzn1smKHhomMM\nPYJsXAIQiwKBgA50veY0dpxMRrGhxk9wXjSgYt10JK/YTTs3ZwAHSwrxFh07vVIO\nJ96tTKFwio9pd4iU8HOj2fieoosrHtAPJSGI84w293uR3nz7YssiFo4kd/z0tIKn\n5b0M4G9GnrQy1BsgnZFJWVoQ3wcAAvx2pMnsrhj60WIjDF4StoCWk/nBAoGAaVgG\n10dvcndMLVLlJKYIc9h6KvHqfdGkMvVkPtnJ/dgnWPfrKsS+onUKAXiWFrr1ndmX\n+R/DyiWNeVZ3uGdJJoSFbteL3dbmvAehxOVP5xxkKYFXPUcCLl0OVVAQgjsoDWvn\nbn7nqd/7IFt+B8Vhi4mrj19NPn3lq7T4yQ6UiLsCgYB85us+fbHfWSsLqSmQOYiw\nb8W2dulz5ncixMdQ1aIeoISC77XftYva7JW6uFCsoXOxl6zi3gozPuAW7ZS0XY2q\njK+vXbHXiwiylv/lNgizxqJSzT4oWSk82CWvwfVn/FdnBUT2ybYU6ZHEsf/P4v3z\nB5fuavRRAUqIdYBI9SI0cQ==\n-----END PRIVATE KEY-----\n",
    }
  } */



}

sendEmail();
