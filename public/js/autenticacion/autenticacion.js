class Autenticacion {
  autEmailPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
        if (result.user.emailVerified) {
          //$("#avatar").attr('src', './imagenes/usuarioauth.png')
          swal({
            title: `Bienvenido ${result.user.displayName}`,
            icon: `success`
          });

          console.log('works sign in with email already created'); 

          $("#logreg-forms").css("display", "none")
          $("#mainForm").css("display", "block")
          $("#seccion1").css("display", "block")
          $("#seccion2").css("display", "none")
          $("#seccion3").css("display", "none")
          $("#seccion4").css("display", "none")
          $("#seccion5").css("display", "none")
          $("#seccion6").css("display", "none")
          $("#seccion7").css("display", "none")
          $("#seccion8").css("display", "none");
          $("#seccion9").css("display", "none");
          $("#seccion10").css("display", "none");

          $("#inputCompany").val("");
          $("#inputContact").val("");
          $("#inputLocation").val("");
          $("#inputPhone").val("");
          $("#inputCity").val("");
          $("#inputState").val("");
          $("#inputZip").val("");
          $("#inputValveSize").val("");
          $("#inputBrand").val("");
          $("#inputSeries").val("");
          $("#inputBrandActuator").val("");
          $("#inputModelNumber").val("");

          $("#damageActuatorSecc5").val("");
          $("#damageModelNumberSecc5").val("");
          $("#damageActuatorSecc6").val("");
          $("#damageActuatorSecc6").val("");

          $("#bonnetA").val("");
          $("#bonnetB").val("");
          $("#bonnetC").val("");

          $("#holeSize").val("");
          $("#otherBonnet").val("");

          $("#shaftD").val("");
          $("#shaftE").val("");
          $("#shaftF").val("");
          $("#shaftG").val("");
          $("#shaftH").val("");

          $("#otherInput10").val("");
          $("#otherControlInput10").val("");

          console.log("cleaning form via Email autentication");

        } else {
          firebase.auth().signOut();
          swal({
            title: `Please verify your account trougth Email`,
            icon: `error`
          });
          $("#mainForm").css("display", "none");
          $("#logreg-forms").css("display", "block");
        };
    });
  };

  crearCuentaEmailPass(email, password, nombres) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      
      result.user.updateProfile({
        displayName: nombres
      });
        
        result.user.sendEmailVerification()
        .catch(error => {
            console.error(error.message);
              swal({
                title: `Error: ${error.message}`,
                  icon: `error`
              });
        })
      //firebase.auth.signOut()
        swal({
          title: `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
          icon: `success`
        })

        $("#logreg-forms").css("display", "block");
        // // ****
        $("#mainForm").css("display", "none")
        
    })
    .catch(error => {
      console.error(error.message);
        swal({
          title: `Error: ${error.message}`,
          icon: `error`
        });
    });
  };

  authCuentaGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        $("#avatar").attr("src", result.user.photoURL);
        //toggle()
        swal({
          title: `Bienvenido ${result.user.displayName} !! `,
          icon: `success`
        });

        let loginForm = document.querySelector("#logreg-forms")
        let mainForm = document.querySelector("#mainForm")
        loginForm.style.display = "none";
        mainForm.style.display = "block";

        $('#seccion1').css('display', 'block')
        $("#seccion2").css("display", "none");
        $("#seccion3").css("display", "none");
        $("#seccion4").css("display", "none");
        $("#seccion5").css("display", "none");
        $("#seccion6").css("display", "none");
        $("#seccion7").css("display", "none");
        $("#seccion8").css("display", "none");
        $("#seccion9").css("display", "none");
        $("#seccion10").css("display", "none");

         $("#inputCompany").val("");
         $("#inputContact").val("");
         $("#inputLocation").val("");
         $("#inputPhone").val("");
         $("#inputCity").val("");
         $("#inputState").val("");
         $("#inputZip").val("");
         $("#inputValveSize").val("");
         $("#inputBrand").val("");
         $("#inputSeries").val("");
         $("#inputBrandActuator").val("");
         $("#inputModelNumber").val("");

         $("#damageActuatorSecc5").val("");
         $("#damageModelNumberSecc5").val("");
         $("#damageActuatorSecc6").val("");
         $("#damageActuatorSecc6").val("");

         $("#bonnetA").val("");
         $("#bonnetB").val("");
         $("#bonnetC").val("");

         $("#holeSize").val("");
         $("#otherBonnet").val("");

         $("#shaftD").val("");
         $("#shaftE").val("");
         $("#shaftF").val("");
         $("#shaftG").val("");
         $("#shaftH").val("");

         $("#otherInput10").val("");
         $("#otherControlInput10").val("");

         console.log("cleaning form via Google autentication");


      })
      .catch(error => {
        console.error(error);
        swal({
          title: `Error trying to autenticate with Google: ${error.message}`,
          icon: `error`
        });
        $("#mainForm").css("display", "none");
        $("#logreg-forms").css("display", "block")
      });
  }

  
  authCuentaFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        $("#avatar").attr("src", result.user.photoURL);
        
        swal({
          title: `Bienvenido ${result.user.displayName} !! `,
          icon: `success`
        });

        let loginForm = document.querySelector("#logreg-forms");
        let mainForm = document.querySelector("#mainForm")
        loginForm.style.display = "none";
        mainForm.style.display = "block";

        // $("#inputCompany").val("www");
        console.log("autenticacion1");

        $("#seccion1").css("display", "block");
        $("#seccion2").css("display", "none");
        $("#seccion3").css("display", "none");
        $("#seccion4").css("display", "none");
        $("#seccion5").css("display", "none");
        $("#seccion6").css("display", "none");
        $("#seccion7").css("display", "none");
        $("#seccion8").css("display", "none");
        $("#seccion9").css("display", "none");
        $("#seccion10").css("display", "none");

        $("#inputCompany").val("");
        $("#inputContact").val("");
        $("#inputLocation").val("");
        $("#inputPhone").val("");
        $("#inputCity").val("");
        $("#inputState").val("");
        $("#inputZip").val("");
        $("#inputValveSize").val("");
        $("#inputBrand").val("");
        $("#inputSeries").val("");
        $("#inputBrandActuator").val("");
        $("#inputModelNumber").val("");

        $("#damageActuatorSecc5").val("");
        $("#damageModelNumberSecc5").val("");
        $("#damageActuatorSecc6").val("");
        $("#damageActuatorSecc6").val("");

        $("#bonnetA").val("");
        $("#bonnetB").val("");
        $("#bonnetC").val("");
        
        $("#holeSize").val("");
        $("#otherBonnet").val("");

        $("#shaftD").val("");
        $("#shaftE").val("");
        $("#shaftF").val("");
        $("#shaftG").val("");
        $("#shaftH").val("");

        $("#otherInput10").val("");
        $("#otherControlInput10").val("");

       
        
        console.log("cleaning form via FB autentication");

      })
      .catch(error => {
        console.error(error);
        swal({
          title: `Error trying to autenticate with Facebook: ${error}`,
          icon: `error`
        });
        $("#mainForm").css("display", "none");
        $("#logreg-forms").css("display", "block");
      });
  };

}; //Acaba clase Autenticacion

 
const toggle = () => {
  let logButton = document.querySelector('#btnInicioSesion')
  let form = document.querySelector('#mainForm')
  let carousel = document.querySelector("#carousel") 

  logButton.innerHTML = "Log Out"
  form.style.display = 'none'
  carousel.style.display = "block"
}