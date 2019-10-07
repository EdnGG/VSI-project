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

/******** Inicializando Firebase-Firestore ***************/
let db = firebase.firestore();