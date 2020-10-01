class AutenticacionLog {
  emailLogin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

      .then(result => {
        if (result.user.emailVerified) {
          swal({
            title: `Welcome ${result.user.displayName}`,
            icon: `success`
          });
          const formContainer = document.querySelector("#form_container");

          const mainContainer = document.querySelector("#main");

          formContainer.style.display = "none";
          mainContainer.style.display = "block";
          btnCloseSecion.style.display = "block";
        } else {
          firebase.auth().signOut();
          swal({
            title: `Please verify your account trougth Email`,
            icon: `error`
          });
          formContainer.style.display = "block";
          mainContainer.style.display = "none";
          // btnCloseSecion.style.display = "none";
        }
      })
      .catch(error => {
        console.log(`${error}`);
        swal({
          title: `Something went wrong: ${error}`,
          icon: `error`
        });
      });
  }
}
