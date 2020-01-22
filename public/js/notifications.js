//start service worker
const messaging = firebase.messaging();

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
    console.log("Token", token);
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

// getting token when refresh window EA
messaging.onTokenRefresh(() => {
  messaging.getToken().then(token => {
    console.log("Token updated");
    const db = firebase.firestore();
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

// Messaging content comming from the server
messaging.onMessage(payload => {
  console.log("onMessage", payload);
  console.log(`Payload message : ${payload.data.descripcion}`);
  swal({
    title: `New post from Company: ${payload.data.titulo}`,
    text: `Email's Client: ${payload.data.descripcion}`,
    icon: "info"
  });
});
