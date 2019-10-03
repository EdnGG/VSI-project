
function postElectric () {

  let carousel = document.querySelector('#carousel')
  let loginForm = document.querySelector("#logreg-forms");
  let mainForm = document.querySelector("#mainForm");

  let company = document.querySelector("#inputCompany").value;
  let contactName = document.querySelector("#inputContact").value;
  let location = document.querySelector("#inputLocation").value;
  let phoneContact = document.querySelector("#inputPhone").value;
  let city = document.querySelector("#inputCity").value;
  let state = document.querySelector("#inputState").value;
  let zip = document.querySelector("#inputZip").value;
  let valveSizeSecc2 = document.querySelector("#inputValveSize").value;
  let brandSecc2 = document.querySelector("#inputBrand").value;
  let seriesSecc2 = document.querySelector("#inputSeries").value;
   
  let typeValveSecc3 = document.querySelector('input[name="exampleRadios"]:checked').value;
  let actuatorTypeSecc3 = document.querySelector('#selectSeccion3');
  let dropdown = actuatorTypeSecc3.options[actuatorTypeSecc3.selectedIndex].value;
           
  let brandActuatorSecc4 = document.querySelector("#inputBrandActuator").value;
  let modelActuatorSecc4 = document.querySelector("#inputModelNumber").value;

  let selectElectricActuator = document.querySelector('#selectSeccion4');
  let electricActuator = selectElectricActuator.options[selectElectricActuator.selectedIndex].value;
            
    swal({
      title: `Thanks!! We'll contact you soon`,
      icon: `success`
    });

    mainForm.style.display = "none";
    loginForm.style.display = "none";
    carousel.style.display = "block";

    db.collection("clients")
      .add({
        Company_Name: company,
        Contact_Name: contactName,
        Location: location,
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
        Electric_Actuator:electricActuator,
               
      })
// if promise is succesfull
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        // mainForm.style.display = 'none'  
        // loginForm.style.display = 'none'  
        // carousel.style.displya = 'block'
      })
// if promise is reject
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
           
};;

function postHp () {
  let carousel = document.querySelector("#carousel");
  let loginForm = document.querySelector("#logreg-forms");
  let mainForm = document.querySelector("#mainForm");

  let company = document.querySelector("#inputCompany").value;
  let contactName = document.querySelector("#inputContact").value;
  let location = document.querySelector("#inputLocation").value;
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
  let actuatorTypeSecc3 = document.querySelector('#selectSeccion3');

  let dropdown = actuatorTypeSecc3.options[actuatorTypeSecc3.selectedIndex].value;
  let brandActuatorSecc5 = document.querySelector("#damageActuatorSecc5").value;
  let modelActuatorSecc5 = document.querySelector("#damageModelNumberSecc5").value;

  let radioButtonsHP = document.querySelector(
    'input[name="radioButtonsSecc5"]:checked'
  ).value;


  swal({
    title: `Thanks!! We'll contact you soon`,
    icon: `success`
  });

  mainForm.style.display = "none";
  loginForm.style.display = "none";
  carousel.style.display = "block";

    db.collection("clients")
      .add({
      Company_Name: company,
      Contact_Name: contactName,
      Location: location,
      Phone_Contact: phoneContact,
      City: city,
      State: state,
      Zip: zip,
      Valve_Size: valveSizeSecc2,
      Brand: brandSecc2,
      Series: seriesSecc2,
      Brand_Actuator_HP: brandActuatorSecc5,
      Model_Actuator_HP: modelActuatorSecc5,
      Valve_Type: typeValveSecc3,
      Actuator_Type: dropdown,
      Actuator_Mode:radioButtonsHP,             
    })
// if promise is succesfull
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
// if promise is reject
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
           
};;

function postLp () {
  let carousel = document.querySelector("#carousel");
  let loginForm = document.querySelector("#logreg-forms");
  let mainForm = document.querySelector("#mainForm");

   let company = document.querySelector("#inputCompany").value;
   let contactName = document.querySelector("#inputContact").value;
   let location = document.querySelector("#inputLocation").value;
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
   let actuatorTypeSecc3 = document.querySelector('#selectSeccion3');
   let dropdown = actuatorTypeSecc3.options[actuatorTypeSecc3.selectedIndex].value;
   let brandActuatorSecc6 = document.querySelector("#damageActuatorSecc6").value;
   let modelActuatorSecc6 = document.querySelector("#damageModelNumberSecc6").value;
   let radioButtonsLP = document.querySelector('input[name="radioButtonsSecc6"]:checked').value;
            
    swal({
      title: `Thanks!! We'll contact you soon`,
      icon: `success`
    });

    mainForm.style.display = "none";
    loginForm.style.display = "none";
    carousel.style.display = "block";

    db.collection("clients")
    .add({
      Company_Name: company,
      Contact_Name: contactName,
      Location: location,
      Phone_Contact: phoneContact,
      City: city,
      State: state,
      Zip: zip,
      Valve_Size: valveSizeSecc2,
      Brand: brandSecc2,
      Series: seriesSecc2,
      Brand_Actuator_LP: brandActuatorSecc6,
      Model_Actuator_LP: modelActuatorSecc6,
      Valve_Type: typeValveSecc3,
      Actuator_Type: dropdown,
      Actuator_Mode:radioButtonsLP,
               
    })
// if promise is succesfull
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('inputCompany').value ='';     document.getElementById("inputContact").value = '';
      document.getElementById("inputLocation").value = '';
      document.getElementById("inputPhone").value = '';
      document.getElementById("inputCity").value = '';
      document.getElementById("inputState").value = '';
      document.getElementById("inputZip").value = '';
      document.getElementById("inputValveSize").value = '';
      document.getElementById("inputBrand").value = '';
      document.getElementById("inputSeries").value = '';
      document.getElementById("damageActuatorSecc6").value = '';
      document.getElementById("damageModelNumberSecc6").value = '';

    })
// if promise is reject
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
           
};;

