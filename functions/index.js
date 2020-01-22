const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

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
        .subscribeToTopic(registrationTokens, "Electric_Actuator")

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
        return console.log(
          `Mensaje enviado correctamente Electric ${mensaje.data.titulo}`
        );
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
    const titulo2 = dataSnapshot.data().Company_Name;
    const descripcion2 = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo2,
        descripcion: descripcion2
      },
      topic: "HP_Pneumatic"
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(
          `Mensaje enviado correctamente HP ${mensaje.data.titulo2}`
        );
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
    const titulo3 = dataSnapshot.data().Company_Name;
    const descripcion3 = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo3,
        descripcion: descripcion3
      },
      topic: "LowP_Pneumatic"
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(
          `Mensaje enviado correctamente LP ${mensaje.data.titulo3}`
        );
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
    const titulo4 = dataSnapshot.data().Company_Name;
    const descripcion4 = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo4,
        descripcion: descripcion4
      },
      topic: "3_Way"
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(
          `Mensaje enviado correctamente 3 Way ${mensaje.data.titulo4}`
        );
      })
      .catch(err => {
        console.error(`Error enviando mensaje 3 Way ${err}`);
      });
  });

/** / Tree way cloud Function*/
