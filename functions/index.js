const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

/**Starts email senders */

const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "gresseden@gmail.com",
    pass: "GogE8528GRESS"
  }
});

exports.sendEmailEa = functions.firestore
  .document("Electric_Actuator/{Electric_ActuatorId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `noreply@vsi-project.firebaseapp.com`,
      to: snap.data().Contact_Email,
      subject: `Hello from Valve Solutions Inc.`,
      html: `<h1>Retrofit Form Request</h1>
        <h2>Hello "${
          snap.data().Company_Name
        }" We received your Retrofit form request from this  E-mail: ${
        snap.data().Contact_Email
      }</h2><br>
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuuqfmozQ_upSLe585RrTCVMz0swhhGCQcQmFUhptiDEJpZk3w">
      <p> We'll keep in touch soon </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button><strong>Visit us!!</strong></button>
            </a>
      `
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

exports.sendEmailHp = functions.firestore
  .document("HP_Pneumatic/{HP_PneumaticId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `noreply@vsi-project.firebaseapp.com`,
      to: snap.data().Contact_Email,
      subject: `Hello from Valve Solutions Inc.`,
      html: `<h1>Retrofit Form Request</h1>
        <h2>Hello "${
          snap.data().Company_Name
        }" We received your Retrofit form request from this  E-mail: ${
        snap.data().Contact_Email
      }</h2><br>
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuuqfmozQ_upSLe585RrTCVMz0swhhGCQcQmFUhptiDEJpZk3w">
      <p> We'll keep in touch soon </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button><strong>Visit us!!</strong></button>
            </a>
      `
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

exports.sendEmailLp = functions.firestore
  .document("LowP_Pneumatic/{LowP_PneumaticId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `noreply@vsi-project.firebaseapp.com`,
      to: snap.data().Contact_Email,
      subject: `Hello from Valve Solutions Inc.`,
      html: `<h1>Retrofit Form Request</h1>
        <h2>Hello "${
          snap.data().Company_Name
        }" We received your Retrofit form request from this  E-mail: ${
        snap.data().Contact_Email
      }</h2><br>
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuuqfmozQ_upSLe585RrTCVMz0swhhGCQcQmFUhptiDEJpZk3w">
      <p> We'll keep in touch soon </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button><strong>Visit us!!</strong></button>
            </a>
      `
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

exports.sendEmail3Way = functions.firestore
  .document("3_Way/{3_WayId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `noreply@vsi-project.firebaseapp.com`,
      to: snap.data().Contact_Email,
      subject: `Hello from Valve Solutions Inc.`,
      html: `<h1>Retrofit Form Request</h1>
        <h2>Hello "${
          snap.data().Company_Name
        }" We received your Retrofit form request from this  E-mail: ${
        snap.data().Contact_Email
      }</h2><br>
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuuqfmozQ_upSLe585RrTCVMz0swhhGCQcQmFUhptiDEJpZk3w">
      <p> We'll keep in touch soon </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button><strong>Visit us!!</strong></button>
            </a>
      `
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

/**Ends email senders */

// const sgMail = require("@sendgrid/mail");

// const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;
// sgMail.setApiKey(API_KEY);

// exports.testEmail = functions.firestore
//   .document("Electric_Actuator/{Electric_ActuatorId}")
//   .onCreate(snapshot => {
//     const msg = {
//       to: snapshot.data().Contact_Email,
//       from: "test@gmail.com",
//       templateId: TEMPLATE_ID,
//       dynamic_template_data: {
//         subject: "Welcome to my app",
//         name: snapshot.data().Company_Name
//         // text: ``
//       }
//     };
//     return sgMail.send(msg);
//   });

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
        .subscribeToTopic(
          registrationTokens,
          "Electric_Actuator",
          "HP_Pneumatic",
          "LowP_Pneumatic",
          "3_way"
        )

        // NuevosPosts es una collecion (Electric_Actuator)
        // parece que el segundo argumento no apunta a la coleccion, sino es solo un string
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
// exports.electActuatorNotification = functions.firestore
//   .document("/Electric_Actuator/{id}")
//   .onCreate(dataSnapshot => {
//     const titulo = dataSnapshot.data().Company_Name;
//     const descripcion = dataSnapshot.data().Contact_Email;

//     const mensaje = {
//       data: {
//         titulo: titulo,
//         descripcion: descripcion
//       },
//       topic: "Electric_Actuator"
//     };

//     return admin
//       .messaging()
//       .send(mensaje)
//       .then(() => {
//         return console.log(
//           `Mensaje enviado correctamente Electric ${mensaje.data.titulo}`
//         );
//       })
//       .catch(err => {
//         console.error(`Error enviando mensaje Electric ${err}`);
//       });
//   });

/** / Electric Actuator cloud Function*/

/** High Pressure cloud Function*/
exports.highPressureNotification = functions.firestore
  .document("/HP_Pneumatic/{hpId}")
  .onCreate(async (dataSnapshot, context) => {
    const titulo = await dataSnapshot.data().Company_Name;
    const descripcion = await dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion
      },
      topic: context.params.hpId
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(response => {
        return console.log(
          `Mensaje enviado correctamente HP ${mensaje.data.titulo} ${response}`
        );
      })
      .catch(err => {
        return console.error(`Error enviando mensaje HP ${err}`);
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
        return console.log(
          `Mensaje enviado correctamente LP ${mensaje.data.titulo}`
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
        return console.log(
          `Mensaje enviado correctamente 3 Way ${mensaje.data.titulo}`
        );
      })
      .catch(err => {
        console.error(`Error enviando mensaje 3 Way ${err}`);
      });
  });

/** / Tree way cloud Function*/
