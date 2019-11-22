console.log("Hello from posts.js");

function postElectric() {
  let carousel = document.querySelector("#carousel");
  let loginForm = document.querySelector("#logreg-forms");
  let mainForm = document.querySelector("#mainForm");

  let company = document.querySelector("#inputCompany").value;
  let contactName = document.querySelector("#inputContact").value;
  //let location = document.querySelector("#inputLocation").value;
  let phoneContact = document.querySelector("#inputPhone").value;
  let city = document.querySelector("#inputCity").value;
  let state = document.querySelector("#inputState").value;
  let zip = document.querySelector("#inputZip").value;
  let valveSizeSecc2 = document.querySelector("#inputValveSize").value;
  let brandSecc2 = document.querySelector("#inputBrand").value;
  let seriesSecc2 = document.querySelector("#inputSeries").value;

  let typeValveSecc3 = document.querySelector(
    'input[name="exampleRadios"]:checked'
  ).value;
  let actuatorTypeSecc3 = document.querySelector("#selectSeccion3");
  let dropdown =
    actuatorTypeSecc3.options[actuatorTypeSecc3.selectedIndex].value;

  let brandActuatorSecc4 = document.querySelector("#inputBrandActuator").value;
  let modelActuatorSecc4 = document.querySelector("#inputModelNumber").value;

  let selectElectricActuator = document.querySelector("#selectSeccion4");
  let electricActuator =
    selectElectricActuator.options[selectElectricActuator.selectedIndex].value;

  db.collection("Electric_Actuator") // "clients"
    .add({
      Company_Name: company,
      Contact_Name: contactName,
      //Location: location,
      Phone_Contact: phoneContact,
      City: city,
      State: state,
      Zip: zip,
      Valve_Size: valveSizeSecc2,
      Brand: brandSecc2,
      Series: seriesSecc2,
      Brand_Electric_Actuator: brandActuatorSecc4,
      Model_Electric_Actuator: modelActuatorSecc4,
      Valve_Type: typeValveSecc3,
      Actuator_Type: dropdown,
      Electric_Actuator: electricActuator
    })
    // if promise is succesfull
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);

      console.log("post2");
      // clearData();

      mainForm.style.display = "none";
      loginForm.style.display = "none";
      carousel.style.display = "block";

      swal({
        title: `Thanks!! We'll contact you soon`,
        icon: `success`
      });

      firebase.auth().signOut();
    })
    // if promise is reject
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

function postHp() {
  let carousel = document.querySelector("#carousel");
  let loginForm = document.querySelector("#logreg-forms");
  let mainForm = document.querySelector("#mainForm");

  let company = document.querySelector("#inputCompany").value;
  let contactName = document.querySelector("#inputContact").value;
  //let location = document.querySelector("#inputLocation").value;
  let phoneContact = document.querySelector("#inputPhone").value;
  let city = document.querySelector("#inputCity").value;
  let state = document.querySelector("#inputState").value;
  let zip = document.querySelector("#inputZip").value;
  let valveSizeSecc2 = document.querySelector("#inputValveSize").value;
  let brandSecc2 = document.querySelector("#inputBrand").value;
  let seriesSecc2 = document.querySelector("#inputSeries").value;

  let typeValveSecc3_HP = document.querySelector(
    'input[name="exampleRadios"]:checked'
  ).value;

  let actuatorTypeSecc3 = document.querySelector("#selectSeccion3");

  let dropdown_HP =
    actuatorTypeSecc3.options[actuatorTypeSecc3.selectedIndex].value;

  let brandActuatorSecc5 = document.querySelector("#damageActuatorSecc5").value;

  let modelActuatorSecc5 = document.querySelector("#damageModelNumberSecc5")
    .value;

  let radioButtonsHP = document.querySelector(
    'input[name="radioButtonsSecc5"]:checked'
  ).value;

  mainForm.style.display = "none";
  loginForm.style.display = "none";
  carousel.style.display = "block";

  db.collection("HP_Pneumatic")
    .add({
      Company_Name: company,
      Contact_Name: contactName,
      //Location: location,
      Phone_Contact: phoneContact,
      City: city,
      State: state,
      Zip: zip,
      Valve_Size: valveSizeSecc2,
      Brand: brandSecc2,
      Series: seriesSecc2,
      Brand_Actuator_HP: brandActuatorSecc5,
      Model_Actuator_HP: modelActuatorSecc5,
      Valve_Type: typeValveSecc3_HP,
      Actuator_Type: dropdown_HP,
      Actuator_Mode: radioButtonsHP
    })
    // if promise is succesfull
    .then(function(docRef) {
      swal({
        title: `Thanks!! We'll contact you soon`,
        icon: `success`
      });
      console.log("Document written with ID: ", docRef.id);

      firebase.auth().signOut();
    })
    // if promise is reject
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

function postLp() {
  let carousel = document.querySelector("#carousel");
  let loginForm = document.querySelector("#logreg-forms");
  let mainForm = document.querySelector("#mainForm");

  let company = document.querySelector("#inputCompany").value;

  let contactName = document.querySelector("#inputContact").value;
  //let location = document.querySelector("#inputLocation").value;
  let phoneContact = document.querySelector("#inputPhone").value;
  let city = document.querySelector("#inputCity").value;
  let state = document.querySelector("#inputState").value;
  let zip = document.querySelector("#inputZip").value;
  let valveSizeSecc2 = document.querySelector("#inputValveSize").value;
  let brandSecc2 = document.querySelector("#inputBrand").value;
  let seriesSecc2 = document.querySelector("#inputSeries").value;
  let typeValveSecc3 = document.querySelector(
    'input[name="exampleRadios"]:checked'
  ).value;
  let actuatorTypeSecc3 = document.querySelector("#selectSeccion3");
  let dropdown =
    actuatorTypeSecc3.options[actuatorTypeSecc3.selectedIndex].value;
  var brandActuatorSecc6 = document.querySelector("#damageActuatorSecc6").value;
  var modelActuatorSecc6 = document.querySelector("#damageModelNumberSecc6")
    .value;
  let radioButtonsLP = document.querySelector(
    'input[name="radioButtonsSecc6"]:checked'
  ).value;

  mainForm.style.display = "none";
  loginForm.style.display = "none";
  carousel.style.display = "block";

  db.collection("LowP_Pneumatic")
    .add({
      Company_Name: company,
      Contact_Name: contactName,
      //Location: location,
      Phone_Contact: phoneContact,
      City: city,
      State: state,
      Zip: zip,
      Valve_Size: valveSizeSecc2,
      Brand: brandSecc2,
      Series: seriesSecc2,
      Brand_Actuator_LP: brandActuatorSecc6, // #lpBrandDamageActuator
      Model_Actuator_LP: modelActuatorSecc6, // #lpModelDamageActuator
      Valve_Type: typeValveSecc3,
      Actuator_Type: dropdown,
      Actuator_Mode: radioButtonsLP
    })

    .then(function(docRef) {
      swal({
        title: `Thanks!! We'll contact you soon`,
        icon: `success`
      });
      console.log("Document written with ID: ", docRef.id);
      firebase.auth().signOut();
    })
    // if promise is reject
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

function threeWay() {
  let carousel = document.querySelector("#carousel");
  let loginForm = document.querySelector("#logreg-forms");
  let mainForm = document.querySelector("#mainForm");

  let company = document.querySelector("#inputCompany").value;
  let contactName = document.querySelector("#inputContact").value;
  //let location = document.querySelector("#inputLocation").value;
  let phoneContact = document.querySelector("#inputPhone").value;
  let city = document.querySelector("#inputCity").value;
  let state = document.querySelector("#inputState").value;
  let zip = document.querySelector("#inputZip").value;
  let valveSizeSecc2 = document.querySelector("#inputValveSize").value;
  let brandSecc2 = document.querySelector("#inputBrand").value;
  let seriesSecc2 = document.querySelector("#inputSeries").value;
  let typeValveSecc3 = document.querySelector(
    'input[name="exampleRadios"]:checked'
  ).value;
  let actuatorTypeSecc3 = document.querySelector("#selectSeccion3");
  let dropdown =
    actuatorTypeSecc3.options[actuatorTypeSecc3.selectedIndex].value;
  // despes de aqui siguen los elementos de la opcion "ThreeWay"

  //  let brandActuatorSecc6 = document.querySelector("#damageActuatorSecc6").value;
  //  let modelActuatorSecc6 = document.querySelector("#damageModelNumberSecc6").value;

  let radioButtonsArrangements = document.querySelector(
    'input[name="arrangements"]:checked'
  ).value;

  let radioButtonsBonnets = document.querySelector(
    'input[name="BonnetsRadioButtons"]:checked'
  ).value;

  let dimensionBonnetA = document.querySelector("#bonnetA").value;
  let dimensionBonnetB = document.querySelector("#bonnetB").value;
  let dimensionBonnetC = document.querySelector("#bonnetC").value;

  let boltHoles = document.querySelector('input[name="boltHoles"]:checked')
    .value;
  let holeSize = document.querySelector("#holeSize").value;
  let other = document.querySelector("#otherBonnet").value;
  let shaftType = document.querySelector('input[name="radioShaft"]:checked')
    .value;
  let optionShaftD = document.querySelector("#shaftD").value;
  let optionShaftE = document.querySelector("#shaftE").value;
  let optionShaftF = document.querySelector("#shaftF").value;
  let optionShaftG = document.querySelector("#shaftG").value;
  let optionShaftH = document.querySelector("#shaftH").value;
  let actReqSecc1 = document.querySelector('input[name="seccion10"]:checked')
    .value;
  let actReqSecc2 = document.querySelector('input[name="seccion10.1"]:checked')
    .value;
  let actReqSecc3 = document.querySelector('input[name="seccion10.2"]:checked')
    .value;
  let actReqSecc4 = document.querySelector('input[name="seccion10.3"]:checked')
    .value;
  let otherPneumaticOrElec = document.querySelector("#otherInput10").value;
  let controlSignal = document.querySelector(
    'input[name="seccion10.4"]:checked'
  ).value;
  let otherControlSignal = document.querySelector("#otherControlInput10").value;
  let enclosureRequired = document.querySelector(
    'input[name="seccion10.5"]:checked'
  ).value;

  mainForm.style.display = "none";
  loginForm.style.display = "none";
  carousel.style.display = "block";

  db.collection("3_Way")
    .add({
      Company_Name: company,
      Contact_Name: contactName,
      //Location: location,
      Phone_Contact: phoneContact,
      City: city,
      State: state,
      Zip: zip,
      Valve_Size: valveSizeSecc2,
      Brand: brandSecc2,
      Series: seriesSecc2,
      //Brand_Actuator_LP: brandActuatorSecc6,
      //Model_Actuator_LP: modelActuatorSecc6,
      Valve_Type: typeValveSecc3,
      //Actuator_Type: dropdown,
      //Actuator_Mode: radioButtonsLP,
      Arrangement_Type: radioButtonsArrangements,
      Bonnet_Type: radioButtonsBonnets,
      Dimension_Bonnet_A: dimensionBonnetA,
      Dimension_Bonnet_B: dimensionBonnetB,
      Dimension_Bonnet_C: dimensionBonnetC,
      TypeOf_Bolt_Holes: boltHoles,
      Hole_Size: holeSize,
      Other: other,
      Shaft_Type: shaftType,
      Shaft_Dimensions_D: optionShaftD,
      Shaft_Dimensions_E: optionShaftE,
      Shaft_Dimensions_F: optionShaftF,
      Shaft_Dimensions_G: optionShaftG,
      Shaft_Dimensions_H: optionShaftH,
      Actuator_Requirements_Secc_1: actReqSecc1,
      Actuator_Requirements_Secc_2: actReqSecc2, //
      Actuator_Requirements_Secc_3: actReqSecc3,
      Actuator_Requirements_Secc_4: actReqSecc4,
      Pneumatic_Or_Electric: otherPneumaticOrElec,
      Control_Signal: controlSignal,
      Other2: otherControlSignal,
      Enclosure_Required: enclosureRequired
    })

    // if promise is succesfull
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);

      swal({
        title: `Thanks!! We'll contact you soon`,
        icon: `success`
      });

      firebase.auth().signOut();
    })
    // if promise is reject
    .catch(function(error) {
      console.error("Error adding document: ", error.message);
    });
}
