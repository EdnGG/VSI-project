importScripts("https://www.gstatic.com/firebasejs/5.8.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.8.5/firebase-messaging.js");
// importScripts("/__/firebase/init.js");

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
firebase.initializeApp({
  projectId: "vsi-project",
  messagingSenderId: "345953099682"
});

/*********** / Inicializando Firebase**************************/

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log("[notifications-ws.js] Received background message", payload);
//   const title = "Hello World";
//   const options = {
//     body: `Background message body`,
//     icon: "./imagenes/usuario.png"
//   };
//   return self.registration.showNotification(title, options);
// });

// self.addEventListener("notificationsclick", e => {
//   if (e.action == "More") {
//     // open window
//   }
// });
