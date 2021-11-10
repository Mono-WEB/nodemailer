require('dotenv').config()

const express = require("express");
var bodyParser = require("body-parser");
const mailer = require("./nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/registration.html", (req, res) => {
  res.status(200).sendFile(__dirname + "/registration.html");
});

app.post("/registration.html", (req, res) => {
  if(!req.body.email || !req.body.textarea) return res.send('Заполните все поля')
  const message = {
    to: req.body.email,
    subject: 'Subject',
    text: `Регистрация прошла успешно. Ваш email: ${req.body.email}, пароль для входа ${req.body.textarea}`
  }
  mailer(message)
  res.status(200).send('Регистрация прошла успешно')  
});

app.get('/index.html', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
  console.log("....Working");
});
