console.log("Hello from formResponse.js")

// Carousel seccion

let divTableForm = document.querySelector("#tableOne");
let divTableForm2 = document.querySelector("#tableTwo");
let divTableForm3 = document.querySelector("#tableThree");
let divTableForm4 = document.querySelector("#tableFour");

divTableForm.style.display = "none";
divTableForm2.style.display = "none";
divTableForm3.style.display = "none";
divTableForm4.style.display = "none";

let carouselForm1 = document.querySelector("#carousel11");
let carouselForm2 = document.querySelector("#carousel22");
let carouselForm3 = document.querySelector("#carousel33");
let carouselForm4 = document.querySelector("#carousel44");

// Ends Carousel seccion


// Toggle buttons
let flag = true;
function togle() {
  if (flag === true){
    document.querySelector("#tableOne").style.display = "block";
    document.querySelector("#threeWayRequest").innerHTML = "Hide Table";
    carouselForm1.style.display = 'none';
    // document.querySelector("#carousel1").style.display = "none";
    console.log("flag = 1 ", flag);
    flag = false;
  } else {
    document.querySelector("#tableOne").style.display = "none";
    document.querySelector("#threeWayRequest").innerHTML = "3 Way Requests";
    // document.querySelector("#carousel1").style.display = "block";
    carouselForm1.style.display = 'block';
    console.log("flag = 2", flag);
    flag = true;
  }
}
//
let flag1 = true;
function togle1() {
  if (flag1 == true) {
    document.querySelector("#tableTwo").style.display = "block";
    document.querySelector("#elecActuator").innerHTML = "Hide Table";
    carouselForm2.style.display = "none";

    console.log("flag = 1 ", flag1);
    flag1 = false;
  } else {
    document.querySelector("#tableTwo").style.display = "none";
    document.querySelector("#elecActuator").innerHTML = "Electric Actuator";
    carouselForm2.style.display = "block";

    console.log("flag = 2", flag1);
    flag1 = true;
  }
}
//
let flag2 = true;
function togle2() {
  if (flag2 == true) {
    document.querySelector("#tableThree").style.display = "block";
    document.querySelector("#hpPneumaticBtn").innerHTML = "Hide Table";
    carouselForm3.style.display = "none";

    console.log("flag = 1 ", flag2);
    flag2 = false;
  } else {
    document.querySelector("#tableThree").style.display = "none";
    document.querySelector("#hpPneumaticBtn").innerHTML = "High Pressure Pneumatic";
    carouselForm3.style.display = "block";

    console.log("flag = 2", flag2);
    flag2 = true;
  }
}
//
let flag3 = true;
function togle3() {
  if (flag3 === true) {
    document.querySelector("#tableFour").style.display = "block";
    document.querySelector("#lpPneumaticBtn").innerHTML = "Hide Table";
    carouselForm4.style.display = "none";

    console.log("flag = 1 ", flag3);
    flag3 = false;
  } else {
    document.querySelector("#tableFour").style.display = "none";
    document.querySelector("#lpPneumaticBtn").innerHTML = "Low Pressure Pneumatic";
    carouselForm4.style.display = "block";

    console.log("flag = 2", flag3);
    flag3 = true;
  }
}

// Ends Toggle buttons


// Getting data from firestore to full those tables
let tableForm = document.querySelector("#table");
db.collection("3_Way").onSnapshot((querySnapshot => {
    tableForm.innerHTML = '';
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
      tableForm.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Location}</td>
                <td>${doc.data().Phone_Contact}</td>
                <td>${doc.data().City}</td>
                <td>${doc.data().State}</td>
                <td>${doc.data().Zip}</td>
                <td>${doc.data().Valve_Size}</td>
                <td>${doc.data().Brand}</td>
                <td>${doc.data().Series}</td>
                <td>${doc.data().Valve_Type}</td>
                <td>${doc.data().Arrangement_Type}</td>
                <td>${doc.data().Bonnet_Type}</td>
                <td>${doc.data().Dimension_Bonnet_A}</td>
                <td>${doc.data().Dimension_Bonnet_B}</td>
                <td>${doc.data().Dimension_Bonnet_C}</td>
                <td>${doc.data().TypeOf_Bolt_Holes}</td>
                <td>${doc.data().Hole_Size}</td>
                <td>${doc.data().Other}</td>
                <td>${doc.data().Shaft_Type}</td>
                <td>${doc.data().Shaft_Dimensions_D}</td>
                <td>${doc.data().Shaft_Dimensions_E}</td>
                <td>${doc.data().Shaft_Dimensions_F}</td>
                <td>${doc.data().Shaft_Dimensions_G}</td>
                <td>${doc.data().Shaft_Dimensions_H}</td>
                <td>${doc.data().Actuator_Requirements_Secc_1}</td>
                <td>${doc.data().Actuator_Requirements_Secc_2}</td>
                <td>${doc.data().Actuator_Requirements_Secc_3}</td>
                <td>${doc.data().Actuator_Requirements_Secc_4}</td>
                <td>${doc.data().Pneumatic_Or_Electric}</td>
                <td>${doc.data().Control_Signal}</td>
                <td>${doc.data().Other}</td>
                <td>${doc.data().Enclosure_Required}</td>
                <td>
                  <button class="btn btn-danger" onclick="deleteArrangements('${
                    doc.id
                  }')">Delete</button>
                </td>
                <td>
                  <button class="btn btn-warning" onclick="editArrangements('${
                    doc.id
                  }')">Edit</button>
                </td>
        </tr>
      `;
});
}));

let tableForm2 = document.querySelector("#table2");
db.collection("Electric_Actuator").onSnapshot(querySnapshot => {
  tableForm2.innerHTML = "";
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
    tableForm2.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Location}</td>
                <td>${doc.data().Phone_Contact}</td>
                <td>${doc.data().City}</td>
                <td>${doc.data().State}</td>
                <td>${doc.data().Zip}</td>
                <td>${doc.data().Valve_Size}</td>
                <td>${doc.data().Brand}</td>
                <td>${doc.data().Series}</td>
                <td>${doc.data().Brand_Electric_Actuator}</td>
                <td>${doc.data().Model_Electric_Actuator}</td>
                <td>${doc.data().Valve_Type}</td>
                <td>${doc.data().Actuator_Type}</td>
                <td>${doc.data().Electric_Actuator}</td>
                <td>
                  <button class="btn btn-danger" onclick="deleteElectricAct('${
                    doc.id
                  }')">Delete</button>
                </td>
                <td>
                  <button class="btn btn-warning" onclick="editElectricAct('${
                    doc.id
                  }')">Edit</button>
                </td>
                
        </tr>
      
      `;
  });
});

  
let tableForm3 = document.querySelector("#table3");
db.collection("HP_Pneumatic").onSnapshot(querySnapshot => {
  tableForm3.innerHTML = "";
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
    tableForm3.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Location}</td>
                <td>${doc.data().Phone_Contact}</td>
                <td>${doc.data().City}</td>
                <td>${doc.data().State}</td>
                <td>${doc.data().Zip}</td>
                <td>${doc.data().Valve_Size}</td>
                <td>${doc.data().Brand}</td>
                <td>${doc.data().Series}</td>
                <td>${doc.data().Brand_Actuator_HP}</td>
                <td>${doc.data().Model_Actuator_HP}</td>
                <td>${doc.data().Valve_Type}</td>
                <td>${doc.data().Actuator_Type}</td>
                <td>${doc.data().Actuator_Mode}</td>
                <td>
                  <button class="btn btn-danger" onclick="deleteHighPressure('${
                    doc.id
                  }')">Delete</button>
                </td>
                <td>
                  <button class="btn btn-warning" onclick="editHighPressure('${
                    doc.id
                  }')">Edit</button>
                </td>
                
        </tr>
      
      `;
  });
});

let tableForm4 = document.querySelector("#table4");
db.collection("LowP_Pneumatic").onSnapshot(querySnapshot => {
  tableForm4.innerHTML = "";
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
    tableForm4.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Location}</td>
                <td>${doc.data().Phone_Contact}</td>
                <td>${doc.data().City}</td>
                <td>${doc.data().State}</td>
                <td>${doc.data().Zip}</td>
                <td>${doc.data().Valve_Size}</td>
                <td>${doc.data().Brand}</td>
                <td>${doc.data().Series}</td>
                <td>${doc.data().Brand_Actuator_LP}</td>
                <td>${doc.data().Model_Actuator_LP}</td>
                <td>${doc.data().Valve_Type}</td>
                <td>${doc.data().Actuator_Type}</td>
                <td>${doc.data().Actuator_Mode}</td>
                <td>
                  <button class="btn btn-danger" onclick="deleteLowPressure('${
                    doc.id
                  }')">Delete</button>
                </td>
                <td>
                  <button class="btn btn-warning" onclick="editLowPressure('${
                    doc.id
                  }','${doc.data().Company_Name}','${doc.data().Contact_Name}',
                  '${doc.data().Location}','${doc.data().Phone_Contact}',
                  '${doc.data().City}','${doc.data().State}',
                  '${doc.data().Zip}','${doc.data().Valve_Size}',
                  '${doc.data().Brand}','${doc.data().Series}',
                  '${doc.data().Brand_Actuator_LP}',
                  '${doc.data().Model_Actuator_LP}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Actuator_Mode}')">Edit</button>
                </td>

        </tr>
      
      `;// En el boton con la funcion que esta dentro del metodo "onclick" contiene el valor de las variables que se encuentran en la DB 
  });
});

// Ends Getting data from firestore to full those tables

//Low Pressure Pneumatic Seccion 



// Edit Seccion
var modalContainer = document.querySelector('#modal');
function editLowPressure(id,company,contactName,location,phoneContact,city,state,zip,valveSizeSecc2,brandSecc2,seriesSecc2,brandActuatorSecc6,modelActuatorSecc6,typeValveSecc3,dropdown,radioButtonsLP) {

var modal1 = `<div class=" mb-4 mt-4 pb-4 pt-4 ml-auto mr-auto d-flex container justify-content-center" >
    <form id="mainForm" class="mb-2 mt-2 pb-2 pt-2 margin-left ml-auto mr-auto rounded">
        <legend class="d-flex justify-content-center" >Valve Retrofit Form</legend>
        
<!-- Starts costumer information form -->
        <fieldset id="seccion1">
            <div class="row">
                <p class="col text-center ">Costumer Information</p>
            </div>
            <div class="form-row " >
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group" >
                    <label for="inputCompanyLabel">Company:</label>
                    <input type="text" class="form-control" id="lpCompany" placeholder="Company name" required>
                </div>
                <div class="form-group  col-md-6 ">
                    <label for="inputContactLabel">Contact</label>
                    <input type="text" class="form-control" id="lpName" placeholder="Contact number" required>
                </div>
            </div>
            <div class="form-group">
                <label for="inputLocationLabel">Location</label>
                <input type="text" class="form-control" id="lpLocation" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputPhoneLabel">Phone Number</label>
                <input type="number" class="form-control" id="lpPhone" placeholder="678 -123-4567" required>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCityLabel">City</label>
                    <input type="text" class="form-control" id="lpCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputStateLabel">State</label>
                    <input type="text" class="form-control" id="lpState">

                </div>
                <div class="form-group col-md-2">
                    <label for="inputZipLabel">Zip</label>
                    <input type="number" class="form-control" id="lpZip">
                </div>
            </div>
    </fieldset>
    <fieldset id="seccion2">
            <div class="row">
                <p class="col text-center ">Valve Information</p>
            </div>
            <div class="form-row">
                <div class="col-md-6 ">
                    <label for="valveSize">Valve Size</label>
                    <input type="text" class="form-control" id="lpValveSize" placeholder="Valve size" required>
                </div>
                <div class="col-md-6 ">
                    <label for="Brand">Brand</label>
                    <input type="text" class="form-control" id="lpBrand" placeholder="Brand" required>
                </div>
            </div>
            <div class="form-group">
                <label for="series">Series</label>
                <input type="text" class="form-control" id="lpSeries">
            </div>
    
        </fieldset>

<!--Start form seccion 3  -->

        <fieldset id="seccion3" class="text-center">
            <div class="row text-center">
                <p class="col text-center ">Valve Type</p>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="exampleRadios" id="valve2way" value="2way" >
                <label class="form-check-label text-center" for="exampleRadios1">
                2 way </label>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="exampleRadios" id="valve3way" value="3way" >
                <label class="form-check-label text-center" for="exampleRadios1">
            3 way </label>
            </div>
            <br><br>

        <fieldset class="text-center">
            <div class="row text-center">
                <p class="col text-center ">Actuator Type</p>
            </div>

            <!-- <label for="size">Model:</label> -->
            <select id="selectSeccion3" class="text-center" name="select-seccion-3">
                <option  value="select" selected>Select one</option>
                <option  value="Electric" id="electric">Electric Actuator</option>
                <option  value="HP" id="hp">High Pressure Pneumatic</option>
                <option  value="LP" id="lp">Low Pressure Pneumatic</option>
            </select>

        </fieldset>
        <br><br>
           
        </fieldset>
<fieldset class="text-center" id="seccion6">
            <div class="row text-center">
                <legend class="justify-content-center legend1">Low Pressure Pneumatic</legend>
            </div>
            <div class="form-group">
                <label for="brand-damage-actuator">Brand</label>
                <input type="text" class="form-control" id="lpBrandDamageActuator">
                <label for="model-number-actuator">Model Number</label>
                <input type="text" class="form-control" id="lpModelDamageActuator">

            </div>

            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="lp2positions"
                value="lp-2positions">
                <label class="form-check-label text-center">
                2 Positions </label>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="lpModulating"
                value="lpModulating">
                <label class="form-check-label text-center">
                Modulating
                </label>
            </div>
            <br>

    <div class="col text-center">
        <button id="btnSeccion4to6" class="btn btn-primary" >Submit</button>
    </div>
    </fieldset>
`;

modalContainer.innerHTML = modal1;


// All ids from the Low Pressure Actuators table <td>

  document.querySelector('#lpCompany').value = company; 
  document.querySelector("#lpName").value = contactName;
  document.querySelector("#lpLocation").value =location;
  document.querySelector("#lpPhone").value = phoneContact;
  document.querySelector("#lpCity").value = city;
  document.querySelector("#lpState").value = state;
  document.querySelector("#lpZip").value = zip;
  document.querySelector("#lpValveSize").value = valveSizeSecc2;
  document.querySelector("#lpBrand").value = brandSecc2;
  document.querySelector("#lpSeries").value = seriesSecc2;

  // document.querySelector("#lpBrandDamageActuator").value = brandActuatorSecc6;
  // document.querySelector("#lpModelDamageActuator").value = modelActuatorSecc6;

  // document.querySelector("#lpValveType").value = `${typeValveSecc3}`;
  // document.querySelector("#lpActuatorType").value = `${dropdown}`;
  // document.querySelector("#lpActuatorMode").value = `${radioButtonsLP}`;

  
  var washingtonRef = db.collection("LowP_Pneumatic").doc(id);
  // Set the "capital" field of the city 'DC'
  return washingtonRef
    .update({
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
      // Valve_Type: typeValveSecc3,
      // Actuator_Type: dropdown,
      // Actuator_Mode: radioButtonsLP
    })
    .then(function() {
      console.log("Document successfully updated!");
      // modalContainer.innerHTML = modal;
      // modalContainer.style.display = "block";
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

// Delete Seccion
function deleteLowPressure(id) {
  // Delete Data Low Pressure Pneumatic Actuator
db.collection("LowP_Pneumatic")
  .doc(id)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!");
  })
  .catch(function(error) {
    console.error("Error removing document: ", error);
  });
}

function deleteHighPressure(id) {
  // Delete Data High Pressure Pneumatic Actuator
db.collection("HP_Pneumatic")
  .doc(id)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!");
  })
  .catch(function(error) {
    console.error("Error removing document: ", error);
  });
}

function deleteElectricAct(id) {
  // Delete Data Electric Actuator
db.collection("Electric_Actuator")
  .doc(id)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!");
  })
  .catch(function(error) {
    console.error("Error removing document: ", error);
  });
}

function deleteArrangements(id) {
  // Delete Data 3 way Arrangemets
db.collection("3_Way")
  .doc(id)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!");
  })
  .catch(function(error) {
    console.error("Error removing document: ", error);
  });
}



function editHighPressure(id) {
  var washingtonRef = db.collection("HP_Pneumatic").doc(id);
  // Set the "capital" field of the city 'DC'
  return washingtonRef
    .update({
      capital: true
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

function editElectricAct(id) {
  var washingtonRef = db.collection("Electric_Actuator").doc(id);
  // Set the "capital" field of the city 'DC'
  return washingtonRef
    .update({
      capital: true
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

function editArrangements(id) {
  var washingtonRef = db.collection("3_Way").doc(id);
  // Set the "capital" field of the city 'DC'
  return washingtonRef
    .update({
      capital: true
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}
  

  

  