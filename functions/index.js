const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const app = express();
// app.use(cors({ origin: true }));

// const transport = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "gresseden@gmail.com",
//     password: "GogE8528GRESS"
//   }
// });

admin.firestore().settings({ timestampInSnapshot: true });

// exports.notificationSubmitForm = functions.firestore
//   .document("test/{id}")
//   .onCreate((snap, context) => {
//     const email = snap.data().email;
//     const name = snap.data().name;
//     return submitNotification(email, name);
//   });

// Aux function

// function submitNotification(email, name) {
//   return transport
//     .sendMail({
//       from: "Eden <example@gmail.com>", // quien esta enviando
//       to: email,
//       subject: "Testing",
//       html: `<h1>${name} </h1>
//         <p> Thanks</p>
//         <a href="https://vsi-project.firebaseapp.com/forms2.html">Click me</a>
//         `
//     })
//     .then(result => result)
//     .catch(err => err);
// }

//

// .onCreate(dataSnapshot => {
//   const tokens = [];
//   tokens.push(dataSnapshot.data().token);
//   return admin
//     .messaging()
//     .subscribeToTopic(tokens, "Nueo post") // el segundo argumento es el topico al que se registra
//     .catch(err => {
//       return console.error(err);
//     });
// });

// Funcion encargada de  que cuando se registra el token en la BD
// se dispare esta function
// Estas se disparana a traves de varios eventos

// disparar una function cuando se inserte un nuevo documento en firestore

//exports.resistrarToken
//Agarrar token y registrarlo a un topico (colections de la BD)

// exports.registrarTokenTopico = functions.firestore
//   .document("/tokens/{id}")
//   .onCreate(dataSnapshot => {
//     const tokens = [];
//     tokens.push(dataSnapshot.data().token);
//     return admin
//       .messaging()
//       .subscribeToTopic(tokens, "New post")
//       .catch(error => {
//         return console.error(error);
//       });
//   });

// exports.registrarTokenTopico = functions.firestore
//   .document("/Electric_Actuator/{id}")
//   .onCreate(dataSnapshot => {
//     const tokens = [];
//     tokens.push(dataSnapshot.data().token);
//     return admin
//       .messaging()
//       .subscribeToTopic(tokens, "New post")
//       .catch(error => {
//         return console.error(error);
//       });
//   });

//
// exports.notificacionElectricAct = functions.firestore
//   .collection("/Electric_Actuator/{id}")
//   .onUpdate((dato, context) => {
//     const libre = dato.after.data().libre;
//     if (libre) {
//       const mensaje = {
//         data: {
//           nombreparqueadero: data.after.data().nombre
//         },
//         topic: "parqueaderosdisponibles"
//       };
//       return admin
//         .messaging()
//         .send(mensaje)
//         .then(resp => console.log("Sending sucessfull"))
//         .catch(err => {
//           console.error(err);
//         });
//     }
//     return true;
//   });

//
// Esta funcion tiene que escuchar la DB cuado un se crea un nuevo documento
//Despues tiene que mandar un mensaje background o foreground

// exports.notificacionElectricAct = functions.firestore
//   .collection("Electric_Actuator")
//   .onSnapshot(snapshot => {
//     console.log(snapshot);
//     let test = swal({
//       text: "test",
//       icon: "test"
//     });
//     return (
//       admin
//         .messaging()
//         .send(test)
//         // .then(resp => {
//         //   console.log(`Sending sucessfull ${resp}`);
//         //   swal({
//         //     text : 'ddd',
//         //     icon: 'info'
//         //   })
//         // })

//         .catch(err => {
//           console.error(err);
//         })
//     );
//   });

exports.listenerForElectActuator = functions.firestore
  .document("/Electric_Actuator/{id}")
  .onWrite((change, contex) => {
    console.log("nuevo post from electric actuator");
    let afterData = change.after.data();
    console.log(afterData);
  });

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
// exports.listenerForElectActuator = functions.firestore
//   .document("/Electric_Actuator/{id}")
//   .onWrite((change, context) => {
//     // Grab the current value of what was written to the Realtime Database.
//     //const original = snapshot.val();
//     console.log("Testing cloud functions", context.params.pushId, original);
//     // const uppercase = original.toUpperCase();
//     // You must return a Promise when performing asynchronous tasks inside a Functions such as
//     // writing to the Firebase Realtime Database.
//     // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
//     // return snapshot.ref.parent.child("uppercase").set(uppercase);
//   });
