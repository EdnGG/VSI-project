class Autenticacion {
   autEmailPass(email, password) {
   
      let loginForm = document.querySelector('#loginForm')
      let mainForm = document.querySelector("#mainForm")

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
         if (res.user.emailVerified) {
            swal({
               title: `Bienvenido ${res.user.displayName}`,
               icon: `success`
            })

// $("#loginForm").css("display", "none");
// $("mainForm").css("display", "block");

console.log("hello from email authController.js");
loginForm.style.display = "none";
mainForm.style.display = "block";
                    
                } else {
                    firebase.auth().signOut()
                   swal({
                        title: `Please verify your account trougth Email`,
                        icon : `error`
                    })
                }

// console.log('hey there')
// $("#loginForm").css("display", "none");
// $("mainForm").css("display", "block");

loginForm.style.display = "none";
mainForm.style.display = "block";

            })

    }

crearCuentaEmailPass(email, password, nombres) {
   firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
         res.user.updateProfile({
            displayName: nombres
         })

         const configuration = {
            // url: 'http://127.0.0.1:5500/public'
            url: 'http://localhost:3000/'
            // url: 'http://localhost:5500/'
            //url: 'https:/vsi-project.firebaseapp.com'
         }

         res.user.sendEmailVerification(configuration).catch(error => {
            console.error(error)
            swal({
               title: `${error.message}`,
               icon: `error`
            })
         })
         firebase.auth().signOut()
            console.log("Testing email login 0");
            swal({
                title:  `Bienvenido ${nombres}, debes realizar el procesodeverificación`,
                icon: `success`
            })
            console.log("Testing email login")
            
            // $("#loginForm").css("display", "none");
            // $("#mainForm").css("display", "block");

        })
        .catch(error => {
            console.error(error.message)
            swal({
                title: `${error.message}`,
                icon: `error`   
            })
        })

}

    authCuentaGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()

            let firstSeccion = document.querySelector("#seccion1");
            let secondSeccion = document.querySelector("#seccion2");
            let thirdSeccion = document.querySelector("#seccion3");
            let fourthSeccion = document.querySelector("#seccion4");
            let fifthSeccion = document.querySelector("#seccion5");
    
        firebase.auth().signInWithPopup(provider)
            .then(result => {
            

                swal( {
                    title: `Bienvenido ${result.user.displayName} !! `,
                    icon: `success`
                })
            firstSeccion.style.display = 'block'
            secondSeccion.style.display = 'none'
            thirdSeccion.style.display = "none";
            fourthSeccion.style.display = "none";
            fifthSeccion.style.display = "none";

            })
            .catch(error => {
                console.error(error)
                swal({
                    title: `Error trying to autenticate with Google: ${error.message}`,
                    icon: `error`   
                })
            })


    }

authCuentaFacebook() {
    
const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
                
            swal({
                    title: `Bienvenido ${result.user.displayName} !! `, 
                    icon: `success`
                })
            })
            .catch(error => {
                console.error(error)
                swal({
                    title : `Error trying to autenticate with Facebook: ${error}`,
                    icon: `error`
                })
            })

    }

    // authTwitter() {
    //     // TODO: Crear auth con twitter
    //     const provider = new firebase.auth.TwitterAuthProvider();

    //     firebase.auth().signInWithPopup(provider)
    //         .then(result => {
                
    //             swal({
    //                 title: `Bienvenido ${result.user.displayName} !! `,
    //                 icon: `success`
    //             })
    //         })
    //         .catch(error => {
    //             console.error(error)
    //             swal({
    //                 title: `Error trying to autenticate with Twitter: ${error.message}`,
    //                 icon: `success`   
    //             })
    //         })

    // }

}
