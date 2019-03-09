$(() => {

    const objAuth = new Autenticacion()


    $("#btn-signup").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();
        const auth = new Autenticacion()
        auth.crearCuentaEmailPass(email, password, nombres)

        // TODO : LLamar crear cuenta con email
    });

    $("#emailLogin").click(() => {
        const email = $('#inputEmail').val();
        const password = $('#inputPassword').val();
        // TODO : LLamar auth cuenta con email
        const auth = new Autenticacion()
        auth.autEmailPass(email, password)
    });

    //AUTH con GOOGLE
    $("#google").click(() => {
        
        let loginForm = document.querySelector('#logreg-forms')
        let mainForm = document.querySelector('.container')

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
        let mainForm = document.querySelector('.container')

        objAuth.authCuentaFacebook()
        
        console.log('hello from Facebook authController.js')
        loginForm.style.display = "none"
        mainForm.style.display = "block"
    
    });

    //AUTH con TWITTER
    $("#authTwitter").click(() =>
        objAuth.authTwitter()
    );

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');

    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

});