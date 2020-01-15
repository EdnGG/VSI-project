// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
//const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

//const key = functions.config().sendgrid.key;
//const nodemailer = require("nodemailer");
//const express = require("express");
//const cors = require('cors') ({ origin:true })
////const cors = require("cors");

//admin.firestore().settings({ timestampInSnapshot: true });

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);
//const app = express();

exports.firestoreEmail = functions.firestore
  .document("Electric_Actuator/{Electric_ActuatorId}")
  .onCreate(event => {
    const userId = event.params.userId;
    const db = admin.firestore();
    return db
      .collection("Electric_Actuator")
      .doc(userId)
      .get()
      .then(doc => {
        const user = doc.data();
        const msg = {
          to: user.email,
          from: "gresseden@gmail.com",
          subject: "New Post",
          // custom templates
          templateId: "d-8569f38782e94168b8cc25fa8d2302cc",
          substitutionWrappers: ["{{", "}}"],
          substitutions: {
            name: user.displayName
            // Add other customer properties here
          }
        };
        return sgMail.send(msg);
      })
      .then(() => console.log(`Email sent`))
      .catch(err => console.error(`Error ${err}`));
  });

//app.use(cors({ origin: true }));

//if (process.env.NODE_ENV !== "production") {
//require("dotenv").config();
//}

// exports.notificationSubmitForm = functions.firestore
//   .document("test/{id}")
//   .onCreate((snap, context) => {
//     const email = snap.data().email;
//     const name = snap.data().name;
//     return submitNotification(email, name);
//   });

// const transport = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "gresseden@gmail.com",
//     pass: "somePassword"
//   }
// });

// exports.welcomeMail = functions.firestore
// .document("Electric_Actuator/{id}")
// .onCreate((snap, context) => {
//   const email = snap.data().email;
//   const name = snap.data().contactName;
//   return submitNotification(email, name);
// });

// Aux function

// function submitNotification(email, name) {
//   return transport
//     .sendMail({
//       from: "gresseden@gmail.com", // quien esta enviando
//       to: email,
//       subject: "Testing",
//       html: `<h1>Hello ${name} </h1>
//         <p> Thanks</p>
//         <a href="https://vsi-project.firebaseapp.com/forms2.html">Click me</a>
//         `
//     })
//     .then(result => result)
//     .catch(err => {
//       console.error(err);
//     });
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

// exports.listenerForElectActuator = functions.firestore
//   .document("Electric_Actuator/{Electric_ActuatorId}")
//   .onCreate((snap, context) => {
//     console.log("nuevo post from electric actuator");
//     const original = snap.data().original;
//     console.log(
//       "Mes from firebase functions",
//       context.params.documentId,
//       original
//     );

//     return console.log("promise from  firebase funtions");
//     // let datos = snap.data();
//     //let afterData = change.after.data();
//   });

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

// exports.listenerForElectActuator = functions.firestore
//   .document("Electric_Actuator/{Electric_ActuatorId}")
//   .onWrite((change, context) => {
//     console.log("nuevo post from electric actuator");
//     const electricId = context.params.Electric_actuatorId;
//     const notificationContent = {
//       notification: {
//         title: "hello",
//         body: "World"
//       }
//     };
//     console.log(notificationContent);
//     return admin
//       .messaging()
//       .sendToTopic("Electric_Actuator", notificationContent);
//   });

// Cloud function
exports.newFunction = functions.firestore
  .document("Electric_Actuator/{Electric_ActuatorId}")
  .onWrite((change, context) => {
    // const result = snapshot.data().email;
    const contexto = context.params.name;
    // console.log(result);
    // console.log(contexto);
    return new Promise((resolve, reject) => {
      console.log(`Hello ${contexto}`);
    });
  });

// Fucntion auxiliar
// function sweetA() {
//   const html = {
//     title: `Hello`,
//     body: "World"
//   };
//   return html;
// }

exports.testTwo = functions.firestore
  .document("Electric_Actuator/{Electric_ActuatorId}")
  .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data();

    const message = {
      data: {
        title: `hello ${newValue}`,
        description: `world`
      }
    };

    return admin
      .messaging()
      .send(message)
      .then(() => {
        return console.log("message was send");
      })
      .catch(err => console.error(`error ${err}`));

    // access a particular field as you would any JS property
    //const name = newValue.name;

    // perform desired operations ...
    //return `${newValue}    ${name}`;
  });

// exports.registrarTopico = functions.firestore
//   .document("/tokens/{id}")
//   .onCreate(notificacionController.creacionTokenController);

// exports.enviarNotificacion = functions.firestore
//   .document("posts/{idPost}")
//   .onUpdate(postsController.actualizacionPostController);
