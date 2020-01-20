const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

/**  Registrando a topico Tree Way*/
// exports.registrarTopico3Way = functions.firestore
//   .document("/tokens3/{id}")
//   .onCreate(dataSnapshot => {
//     const token3 = dataSnapshot.data().token;
//     const registrationTokens3 = [token3];

//     return (
//       admin
//         .messaging()
//         .subscribeToTopic(registrationTokens3, "3_Way") // NuevosPosts es una collecion (Electric_Actuator)
//         // parece que el segundo argumento no apunta a la coleccion, sino e s solo un string
//         // El segundo parametro de este metodo es un string y es el topico (coleccion) al que se va
//         // a registrar
//         .then(() => {
//           return console.log("Adicinando correctamente al topico Three Way");
//         })
//         .catch(err => {
//           console.error(
//             `Error registrando al topico el token Three Way ${err}` // checar esta linea
//           );
//         })
//     );
//   });
/**  /Registrando a topico Tree Way*/

/**  Registrando a topico Low Pressure*/
// exports.registrarTopicoLP = functions.firestore
//   .document("/tokens2/{id}")
//   .onCreate(dataSnapshot => {
//     const token2 = dataSnapshot.data().token;
//     const registrationTokens2 = [token2];
//     console.log(`${token2} ${registrationTokens2}`);
//     return (
//       admin
//         .messaging()
//         .subscribeToTopic(registrationTokens2, "LowP_Pneumatic") // NuevosPosts es una collecion (Electric_Actuator)
//         // parece que el segundo argumento no apunta a la coleccion, sino e s solo un string
//         // El segundo parametro de este metodo es un string y es el topico (coleccion) al que se va
//         // a registrar
//         .then(() => {
//           return console.log("Adicinando correctamente al topico LP");
//         })
//         .catch(err => {
//           console.error(`Error registrando al topico el token LP ${err}`);
//         })
//     );
//   });
/**  /Registrando a topico Low pressure*/

/**  Registrando a topico High Pressure*/
// exports.registrarTopicoHP = functions.firestore
//   .document("/tokens1/{id}")
//   .onCreate(dataSnapshot => {
//     const token1 = dataSnapshot.data().token;
//     const registrationTokens1 = [token1];
//     console.log(`${token1} ${registrationTokens1}`);

//     return (
//       admin
//         .messaging()
//         .subscribeToTopic(registrationTokens1, "HP_Pneumatic") // NuevosPosts es una collecion (Electric_Actuator)
//         // parece que el segundo argumento no apunta a la coleccion, sino e s solo un string
//         // El segundo parametro de este metodo es un string y es el topico (coleccion) al que se va
//         // a registrar
//         .then(() => {
//           return console.log("Adicinando correctamente al topico HP");
//         })
//         .catch(err => {
//           console.error(`Error registrando al topico el token HP ${err}`);
//         })
//     );
//   });
/**  /Registrando a topico High pressure*/

/**  Registrando a topico Electric Actuator*/
exports.registrarTopicoEA = functions.firestore
  .document("/tokens/{id}")
  .onCreate(dataSnapshot => {
    const token = dataSnapshot.data().token;
    const registrationTokens = [token];
    console.log(`${token} ${registrationTokens}`);

    return (
      admin
        .messaging()
        .subscribeToTopic(registrationTokens, "Actuators")

        // NuevosPosts es una collecion (Electric_Actuator)
        // parece que el segundo argumento no apunta a la coleccion, sino e s solo un string
        .then(() => {
          return console.log("Adicinando correctamente al topico Electric");
        })
        .catch(err => {
          console.error(`Error registrando al topico el token Electric${err}`);
        })
    );
  });
/**  /Registrando a topico Electric Actuator*/

/** Electric Actuator cloud Function*/
exports.electActuatorNotification = functions.firestore
  .document("/Electric_Actuator/{id}")
  .onCreate(dataSnapshot => {
    const titulo = dataSnapshot.data().Company_Name;
    const descripcion = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion
      },
      topic: "Electric_Actuator"
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log("Mensaje enviado correctamente Electric");
      })
      .catch(err => {
        console.error(`Error enviando mensaje Electric ${err}`);
      });
  });

/** / Electric Actuator cloud Function*/

/** High Pressure cloud Function*/
exports.highPressureNotification = functions.firestore
  .document("/HP_Pneumatic/{id}")
  .onCreate(dataSnapshot => {
    const titulo = dataSnapshot.data().Company_Name;
    const descripcion = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion
      },
      topic: "HP_Pneumatic"
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log("Mensaje enviado correctamente HP");
      })
      .catch(err => {
        console.error(`Error enviando mensaje HP ${err}`);
      });
  });

/** / High Pressure cloud Function*/

/** Low Pressure cloud Function*/
exports.lowPressureNotification = functions.firestore
  .document("/LowP_Pneumatic/{id}")
  .onCreate(dataSnapshot => {
    const titulo = dataSnapshot.data().Company_Name;
    const descripcion = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion
      },
      topic: "LowP_Pneumatic"
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log("Mensaje enviado correctamente LP");
      })
      .catch(err => {
        console.error(`Error enviando mensaje LP ${err}`);
      });
  });

/** / Low Pressure cloud Function*/

/** Tree way cloud Function*/
exports.threeWayNotification = functions.firestore
  .document("/3_Way/{id}")
  .onCreate(dataSnapshot => {
    const titulo = dataSnapshot.data().Company_Name;
    const descripcion = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion
      },
      topic: "3_Way"
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log("Mensaje enviado correctamente 3 Way");
      })
      .catch(err => {
        console.error(`Error enviando mensaje 3 Way ${err}`);
      });
  });

/** / Tree way cloud Function*/

//const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

//admin.firestore().settings({ timestampInSnapshot: true });

// exports.firestoreEmail = functions.firestore
//   .document("Electric_Actuator/{Electric_ActuatorId}")
//   .onCreate(event => {
//     const userId = event.params.userId;
//     const db = admin.firestore();
//     return db
//       .collection("Electric_Actuator")
//       .doc(userId)
//       .get()
//       .then(doc => {
//         const user = doc.data();
//         const msg = {
//           to: user.email,
//           from: "gresseden@gmail.com",
//           subject: "New Post",
//           // custom templates
//           templateId: "d-8569f38782e94168b8cc25fa8d2302cc",
//           substitutionWrappers: ["{{", "}}"],
//           substitutions: {
//             name: user.displayName
//             // Add other customer properties here
//           }
//         };
//         return sgMail.send(msg);
//       })
//       .then(() => console.log(`Email sent`))
//       .catch(err => console.error(`Error ${err}`));
//   });

// //

// // .onCreate(dataSnapshot => {
// //   const tokens = [];
// //   tokens.push(dataSnapshot.data().token);
// //   return admin
// //     .messaging()
// //     .subscribeToTopic(tokens, "Nueo post") // el segundo argumento es el topico al que se registra
// //     .catch(err => {
// //       return console.error(err);
// //     });
// // });

// // Funcion encargada de  que cuando se registra el token en la BD
// // se dispare esta function
// // Estas se disparana a traves de varios eventos

// // disparar una function cuando se inserte un nuevo documento en firestore

// //exports.resistrarToken
// //Agarrar token y registrarlo a un topico (colections de la BD)

// // exports.registrarTokenTopico = functions.firestore
// //   .document("/tokens/{id}")
// //   .onCreate(dataSnapshot => {
// //     const tokens = [];
// //     tokens.push(dataSnapshot.data().token);
// //     return admin
// //       .messaging()
// //       .subscribeToTopic(tokens, "New post")
// //       .catch(error => {
// //         return console.error(error);
// //       });
// //   });

// // exports.registrarTokenTopico = functions.firestore
// //   .document("/Electric_Actuator/{id}")
// //   .onCreate(dataSnapshot => {
// //     const tokens = [];
// //     tokens.push(dataSnapshot.data().token);
// //     return admin
// //       .messaging()
// //       .subscribeToTopic(tokens, "New post")
// //       .catch(error => {
// //         return console.error(error);
// //       });
// //   });

// //
// // exports.notificacionElectricAct = functions.firestore
// //   .collection("/Electric_Actuator/{id}")
// //   .onUpdate((dato, context) => {
// //     const libre = dato.after.data().libre;
// //     if (libre) {
// //       const mensaje = {
// //         data: {
// //           nombreparqueadero: data.after.data().nombre
// //         },
// //         topic: "parqueaderosdisponibles"
// //       };
// //       return admin
// //         .messaging()
// //         .send(mensaje)
// //         .then(resp => console.log("Sending sucessfull"))
// //         .catch(err => {
// //           console.error(err);
// //         });
// //     }
// //     return true;
// //   });

// //
// // Esta funcion tiene que escuchar la DB cuado un se crea un nuevo documento
// //Despues tiene que mandar un mensaje background o foreground

// // exports.notificacionElectricAct = functions.firestore
// //   .collection("Electric_Actuator")
// //   .onSnapshot(snapshot => {
// //     console.log(snapshot);
// //     let test = swal({
// //       text: "test",
// //       icon: "test"
// //     });
// //     return (
// //       admin
// //         .messaging()
// //         .send(test)
// //         // .then(resp => {
// //         //   console.log(`Sending sucessfull ${resp}`);
// //         //   swal({
// //         //     text : 'ddd',
// //         //     icon: 'info'
// //         //   })
// //         // })

// //         .catch(err => {
// //           console.error(err);
// //         })
// //     );
// //   });

// // exports.listenerForElectActuator = functions.firestore
// //   .document("Electric_Actuator/{Electric_ActuatorId}")
// //   .onWrite((change, context) => {
// //     console.log("nuevo post from electric actuator");
// //     const electricId = context.params.Electric_actuatorId;
// //     const notificationContent = {
// //       notification: {
// //         title: "hello",
// //         body: "World"
// //       }
// //     };
// //     console.log(notificationContent);
// //     return admin
// //       .messaging()
// //       .sendToTopic("Electric_Actuator", notificationContent);
// //   });

// // Cloud function
// exports.newFunction = functions.firestore
//   .document("Electric_Actuator/{Electric_ActuatorId}")
//   .onWrite((change, context) => {
//     // const result = snapshot.data().email;
//     const contexto = context.params.name;
//     // console.log(result);
//     // console.log(contexto);
//     return new Promise((resolve, reject) => {
//       console.log(`Hello ${contexto}`);
//     });
//   });

// exports.testTwo = functions.firestore
//   .document("Electric_Actuator/{Electric_ActuatorId}")
//   .onCreate((snap, context) => {
//     // Get an object representing the document
//     // e.g. {'name': 'Marie', 'age': 66}
//     const newValue = snap.data();

//     const message = {
//       data: {
//         title: `hello ${newValue}`,
//         description: `world`
//       }
//     };

//     return admin
//       .messaging()
//       .send(message)
//       .then(() => {
//         return console.log("message was send");
//       })
//       .catch(err => console.error(`error ${err}`));

//     // access a particular field as you would any JS property
//     //const name = newValue.name;

//     // perform desired operations ...
//     //return `${newValue}    ${name}`;
//   });
