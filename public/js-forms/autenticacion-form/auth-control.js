console.log("Hello from auth-control.js");

const btnSubmit = document.querySelector("#submit");

// Start Listener for autentication

btnSubmit.addEventListener("click", () => {
  const auth = new AutenticacionLog();
  const email = document.querySelector("#login_username").value;
  const password = document.querySelector("#login_password").value;
  // Aqui podria ir la validacion del email
  if (email !== 'gresseden@gmail.com') {
    swal({
      title: `You're not allow to access to this content`,
      icon: 'error'
    })
    console.log('user not autorized')
  } else {
    auth.emailLogin(email, password);

  }
});
