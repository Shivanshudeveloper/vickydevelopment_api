const sgMail = require("@sendgrid/mail");
const API_KEY = require("../../config/keys").SendGripAPIKey;
sgMail.setApiKey(API_KEY);

module.exports.send = async (req, res) => {
  try {
    const meetDetails = req.body;
    const message = {
      // to: "manav.nanwani@gmail.com",
      to: meetDetails.email,
      // from: { name: "GO Vicky", email: "no-reply@govickey.com" },
      from: "no-reply@govickey.com",
      subject: meetDetails.title,
      text: `We have scheduled a meeting for you!!\nPlease join the link given below at ${meetDetails.date} at ${meetDetails.time}.\n\nMeeting Link : ${meetDetails.attendeeURL}`,
      html: `<h1>We have scheduled a meeting for you!!</h1>
        <h3>Please join the link given below at ${meetDetails.date} at ${meetDetails.time}.</h3>
        <br /><br />
        <h4>Meeting Link : ${meetDetails.attendeeURL}</h4>`,
    };
    sgMail
      .send(message)
      .then((response) => console.log("Email Sent", response))
      .catch((err) => console.log(err));
    res.status(200).send({ message: "Mail Sent" });
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};


module.exports.approvalrequest = async (req, res) => {
  const { email } = req.body;
  try {
    const message = {
      // to: "manav.nanwani@gmail.com",
      to: 's.safyi@govickey.com',
      from: { name: "GO Vicky", email: "no-reply@govickey.com" },
      // from: "no-reply@govickey.com",
      subject: 'Approval Request',
      text: `Their is a website approval request for ${email}`,
    };
    sgMail
      .send(message)
      .then((response) => console.log("Email Sent"))
      .catch((err) => console.log(err));
    res.status(200).send({ message: "Mail Sent" });
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};
