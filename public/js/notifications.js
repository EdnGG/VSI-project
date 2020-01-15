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

// Getting permissions for notifications
messaging
  .requestPermission()
  .then(() => {
    console.log("permission allowed");
    return messaging.getToken();
  })
  .then(token => {
    console.log("Token: ", token);
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
  .catch(err => console.error(`No se dio el permiso: ${err}`));

// Messaging
messaging.onMessage(function(payload) {
  console.log("onMessage", payload);

  // db.collection("Electric_Actuator").onSnapshot(doc => {
  //   console.log("Current data: ", doc.data());
  //   swal({
  //     text: "New post on Electric Actuator Table",
  //     icon: "info"
  //   });
  // });
});

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

//ends service worker
