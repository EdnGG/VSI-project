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
    const nombres = $("#user-name").val();
    const email = $("#user-email").val();
    const password = $("#user-pass").val();
      
// Referencia a la clase Autenticacion
    const auth = new Autenticacion();
    console.log("hello");
//Haciendo referencia a la clase se llama al metodo 'crearCuentaEmailPassword'
    auth.crearCuentaEmailPass(email, password, nombres);
  });
  });

  $("#emailLogin").click(() => {
    const email = $("#inputEmail").val();
    const password = $("#inputPassword").val();
    // TODO : LLamar auth cuenta con email

    console.log("hello from email authControl.js");
    const auth = new Autenticacion();
    auth.autEmailPass(email, password);
  });

  //AUTH con GOOGLE
  $("#google").click(() => {
    let loginForm = document.querySelector("#logreg-forms");
    let mainForm = document.querySelector("#mainForm");

    objAuth.authCuentaGoogle();
    // $("#logreg-forms").hide()
    // $(".container").show()
    console.log("hello from Google authController.js");
    loginForm.style.display = "none";
    mainForm.style.display = "block";
  });

  //AUTH con FACEBOOK
  $("#facebook").click(() => {
    let loginForm = document.querySelector("#logreg-forms");
    let mainForm = document.querySelector("#mainForm");

    objAuth.authCuentaFacebook();

    console.log("hello from Facebook authController.js");
    loginForm.style.display = "none";
    mainForm.style.display = "block";
  });
});
