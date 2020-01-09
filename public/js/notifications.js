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

// if (window.navigator && navigator.serviceWorker) {
//   navigator.serviceWorker.getRegistrations().then(function(registrations) {
//     for (let registration of registrations) {
//       registration.unregister();
//     }
//   });
// }
// Register web credentials
const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BEpaYJcZgxmv22Ao5Nn4iNXOvpQfOUC85II16aSY8o2dIXJAn8kruAIp259N2BYkqY3x6uIKsYwUzSux48JkhFE"
);

// getting token when refresh window
messaging.onTokenRefresh(() => {
  messaging.getToken().then(token => {
    console.log("Token updated");
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
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

// Getting permissions for notifications
messaging
  .requestPermission()
  .then(() => {
    console.log("permission allowed");

    // debugger;
    return messaging.getToken();
  })
  .then(token => {
    console.log("Token: ", token);
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

// Messaging
messaging.onMessage(function(payload) {
  console.log("onMessage", payload);
  swal({
    text: "We have a new retrofit form, please chek it out",
    icon: "info"
  });
});
//ends service worker
