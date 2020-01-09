importScripts("https://www.gstatic.com/firebasejs/5.8.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.8.5/firebase-messaging.js");

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
firebase.initializeApp(
  config

  // {
  //   projectId: "vsi-project",
  //   messagingSenderID: "345953099682"
  // }
);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const title = "Hello World";
  const options = {
    body: payload.data.status,
    // icon: "/firebase-logo.png",
    // click_action: "https://vsi-project.firebaseapp.com/forms2.html",
    click_action: "http://localhost:5500/public/forms2.html"
  };
  return self.registration.showNotification(title, options);
});
