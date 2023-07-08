const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASS } = process.env;

const nodemailerConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'butcherokmir4@gmail.com',
    pass: META_PASS,
  },
};
const transporter = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   from: 'butcherokmir4@gmail.com',
//   to: 'vorem37119@msback.com',
//   subject: 'Test Email',
//   text: 'This is a test email',
// };

const sendEmail = (email)=>{ transporter.sendMail(email)
  .then(() => console.log('Email sent successfully'))
  .catch(err => console.log(err.message));
}
module.exports = sendEmail;