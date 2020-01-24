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

/*********** Se vuelven a declarar  la instacia de messaging porque este archivo corre en paralelo al flujo de la aplicacion **************************/

/*********** Inicializando Firebase**************************/
firebase.initializeApp({
  projectId: "vsi-project",
  messagingSenderId: "345953099682"
});

/*********** / Inicializando Firebase**************************/

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log("[notifications-ws.js] Received background message", payload);
  const titulo = `We got a new retrofit form request `;
  const options = {
    //content_available: false,
    data: {
      title: "From Firebase",
      body: payload.data.titulo,
      icon: "./imagenes/valve.png",
      click_action: "https://vsi-project.web.app"
    }
  };
  // Se le dice a window que muestre la notificacion
  return self.registration.showNotification(titulo, options);
});
