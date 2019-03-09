class Autenticacion {
    autEmailPass(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user.emailVerified) {
                    swal({
                        title: `Bienvenido ${res.user.displayName}`,
                        icon: `success`
                    })
                } else {
                    firebase.auth().signOut()
                   swal({
                        title: `Please verify your account trougth Email`,
                        icon : `error`
                    })
                }
            })

    }

    crearCuentaEmailPass(email, password, nombres) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                res.user.updateProfile({
                    displayName: nombres
                })

                const configuration = {
                    //url: 'http://127.0.0.1:5500/public/index.html'
                    //url: 'http://127.0.0.1:5500'
                    //url: 'http://127.0.0.1:5500/public'
                    url: 'http://localhost:3000/'

                }

                res.user.sendEmailVerification(configuration).catch(error => {
                    console.error(error)
                    console.error(error.message, 4000)
                })
                firebase.auth().signOut()

                swal({

                    title:  `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
                    icon: `success`
                })

            })
            .catch(error => {
                console.error(error)
                Materialize.toast(error.message, 4000)
            })

    }

    authCuentaGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()

        // let loginForm = document.querySelector('#logreg-forms')
        // let mainForm = document.querySelector('.container')

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                
                // console.log('hello from autentication.js')
                // loginForm.style.display = 'none'
                // mainForm.style.display = 'block'

                swal( {
                    title: `Bienvenido ${result.user.displayName} !! `,
                    icon: `success`
                })
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
                    icon: `success`
                })
            })

    }

    authTwitter() {
        // TODO: Crear auth con twitter
        const provider = new firebase.auth.TwitterAuthProvider();

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
                    title: `Error trying to autenticate with Twitter: ${error.message}`,
                    icon: `success`   
                })
            })

    }

}
