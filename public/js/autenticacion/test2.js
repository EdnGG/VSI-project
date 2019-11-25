$("#resetPasswordEmail").click(() => {
  alert("works");
  var auth = firebase.auth();
  let email = $("#resetEmail").val();

  if (email != "") {
    auth
      .sendPasswordResetEmail(email)
      .then(function() {})
      .catch(function(err) {});
  } else {
    alert("please");
  }
});
