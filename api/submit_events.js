// needed stuff
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Generate SMTP service account from ethereal.email
  nodemailer.createTestAccount((err, account) => {
      if (err) {
          console.error('Failed to create a testing account. ' + err.message);
          return process.exit(1);
      }

      console.log('Credentials obtained, sending message...');

      // Create a SMTP transporter object
      let transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
              user: account.user,
              pass: account.pass
          }
      });

      // Message object
      let message = {
          from: 'Sender Name <sender@example.com>',
          to: 'Recipient <recipient@example.com>',
          subject: 'Nodemailer is unicode friendly ✔',
          text: 'Hello to myself!',
          html: '<p><b>Hello</b> to myself!</p>'
      };

      transporter.sendMail(message, (err, info) => {
          if (err) {
              console.log('Error occurred. ' + err.message);

              let response = await fetch(err.message, {
			             headers: {
				                 "Authorization": `Basic ${basic}`
			                    }
		          });
		          res.status(response.status);
		          res.end(await response.text());

              return process.exit(1);
          }

          let response = await fetch(nodemailer.getTestMessageUrl(info)), {
               headers: {
                     "Authorization": `Basic ${basic}`
            }

            res.status(response.status);
            res.end(await response.text());

          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
  });

  module.exports = (req, res) => {
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies
    })
  }
}
