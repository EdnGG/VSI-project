//start service worker

navigator.serviceWorker
  .register("notifications-sw.js")
  .then(register => {
    console.log("service worker register!");
    firebase.messaging().useServiceWorker(register);
  })
  .catch(err => {
    console.error(`Error trying to verify serviceworker => ${err}`);
  });

// Register web credentials
const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BEpaYJcZgxmv22Ao5Nn4iNXOvpQfOUC85II16aSY8o2dIXJAn8kruAIp259N2BYkqY3x6uIKsYwUzSux48JkhFE"
);

// Getting and creating permissions and token for notifications
messaging
  .requestPermission()
  .then(() => {
    console.log("permission allowed");
    return messaging.getToken();
  })
  .then(token => {
    console.log("Token Elect: ", token);
    const db = firebase.firestore();
    db.collection("tokens")
      .doc(token)
      .set({
        token: token
      })
      .catch(err => {
        console.error(`Error: ${err}`);
      });
  })
  .catch(err => console.error(`No se dio el permiso: ${err}`)); // checar esta linea

// / Getting permissions for notifications

// Getting and creating permissions and token for notifications hp
// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("permission allowed hp");
//     return messaging.getToken();
//   })
//   .then(token1 => {
//     console.log("Token HP: ", token1);
//     const db = firebase.firestore();
//     db.collection("tokens1")
//       .doc(token1)
//       .set({
//         token: token1
//       })
//       .catch(err => {
//         console.error(`Error: ${err}`);
//       });
//   })
//   .catch(err => console.error(`No se dio el permiso: ${err}`)); // checar esta linea

// Getting permissions for notifications hp

// Getting and creating permissions and token for notifications lp
// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("permission allowed lp");
//     return messaging.getToken();
//   })
//   .then(token2 => {
//     console.log("Token LP: ", token2);
//     const db = firebase.firestore();
//     db.collection("tokens2")
//       .doc(token2)
//       .set({
//         token2: token2
//       })
//       .catch(err => {
//         console.error(`Error: ${err}`);
//       });
//   })
//   .catch(err => console.error(`No se dio el permiso: ${err}`)); // checar esta linea

// Getting permissions for notifications lp

// Getting and creating permissions and token for notifications 3 way
// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("permission allowed 3Way");
//     return messaging.getToken();
//   })
//   .then(token3 => {
//     console.log("Token 3 Way: ", token3);
//     const db = firebase.firestore();
//     db.collection("tokens3")
//       .doc(token3)
//       .set({
//         token3: token3
//       })
//       .catch(err => {
//         console.error(`Error: ${err}`);
//       });
//   })
//   .catch(err => console.error(`No se dio el permiso: ${err}`)); // checar esta linea

// Getting permissions for notifications 3Way

// getting token when refresh window EA
messaging.onTokenRefresh(() => {
  messaging.getToken().then(token => {
    console.log("Token updated");
    const db = firebase.firestore();
    //db.settings({ timestampsInSnapshots: true });
    db.collection("tokens")
      .doc(token)
      .set({
        token: token
      })
      .catch(err => {
        console.error(`Error: ${err}`);
      });
  });
});

// / Getting token when refresh window EA

// getting token when refresh window hp
// messaging.onTokenRefresh(() => {
//   messaging.getToken().then(token1 => {
//     console.log("Token updated HP");
//     const db = firebase.firestore();
//     db.collection("tokens1")
//       .doc(token1)
//       .set({
//         token: token1
//       })
//       .catch(err => {
//         console.error(`Error: ${err}`);
//       });
//   });
// });

// / Getting token when refresh window hp

// getting token when refresh window lp
// messaging.onTokenRefresh(() => {
//   messaging.getToken().then(token2 => {
//     console.log("Token updated LP");
//     const db = firebase.firestore();
//     //db.settings({ timestampsInSnapshots: true });
//     db.collection("tokens2")
//       .doc(token2)
//       .set({
//         token2: token2
//       })
//       .catch(err => {
//         console.error(`Error: ${err}`);
//       });
//   });
// });

// / getting token when refresh window lp

// getting token when refresh window 3 Way
// messaging.onTokenRefresh(() => {
//   messaging.getToken().then(token3 => {
//     console.log("Token updated 3 Way");
//     const db = firebase.firestore();
//     //db.settings({ timestampsInSnapshots: true });
//     db.collection("tokens3")
//       .doc(token3)
//       .set({
//         token3: token3
//       })
//       .catch(err => {
//         console.error(`Error: ${err}`);
//       });
//   });
// });

// / getting token when refresh window 3 Way

// Messaging
messaging.onMessage(function(payload) {
  console.log("onMessage", payload);
  console.log(`Payload message : ${payload.data.descripcion}`);
  swal({
    title: `New post from Company: ${payload.data.titulo}`,
    text: `Email's Client: ${payload.data.descripcion}`,
    icon: "info"
  });
});

// messaging.onMessage(function(payload1) {
//   console.log("onMessage", payload1);
//   console.log(`Payload message : ${payload1.data.descripcion}`);
//   swal({
//     title: `New post from Company: ${payload1.data.titulo}`,
//     text: `Email's Client: ${payload1.data.descripcion}`,
//     icon: "info"
//   });
// });

//ends service worker
