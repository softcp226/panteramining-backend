const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "panteramining642@gmail.com",
    // pass: "desolidboy1",
    pass: "cvqydopvaddyfnfi",
    // secure:false,
  },
});

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@panteramining.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Account Registration Notification`,
    //   text:"just wanna know if this works",
    html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<div
  class="maincontainer"
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
>
  <div class="head-txt">
    <h1 style="text-align: center; font-size: 16px; color: #825ee4">
      PANTERAMINING.COM
    </h1>
    <h3 style="font-size: 15px">NEW ACCOUNT NOTIFICATION</h3>
  </div>

  <p class="sm-p">
    Dear ${userInfo.first_name} ${userInfo.last_name}, Thank you so much for
    allowing us to help you with your account opening. We are committed to
    providing our customers with the highest level of service and the most
    innovative investment and trading that are possible. We are very glad you
    chose us. We hope you will take advantage of our wide variety of investment
    and trading which are designed to meet your needs
  </p>
  <p class="sm-p">
    You have recieved $500 USD registration bonus which has been deposited to
    your account. You are ready to start creating investment and making profit,
    starting with your registration bonus. You can withdraw your registration
    bonus after completing our human verification
  </p>
  <p class="sm-p">
    For more detailed informations, please contact our customer support or the
    relationship officer that would be assigned to you shortly
  </p>

  <p class="sm-p">
    incase you have any questions do not hesitate to contact us and we will
    reach out to you as soon as possible
  </p>
  <br />
  <h1
    style="
      font-size: 18px;
      text-align: center;
      background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
      color: #fff;
    "
  >
    PANTERAMINING.COM
  </h1>
  <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
    Disclaimer: this message was automatically generated via pantera mining
    secured channel,please do not reply to this message all correspondence
    should be addressed to panteramining.com or your relationship officer
  </p>
</div>

 `,
  });
};
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
