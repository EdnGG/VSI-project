console.log("hello");

// $(function() {
//   $('[data-toggle="tooltip"]').tooltip();
// });

/*********Login Form Seccion*****************/
const loginForm = document.querySelector("#logreg-forms");
const loginButton = document.querySelector("#btnInicioSesion");

loginButton.addEventListener("click", () => {
  console.log("Login button works");
  const user = firebase.auth().currentUser; // Obteniendo a current user

  if (user) {
    loginButton.innerHTML = "Sign Out";
    loginForm.style.display = "none";
    carousel.style.display = "block";
    mainForm.style.display = "none";
    console.log("sign out");

    return firebase
      .auth()
      .signOut()
      .then(() => {
        $("#avatar").attr("src", "../imagenes/usuario.png");
        swal({
          title: `Sign Out succesfull`,
          icon: `success`
        });
      })
      .catch(error => {
        swal({
          title: `Something was wrong trying to sign out ${error}`,
          icon: `error`
        });
      });
  }

  //loginButton.innerHTML = "Log Out"
  loginForm.style.display = "block";
  carousel.style.display = "none";
  //mainForm.style.display = 'block'
});

/************ Starts function that observe if user is true   **********/

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    loginButton.innerHTML = "Log Out";

    if (user.photoURL) {
      $("#avatar").attr("src", user.photoURL);
    } else {
      $("#avatar").attr("src", "./imagenes/usuarioauth.png");
    }
  } else {
    loginButton.innerHTML = "Sign In";
    $("#avatar").attr("src", "./imagenes/usuarioauth.png");
  }
});

/************ Ends function that observe if user is true   **********/

/**********Ends Login Form Seccion*********/

/*********Starts Carousel seccion*************/
const carousel = document.querySelector("#carousel");

/********Ends carousel seccion***************/

/****************Seccion 1 ************/

/********Start Main Form seccion*****************/
const mainForm = document.querySelector("#mainForm");
const btnSeccion1 = document.querySelector("#btnSeccion1");
/******** Starts Hidding Elements Seccion **********/

mainForm.style.display = "none"; //Poner "block" para desarrollo
loginForm.style.display = "none"; //none

/******** Ends Hidding Elements Seccion **********/

btnSeccion1.addEventListener("click", () => {
  console.log("validating first seccion");
  validationSeccion1();
});
/**********Starts Validation seccion function 1************/
const validationSeccion1 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  let companyName = document.querySelector("#inputCompany").value;
  let contactName = document.querySelector("#inputContact").value;
  let inputEmail = document.querySelector("#inputEmail").value;
  let Mailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (companyName === "" && inputEmail === "") {
    swal({
      title: `Please fill out all the required fields!`,
      icon: `error`
    });
  } else if (companyName === "") {
    swal({
      title: `Company name is required`,
      icon: `error`
    });
  } else if (!Mailregex.test(inputEmail)) {
    swal({
      title: `Please provide a valid e-mail!`,
      icon: `error`
    });
  } else {
    swal({
      //  title: `Company name is required!`,
      icon: `success`
    });
    firstSeccion.style.display = "none";
    secondSeccion.style.display = "block";
    thirdSeccion.style.display = "block";
    fourthSeccion.style.display = "none";
    fifthSeccion.style.display = "none";
    sixthSeccion.style.display = "none";
    seventhSeccion.style.display = "none";
    eigthSeccion.style.display = "none";
    ninethSeccion.style.display = "none";
    tenthSeccion.style.display = "none";
  }
};
/*Ends Validation seccion function 1*/

/******Ends Seccion 1*******/

/******Starts Seccion 2**********/

const btnSeccion2 = document.querySelector("#btnSeccion2");
btnSeccion2.addEventListener("click", () => {
  console.log("seccion 2 button works");
  validationSeccion2();
});

//*****Button prev secc 2******** */

const btnSeccion2Prev = document.querySelector("#btnSeccion2Prev");
btnSeccion2Prev.addEventListener("click", () => {
  console.log("working boton secc 2 preview");
  let firstSeccion = document.querySelector("#seccion1");
  let thirdSeccion = document.querySelector("#seccion3");
  let secondSeccion = document.querySelector("#seccion2");

  thirdSeccion.style.display = "none";
  secondSeccion.style.display = "none";
  firstSeccion.style.display = "block";
});

//****** Ends button prev secc 2 ******** */

//******* Button prev secc 7****** */

const btnSeccion7Prev = document.querySelector("#btnSeccion7Prev");
btnSeccion7Prev.addEventListener("click", () => {
  console.log("working boton secc 7 preview");
  let seventhSeccion = document.querySelector("#seccion7");
  let thirdSeccion = document.querySelector("#seccion3");
  let secondSeccion = document.querySelector("#seccion2");

  thirdSeccion.style.display = "block";
  secondSeccion.style.display = "block";
  seventhSeccion.style.display = "none";
});

//********Button Prev secc 7 /******* */

//******Button Prev secc 8 ****** */

const btnSeccion8Prev = document.querySelector("#btnSeccion8Prev");
btnSeccion8Prev.addEventListener("click", () => {
  console.log("working boton secc 8 preview");
  let seventhSeccion = document.querySelector("#seccion7");

  let eightSeccion = document.querySelector("#seccion8");

  eightSeccion.style.display = "none";
  seventhSeccion.style.display = "block";
});

//***** Button Prev secc 8 /***** */

//******Button Prev secc 9 ****** */

const btnSeccion9Prev = document.querySelector("#btnSeccion9Prev");
btnSeccion9Prev.addEventListener("click", () => {
  console.log("working boton secc 9 preview");
  let ninenthSeccion = document.querySelector("#seccion9");

  let eightSeccion = document.querySelector("#seccion8");

  eightSeccion.style.display = "block";
  ninenthSeccion.style.display = "none";
});

//***** Button Prev secc 9 /***** */

//******Button Prev secc 10 ****** */

const btnSeccion10Prev = document.querySelector("#btnSeccion10Prev");
btnSeccion10Prev.addEventListener("click", () => {
  console.log("working boton secc 10 preview");
  let thenthSeccion = document.querySelector("#seccion10");

  let ninenthSeccion = document.querySelector("#seccion9");

  ninenthSeccion.style.display = "block";
  thenthSeccion.style.display = "none";
});

//***** Button Prev secc 10 /***** */

//******Button Prev electric ****** */

const btnSeccElectricPrev = document.querySelector("#btnSeccion3Prev");
btnSeccElectricPrev.addEventListener("click", () => {
  console.log("working boton secc 3 preview");

  let electricSeccion = document.querySelector("#seccion4");
  let thirdSeccion = document.querySelector("#seccion3");
  let secondSeccion = document.querySelector("#seccion2");

  secondSeccion.style.display = "block";
  thirdSeccion.style.display = "block";
  electricSeccion.style.display = "none";
});

//***** Button Prev electric /***** */

//******Button Prev High pressure ****** */

const btnSeccHighPressurePrev = document.querySelector("#btnSeccion5Prev");
btnSeccHighPressurePrev.addEventListener("click", () => {
  console.log("working boton high pressure preview");

  let highPressureSeccion = document.querySelector("#seccion5");
  let thirdSeccion = document.querySelector("#seccion3");
  let secondSeccion = document.querySelector("#seccion2");

  secondSeccion.style.display = "block";
  thirdSeccion.style.display = "block";
  highPressureSeccion.style.display = "none";
});

//***** Button Prev high pressure /***** */

//******Button Prev Low pressure ****** */

const btnSeccLowPressurePrev = document.querySelector("#btnSeccion4to6Prev");
btnSeccLowPressurePrev.addEventListener("click", () => {
  console.log("working boton high pressure preview");

  let lowPressureSeccion = document.querySelector("#seccion6");
  let thirdSeccion = document.querySelector("#seccion3");
  let secondSeccion = document.querySelector("#seccion2");

  secondSeccion.style.display = "block";
  thirdSeccion.style.display = "block";
  lowPressureSeccion.style.display = "none";
});

//***** Button Prev Low pressure /***** */

/**********Starts Validation seccion function 2************/
const validationSeccion2 = () => {
  let valve2way = document.getElementById("valve2way");
  let valve3way = document.getElementById("valve3way");

  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  let valveSize = document.querySelector("#inputValveSize").value;
  let brand = document.querySelector("#inputBrand").value;
  let series = document.querySelector("#inputSeries").value;
  //let location = document.querySelector("#inputLocation").value;
  //let selectMenu = document.querySelector("#selectSeccion3");

  function first() {
    if (
      valveSize === "" &&
      brand === "" &&
      series === "" &&
      !valve2way.checked &&
      !valve3way.checked
    ) {
      swal({
        title: `Please fill out all the required fields`,
        icon: `error`
      });
    } else if (valveSize === "") {
      swal({
        title: `Valve size required `,
        icon: `error`
      });
      // second();
    } else if (brand === "") {
      swal({
        title: `Valve brand required`,
        icon: `error`
      });
      // second();
    } else if (series === "") {
      swal({
        title: `Valve serie required`,
        icon: `error`
      });
      // second();
    } else if (!valve2way.checked) {
      swal({
        title: `Please select any checkbox`,
        icon: `error`
      });
      second();
    } else {
      second();
    }
  }
  function second() {
    let electric = document.getElementById("electric");
    let lp = document.getElementById("lp");
    let hp = document.getElementById("hp");

    if (valve3way.checked) {
      swal({
        icon: `success`
      });
      firstSeccion.style.display = "none";
      secondSeccion.style.display = "none";
      thirdSeccion.style.display = "none";
      fourthSeccion.style.display = "none";
      fifthSeccion.style.display = "none";
      sixthSeccion.style.display = "none";
      seventhSeccion.style.display = "block";
      eigthSeccion.style.display = "none";
      ninethSeccion.style.display = "none";
      tenthSeccion.style.display = "none";
    } else if (valve2way.checked) {
      //&& valve3way.checked
      if (electric.selected) {
        swal({
          icon: `success`
        });
        firstSeccion.style.display = "none";
        secondSeccion.style.display = "none";
        thirdSeccion.style.display = "none";
        fourthSeccion.style.display = "block";
        fifthSeccion.style.display = "none";
        sixthSeccion.style.display = "none";
        seventhSeccion.style.display = "none";
        eigthSeccion.style.display = "none";
        ninethSeccion.style.display = "none";
        tenthSeccion.style.display = "none";
      } else if (hp.selected) {
        swal({
          icon: `success`
        });
        firstSeccion.style.display = "none";
        secondSeccion.style.display = "none";
        thirdSeccion.style.display = "none";
        fourthSeccion.style.display = "none";
        fifthSeccion.style.display = "block";
        sixthSeccion.style.display = "none";
        seventhSeccion.style.display = "none";
        eigthSeccion.style.display = "none";
        ninethSeccion.style.display = "none";
        tenthSeccion.style.display = "none";
      } else if (lp.selected) {
        swal({
          icon: `success`
        });
        firstSeccion.style.display = "none";
        secondSeccion.style.display = "none";
        thirdSeccion.style.display = "none";
        fourthSeccion.style.display = "none";
        fifthSeccion.style.display = "none";
        sixthSeccion.style.display = "block";
        seventhSeccion.style.display = "none";
        eigthSeccion.style.display = "none";
        ninethSeccion.style.display = "none";
        tenthSeccion.style.display = "none";
      } else {
        swal({
          title: `Please make sure to select any select option`,
          icon: `error`
        });
      }
    }
  }

  first();
};

/************Ends Seccion 2************/

/**********Ends Validation seccion function 2************/

/**********Starts Seccion 4************/

const btnSeccion4 = document.querySelector("#btnSeccion8");
btnSeccion4.addEventListener("click", () => {
  validationSeccion4();
});
/********Starts Main form seccion4 *****************/

const validationSeccion4 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  let bonnet1 = document.getElementById("bonnet1"); // Radio buttons
  let bonnet_2 = document.getElementById("bonnet2"); // Radio buttons
  let bonnet_3 = document.getElementById("bonnet3"); // Radio buttons
  let inputBonnetA = document.getElementById("bonnetA").value; // inputs
  let inputBonnetB = document.getElementById("bonnetB").value; // inputs
  let inputBonnetC = document.getElementById("bonnetC").value; // inputs
  let boltDrilled = document.getElementById("boltDrilled"); // Radio buttons
  let boltDrilledAndTapped = document.getElementById("boltDrilledAndTapped"); // Radio buttons
  let holeSize = document.getElementById("holeSize").value; // inputs
  let otherBonnet = document.getElementById("otherBonnet").value; // inputs

  if (
    !bonnet1.checked &&
    !bonnet_2.checked &&
    !bonnet_3.checked &&
    !boltDrilled.checked &&
    !boltDrilledAndTapped.checked &&
    inputBonnetA === "" &&
    inputBonnetB === "" &&
    inputBonnetC === "" &&
    holeSize === "" &&
    otherBonnet === ""
  ) {
    swal({
      text: `Please fill up all the form`,
      icon: `error`
    });
  } else if (
    !bonnet1.checked &&
    !bonnet_2.checked &&
    !bonnet_3.checked
    // !boltDrilled.checked &&
    // !boltDrilledAndTapped.checked
  ) {
    swal({
      text: `Please select the right checkbox for the Bonnet seccion`,
      icon: `error`
    });
  } else if (!boltDrilled.checked && !boltDrilledAndTapped.checked) {
    swal({
      text: `What kind of bolt drilled do you ask?`,
      icon: `error`
    });
  } else if (inputBonnetA === "") {
    swal({
      text: `Please provide a value for Bonnet A`,
      icon: `error`
    });
  } else if (inputBonnetB === "") {
    swal({
      text: `Please provide a value for Bonnet B`,
      icon: `error`
    });
  } else if (inputBonnetC === "") {
    swal({
      text: `Please provide a value for Bonnet C`,
      icon: `error`
    });
  } else if (holeSize === "") {
    swal({
      text: `Please provide a value for Hole Size `,
      icon: `error`
    });
  } else {
    swal({
      icon: `success`
    });

    firstSeccion.style.display = "none";
    secondSeccion.style.display = "none";
    thirdSeccion.style.display = "none";
    fourthSeccion.style.display = "none";
    fifthSeccion.style.display = "none";
    sixthSeccion.style.display = "none";
    seventhSeccion.style.display = "none";
    eigthSeccion.style.display = "none";
    ninethSeccion.style.display = "block";
    tenthSeccion.style.display = "none";
  }
};
/**********Starts Seccion 5************/

const btnSeccion5 = document.querySelector("#btnSeccion9");
btnSeccion5.addEventListener("click", () => {
  validationSeccion5();
});
/********Starts Main form seccion4 *****************/

const validationSeccion5 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  swal({ icon: `success` });

  firstSeccion.style.display = "none";
  secondSeccion.style.display = "none";
  thirdSeccion.style.display = "none";
  fourthSeccion.style.display = "none";
  fifthSeccion.style.display = "none";
  sixthSeccion.style.display = "none";
  seventhSeccion.style.display = "none";
  eigthSeccion.style.display = "none";
  ninethSeccion.style.display = "none";
  tenthSeccion.style.display = "block";
};

/**********Starts Seccion 5************/

// const btnSeccion6 = document.querySelector('#btnSeccion10');
// btnSeccion6.addEventListener('click', ()=> {

//    validationSeccion6()
// });
/********Starts Main form seccion4 *****************/

const validationSeccion6 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  swal({ icon: `success` });

  firstSeccion.style.display = "none";
  secondSeccion.style.display = "none";
  thirdSeccion.style.display = "none";
  fourthSeccion.style.display = "none";
  fifthSeccion.style.display = "none";
  sixthSeccion.style.display = "none";
  seventhSeccion.style.display = "none";
  eigthSeccion.style.display = "none";
  ninethSeccion.style.display = "none";
  tenthSeccion.style.display = "block";
};

/** Sarts logic for Electric Actuator submit   */
const btnSubmitElectric = document.querySelector("#btnSeccion3");
btnSubmitElectric.addEventListener("click", () => {
  validationElectric();
});

function validationElectric() {
  console.log("valid electric works");
  let inputBrandElectric = document.querySelector("#inputBrandActuator").value;
  let inputModelElectric = document.querySelector("#inputModelNumber").value;
  //let input

  if (inputBrandElectric === "" && inputModelElectric === "") {
    swal({
      text: "Fill up all the fields",
      icon: "error"
    });
  } else if (inputBrandElectric === "") {
    swal({
      text: "Brand Field is required",
      icon: "error"
    });
  } else if (inputModelElectric === "") {
    swal({
      text: "Model Field is required",
      icon: "error"
    });
  } else {
    postElectric();
  }
}
/** Ends logic for Electric Actuator submit   */

/** Sarts logic for High Performance Actuator submit   */
const btnSubmitHp = document.querySelector("#btnSeccion5");
btnSubmitHp.addEventListener("click", () => {
  validationHP();
});

function validationHP() {
  console.log("valid electric works");
  let damageActuatorHP = document.querySelector("#damageActuatorSecc5").value;
  let damageModelHP = document.querySelector("#damageModelNumberSecc5").value;
  //let input

  if (damageActuatorHP === "" && damageModelHP === "") {
    swal({
      text: "Fill up all the fields",
      icon: "error"
    });
  } else if (damageActuatorHP === "") {
    swal({
      text: "Brand Field is required",
      icon: "error"
    });
  } else if (damageModelHP === "") {
    swal({
      text: "Model Number Field is required",
      icon: "error"
    });
  } else {
    postHp();
  }
}
/** Ends logic for High Performance Actuator submit   */

/** Sarts logic for Low Performance Actuator submit   */
const btnSubmitLP = document.querySelector("#btnSeccion4to6");
btnSubmitLP.addEventListener("click", () => {
  validationHP();
});

function validationLP() {
  console.log("validation Lp works");
  let damageActuatorLP = document.querySelector("#damageActuatorSecc6").value;
  let damageModelLP = document.querySelector("#damageModelNumberSecc6").value;
  //let input

  if (damageActuatorLP === "" && damageModelLP === "") {
    swal({
      text: "Fill up all the fields",
      icon: "error"
    });
  } else if (damageActuatorLP === "") {
    swal({
      text: "Brand Field is required",
      icon: "error"
    });
  } else if (damageModelLP === "") {
    swal({
      text: "Model Number Field is required",
      icon: "error"
    });
  } else {
    postLp();
  }
}
/** Ends logic for Low Performance Actuator submit   */

/** Sarts logic for 3 Way Actuator submit   */

/**********Starts Seccion 3************/

const btnSeccion3 = document.querySelector("#btnSeccion7");
btnSeccion3.addEventListener("click", () => {
  validationSeccion3();
});
/********Starts Main form seccion3 *****************/

const validationSeccion3 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  let arrang1 = document.getElementById("a1");
  let arrang2 = document.getElementById("a2");
  let arrang3 = document.getElementById("a3");
  let arrang4 = document.getElementById("a4");
  let arrang5 = document.getElementById("a5");
  let arrang6 = document.getElementById("a6");

  if (
    !arrang1.checked &&
    !arrang2.checked &&
    !arrang3.checked &&
    !arrang4.checked &&
    !arrang5.checked &&
    !arrang6.checked
  ) {
    swal({
      text: `Please select the arrangement you're looking for`,
      icon: `error`
    });
  } else {
    swal({
      icon: `success`
    });

    firstSeccion.style.display = "none";
    secondSeccion.style.display = "none";
    thirdSeccion.style.display = "none";
    fourthSeccion.style.display = "none";
    fifthSeccion.style.display = "none";
    sixthSeccion.style.display = "none";
    seventhSeccion.style.display = "none";
    eigthSeccion.style.display = "block";
    ninethSeccion.style.display = "none";
    tenthSeccion.style.display = "none";
  }
};

/*****Ends Seccion 3************/

/********Ends Main form seccion3 *****************/

/** Ends logic for 3 Way  Performance Actuator submit   */
