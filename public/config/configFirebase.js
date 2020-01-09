// Initialize Firebase
const config = {
  apiKey: "AIzaSyDaaH4muDu3FKFF8poP9d_JI69jRFUvYMc",
  authDomain: "vsi-project.firebaseapp.com",
  databaseURL: "https://vsi-project.firebaseio.com",
  projectId: "vsi-project",
  storageBucket: "vsi-project.appspot.com",
  messagingSenderId: "345953099682"
};

/*********** Inicializando Firebase**************************/
firebase.initializeApp(config);

// // Register web credentials
// const messaging = firebase.messaging();

// messaging.usePublicVapiKey(
//   "BEpaYJcZgxmv22Ao5Nn4iNXOvpQfOUC85II16aSY8o2dIXJAn8kruAIp259N2BYkqY3x6uIKsYwUzSux48JkhFE"
// );

// // Getting permissions for notifications
// messaging
//   .requestPermissions()
//   .then(() => {
//     console.log("permission allowed");
//     return messaging.getToken();
//   })
//   .then(token => {
//     const db = firebase.firestore();
//     db.settings({ timestampsInSnapshots: true });
//     db.collection("tokens")
//       .doc(token)
//       .set({
//         token: token
//       })
//       .catch(err => {
//         console.error(`Error al insertar el token en la DB => ${err}`);
//       });
//   });

//ends service worker

/******** Inicializando Firebase-Firestore ***************/
let db = firebase.firestore();
