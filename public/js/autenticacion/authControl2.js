$(() => {
  const objAuth = new Autenticacion();
  $("#btn-signup").click(() => {
    $(".form-signin").css("display", "none");
    $("#signup-form").css("display", "block");

    $("#cancel_signup").click(() => {
      $(".form-signin").css("display", "block");
      $("#signup-form").css("display", "none");
    });

    $("#signup-email").click(() => {
      const auth = new Autenticacion();
      const nombres = $("#user-name").val();
      const email = $("#user-email").val();
      const password = $("#user-pass").val();
      console.log("probando creacion de usuario");
      // Referencia a la clase Autenticacion
      // const auth = new Autenticacion();
      //Haciendo referencia a la clase se llama al metodo 'crearCuentaEmailPass'
      //objAuth.crearCuentaEmailPass(email, password)
      auth.crearCuentaEmailPass(email, password);
    });
  });

  $("#emailLogin").click(() => {
    //const auth = new Autenticacion();
    const email = $("#inputEmail").val();
    const password = $("#inputPassword").val();
    // TODO : LLamar auth cuenta con email

    console.log("hello from email authControl.js");

    // se llama desde autenticaion.js
    // Se hace referencia a la clase Autenticacion
    // que esta en autenticacion.js
    const auth = new Autenticacion();
    auth.autEmailPass(email, password);
    console.log("se ejecuto funcion autEmailPass");
  });

  //AUTH con GOOGLE
  $("#google").click(() => {
    // se llama desde autenticaion.js
    // Se hace referencia a la clase Autenticacion
    // que esta en autenticacion.js
    objAuth.authCuentaGoogle();
    console.log("hello from Google authController.js");
  });

  //AUTH con FACEBOOK
  $("#facebook").click(() => {
    // se llama desde autenticaion.js
    // Se hace referencia a la clase Autenticacion
    // que esta en autenticacion.js
    objAuth.authCuentaFacebook();
    console.log("hello from Facebook authController.js");
  });
});
