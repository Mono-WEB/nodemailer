const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.ethereal.email',
    port: 587, // if 465 secucre: true
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
  {
    from: "From mail <avis.rosenbaum42@ethereal.email>",
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.error(err);
    console.log("Mail Good", info);
  });
};

module.exports = mailer;
