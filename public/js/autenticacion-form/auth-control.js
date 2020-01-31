console.log("Hello from auth-control.js");

const btnSubmit = document.querySelector("#submit");

// Start Listener for autentication

btnSubmit.addEventListener("click", () => {
  const auth = new AutenticacionLog();
  const email = document.querySelector("#login_username").value;
  const password = document.querySelector("#login_password").value;

  auth.emailLogin(email, password);
});
