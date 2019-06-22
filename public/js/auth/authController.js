$(() => {
    
const objAuth = new Autenticacion()
/****** */
$("#btn-signup").click(() => {
        
        $('.form-signin').css('display', 'none')
        
        $('#signup-form').css('display', 'block')

$('#cancel_signup').click(()=> {

            $('.form-signin').css('display', 'block')

            $('#signup-form').css('display', 'none')

        })

//Este evento es para crear usuario via e-mail
$('#signup-email').click(()=> {

    const nombres = $('#user-name').val();
    const email = $('#user-email').val();
    const password = $('#user-pass').val();

// Referencia a la clase Autenticacion
const auth = new Autenticacion()

//Haciendo referencia a le clase se llama al metodo 'crearCuentaEmailPassword'
auth.crearCuentaEmailPass(email, password, nombres)

})
});


//Este metodo  es para logear usuario que ya esta creado
$("#emailLogin").click( () => {
    const email = $('#inputEmail').val();
    const password = $('#inputPassword').val();

    console.log("hello from email authController.js");
   
    // TODO : LLamar auth cuenta con email
    const auth = new Autenticacion()
    auth.autEmailPass(email, password)

    $('#loginForm').css('display', 'none')
    $('#mainForm').css('display', 'block')
    console.log("hello from email authController.js");

});

//AUTH con GOOGLE
$("#google").click(() => {
        
        let loginForm = document.querySelector('#logreg-forms')
        let mainForm = document.querySelector('#mainForm')

        objAuth.authCuentaGoogle()
            // $("#logreg-forms").hide()
            // $(".container").show()
            console.log('hello from Google authController.js')
            loginForm.style.display = "none"
            mainForm.style.display = "block"

    });

//AUTH con FACEBOOK
$("#facebook").click(() => {
        let loginForm = document.querySelector('#logreg-forms')
        let mainForm = document.querySelector('#mainForm')

        objAuth.authCuentaFacebook()

            console.log('hello from Facebook authController.js')
            loginForm.style.display = "none"
            mainForm.style.display = "block"
            
    });

});