const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "gresseden@gmail.com",
    password: "GogE8528GRESS"
  }
});

exports.notificationSubmitForm = functions.firestore
  .document("test/{id}")
  .onCreate((snap, context) => {
    const email = snap.data().email;
    const name = snap.data().name;
    return submitNotification(email, name);
  });

// Aux function

function submitNotification(email, name) {
  return transport
    .sendMail({
      from: "Eden <example@gmail.com>", // quien esta enviando
      to: email,
      subject: "Testing",
      html: `<h1>${name} </h1>
        <p> Thanks</p>
        <a href="https://vsi-project.firebaseapp.com/forms2.html">Click me</a>
        `
    })
    .then(result => result)
    .catch(err => err);
}
