const formContainer = document.querySelector("#form_container");
const mainContainer = document.querySelector("#main");
const btnCloseSecion = document.querySelector("#btnCloseSecion");

formContainer.style.display = "block";
mainContainer.style.display = "none";
btnCloseSecion.style.display = "none";

btnCloseSecion.addEventListener("click", () => {
  firebase.auth().signOut();
  formContainer.style.display = "block";
  mainContainer.style.display = "none";
  btnCloseSecion.style.display = "none";
  const email = document.querySelector("#login_username");
  const password = document.querySelector("#login_password");
  email.value = "";
  password.value = "";
  swal({
    title: `Sign out successsfuly`,
    icon: `success`
  });
});
