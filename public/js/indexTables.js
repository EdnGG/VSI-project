// //start service worker

// navigator.serviceWorker
//   .register("notifications-sw.js")
//   .then(registro => {
//     console.log(`service worker register! ${registro}`);
//     firebase.messaging().useServiceWorker(registro);
//   })
//   .catch(err => {
//     console.error(`Error trying to register serviceworker => ${err}`);
//   });

// // Retrieve Firebase Messaging Object
// const messaging = firebase.messaging();
// // Retrieve Firebase Messaging Object /

// // Register web credentials
// messaging.usePublicVapidKey(
//   "BEpaYJcZgxmv22Ao5Nn4iNXOvpQfOUC85II16aSY8o2dIXJAn8kruAIp259N2BYkqY3x6uIKsYwUzSux48JkhFE"
// );

// // Getting permissions for notifications
// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("permission allowed");
//     return messaging.getToken();
//   })
//   .then(token => {
//     console.log(`token:  ${token}`);
//     const db = firebase.firestore();
//     db.collection("tokens")
//       .doc(token)
//       .set({
//         token: token
//       })
//       .catch(err => {
//         console.error(`Error trying to insert token on DB => ${err}`);
//       });
//   });

// // Getting permissions for notifications

// // Notification.requestPermission().then(permission => {
// //   if (permission === "granted") {
// //     console.log("Notification permission granted.");
// //     // TODO(developer): Retrieve an Instance ID token for use with FCM.
// //     // ...
// //   } else {
// //     console.log("Unable to get permission to notify.");
// //   }
// // });

// // Finish Getting permissions for notifications

// // Getting new token when browser was refreshed

// messaging.onTokenRefresh(() => {
//   messaging.getToken().then(token => {
//     console.log(`token has been refreshed`);
//     const db = firebase.firestore();
//     db.collection("tokens")
//       .doc(token)
//       .set({
//         token: token
//       })
//       .catch(err => {
//         console.error(`Error trying to insert token on DB => ${err}`);
//       });
//   });
// });

// // Getting notifications when user is on foreground

// // start To retrieve the current token:

// // Get Instance ID token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// // messaging
// //   .getToken()
// //   .then(currentToken => {
// //     if (currentToken) {
// //       sendTokenToServer(currentToken);
// //       updateUIForPushEnabled(currentToken);
// //     } else {
// //       // Show permission request.
// //       console.log(
// //         "No Instance ID token available. Request permission to generate one."
// //       );
// //       // Show permission UI.
// //       updateUIForPushPermissionRequired();
// //       setTokenSentToServer(false);
// //     }
// //   })
// //   .catch(err => {
// //     console.log("An error occurred while retrieving token. ", err);
// //     showToken("Error retrieving Instance ID token. ", err);
// //     setTokenSentToServer(false);
// //   });

// // finish retrieving the current token

// // Monitor token refresh

// // Callback fired if Instance ID token is updated.
// // messaging.onTokenRefresh(() => {
// //   messaging
// //     .getToken()
// //     .then(refreshedToken => {
// //       console.log("Token refreshed.");
// //       // Indicate that the new Instance ID token has not yet been sent to the
// //       // app server.
// //       setTokenSentToServer(false);
// //       // Send Instance ID token to app server.
// //       sendTokenToServer(refreshedToken);
// //       // ...
// //     })
// //     .catch(err => {
// //       console.log("Unable to retrieve refreshed token ", err);
// //       showToken("Unable to retrieve refreshed token ", err);
// //     });
// // });

// //  Finish Monitor token refresh

// messaging.onMessage(payload => {
//   swal({
//     title: `We Got a new retrofit form item, ${payload.data.title}`,
//     icon: `warning`
//   });
// });

// //ends service worker

// messaging.onMessage(payload => {
//   console.log(`Payload: ${payload}`);
//   let obj = JSON.parse(payload.data.notification);
//   let notification = new Notification(obj.title, {
//     icon: obj.icon,
//     body: obj.body
//   });
//   // swal({
//   //   title: `We Got a new retrofit form item, ${payload.data.title}`,
//   //   icon: `warning`
//   // });
// });
