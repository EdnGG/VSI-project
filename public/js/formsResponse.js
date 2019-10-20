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
                  <button class="btn btn-warning" onclick="editArrangements(
                    '${doc.id}',
                    '${doc.data().Company_Name}',
                    '${doc.data().Contact_Name}',
                    '${doc.data().Location}',
                    '${doc.data().Phone_Contact}',
                    '${doc.data().City}',
                    '${doc.data().State}',
                    '${doc.data().Zip}',
                    '${doc.data().Valve_Size}',
                    '${doc.data().Brand}',
                    '${doc.data().Series}',
                    '${doc.data().Valve_Type}',
                    '${doc.data().Arrangement_Type}',
                    '${doc.data().Bonnet_Type}',
                    '${doc.data().Dimension_Bonnet_A}',
                    '${doc.data().Dimension_Bonnet_B}',
                    '${doc.data().Dimension_Bonnet_C}',
                    '${doc.data().TypeOf_Bolt_Holes}',
                    '${doc.data().Hole_Size}',
                    '${doc.data().Other}',
                    '${doc.data().Shaft_Type}',
                    '${doc.data().Shaft_Dimensions_D}',
                    '${doc.data().Shaft_Dimensions_E}',
                    '${doc.data().Shaft_Dimensions_F}',
                    '${doc.data().Shaft_Dimensions_G}',
                    '${doc.data().Shaft_Dimensions_H}',
                    '${doc.data().Actuator_Requirements_Secc_1}',
                    '${doc.data().Actuator_Requirements_Secc_2}',
                    '${doc.data().Actuator_Requirements_Secc_3}',
                    '${doc.data().Actuator_Requirements_Secc_4}',
                    '${doc.data().Pneumatic_Or_Electric}',
                    '${doc.data().Control_Signal}', 
                    '${doc.data().Other2}',
                    '${doc.data().Enclosure_Required}')">
                    Edit
                </button>
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
                  <button class="btn btn-warning" onclick="editElectricActuator('${
                    doc.id
                  }','${doc.data().Company_Name}','${doc.data().Contact_Name}',
                  '${doc.data().Location}','${doc.data().Phone_Contact}',
                  '${doc.data().City}','${doc.data().State}',
                  '${doc.data().Zip}','${doc.data().Valve_Size}',
                  '${doc.data().Brand}','${doc.data().Series}',
                  '${doc.data().Brand_Electric_Actuator}',
                  '${doc.data().Model_Electric_Actuator}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Electric_Actuator}')">Edit
                  </button>
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
                  <button class="btn btn-warning" onclick="editLowPressure('${doc.id}','${doc.data().Company_Name}','${doc.data().Contact_Name}',
                  '${doc.data().Location}','${doc.data().Phone_Contact}',
                  '${doc.data().City}','${doc.data().State}',
                  '${doc.data().Zip}','${doc.data().Valve_Size}',
                  '${doc.data().Brand}','${doc.data().Series}',
                  '${doc.data().Brand_Actuator_LP}',
                  '${doc.data().Model_Actuator_LP}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Actuator_Mode}')">Edit
                  </button>
                </td>

        </tr>
      
      `;// En el boton con la funcion que esta dentro del metodo "onclick" contiene el valor de las variables que se encuentran en la DB 
  });
});

// Ends Getting data from firestore to full those tables



// Edit Seccion
var modalContainer = document.querySelector('#modal');
function editLowPressure(id,
  company,
  contactName,
  location,
  phoneContact,
  city,
  state,
  zip,
  valveSizeSecc2,
  brandSecc2,
  seriesSecc2,
  brandActuatorSecc6,
  modelActuatorSecc6,
  typeValveSecc3,
  dropdown,
  radioButtonsLP) {

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
            <br><br>

    <div class="col text-center">
        <button type="button" id="editLowPressureActuator" class="btn btn-primary" >Edit</button>
    </div>
    </fieldset>
`;

modalContainer.innerHTML = modal1;

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

  let editButtonLp = document.querySelector("#editLowPressureActuator");

  editButtonLp.onclick = function() {

    var washingtonRef = db.collection("LowP_Pneumatic").doc(id);

    var companylp = document.querySelector("#lpCompany").value;
    var contactNamelp = document.querySelector("#lpName").value;
    var locationlp = document.querySelector("#lpLocation").value;
    var phoneContactlp = document.querySelector("#lpPhone").value;
    var citylp = document.querySelector("#lpCity").value;
    var statelp = document.querySelector("#lpState").value;
    var ziplp = document.querySelector("#lpZip").value;
    var valveSizelp = document.querySelector("#lpValveSize").value;
    var brandlp = document.querySelector("#lpBrand").value;
    var serieslp = document.querySelector("#lpSeries").value;

    return washingtonRef
      .update({
        Company_Name: companylp,     //company,
        Contact_Name: contactNamelp,       //contactName,
        Location: locationlp,      //location,
        Phone_Contact: phoneContactlp,     //phoneContact,
        City: citylp,     //city,
        State: statelp,      //state,
        Zip: ziplp,    //zip,
        Valve_Size: valveSizelp,       //valveSizeSecc2,
        Brand: brandlp,      //brandSecc2,
        Series: serieslp,//seriesSecc2,
        Brand_Actuator_LP: brandlp,     //brandActuatorSecc6,
        Model_Actuator_LP: serieslp,    //modelActuatorSecc6
        // Valve_Type: typeValveSecc3,
        // Actuator_Type: dropdown,
        // Actuator_Mode: radioButtonsLP
      })
      .then(function() {
        console.log("Document successfully updated!");

        document.querySelector("#lpCompany").value = '';
        document.querySelector("#lpName").value = '';
        document.querySelector("#lpLocation").value = '';
        document.querySelector("#lpPhone").value = '';
        document.querySelector("#lpCity").value = '';
        document.querySelector("#lpState").value = '';
        document.querySelector("#lpZip").value = '';
        document.querySelector("#lpValveSize").value = '';
        document.querySelector("#lpBrand").value = '';
        document.querySelector("#lpSeries").value = '';
        modalContainer.style.display = "none";
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });

  }

  // document.querySelector("#lpBrandDamageActuator").value = brandActuatorSecc6;
  // document.querySelector("#lpModelDamageActuator").value = modelActuatorSecc6;

  // document.querySelector("#lpValveType").value = `${typeValveSecc3}`;
  // document.querySelector("#lpActuatorType").value = `${dropdown}`;
  // document.querySelector("#lpActuatorMode").value = `${radioButtonsLP}`;

  
  
}

function editHighPressure(
  id,
  company,
  contactName,
  location,
  phoneContact,
  city,
  state,
  zip,
  valveSizeSecc2,
  brandSecc2,
  seriesSecc2,
  brandActuatorSecc6,
  modelActuatorSecc6,
  typeValveSecc3,
  dropdown,
  radioButtonsLP
) {
  var modal2 = `<div class=" mb-4 mt-4 pb-4 pt-4 ml-auto mr-auto d-flex container justify-content-center" >
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
                    <input type="text" class="form-control" id="hpCompany" placeholder="Company name" required>
                </div>
                <div class="form-group  col-md-6 ">
                    <label for="inputContactLabel">Contact</label>
                    <input type="text" class="form-control" id="hpName" placeholder="Contact number" required>
                </div>
            </div>
            <div class="form-group">
                <label for="inputLocationLabel">Location</label>
                <input type="text" class="form-control" id="hpLocation" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputPhoneLabel">Phone Number</label>
                <input type="number" class="form-control" id="hpPhone" placeholder="678 -123-4567" required>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCityLabel">City</label>
                    <input type="text" class="form-control" id="hpCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputStateLabel">State</label>
                    <input type="text" class="form-control" id="hpState">

                </div>
                <div class="form-group col-md-2">
                    <label for="inputZipLabel">Zip</label>
                    <input type="number" class="form-control" id="hpZip">
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
                    <input type="text" class="form-control" id="hpValveSize" placeholder="Valve size" required>
                </div>
                <div class="col-md-6 ">
                    <label for="Brand">Brand</label>
                    <input type="text" class="form-control" id="hpBrand" placeholder="Brand" required>
                </div>
            </div>
            <div class="form-group">
                <label for="series">Series</label>
                <input type="text" class="form-control" id="hpSeries">
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
                <legend class="justify-content-center legend1">High Pressure Pneumatic</legend>
            </div>
            <div class="form-group">
                <label for="brand-damage-actuator">Brand</label>
                <input type="text" class="form-control" id="hpBrandDamageActuator">
                <label for="model-number-actuator">Model Number</label>
                <input type="text" class="form-control" id="hpModelDamageActuator">

            </div>

            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="hp2positions"
                value="lp-2positions">
                <label class="form-check-label text-center">
                2 Positions </label>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="hpModulating"
                value="lpModulating">
                <label class="form-check-label text-center">
                Modulating
                </label>
            </div>
            <br><br>

    <div class="col text-center">
        <button type="button" id="editHighPressureActuator" class="btn btn-primary" >Edit</button>
    </div>
    </fieldset>
`;

  modalContainer.innerHTML = modal2;

  document.querySelector("#hpCompany").value = company;
  document.querySelector("#hpName").value = contactName;
  document.querySelector("#hpLocation").value = location;
  document.querySelector("#hpPhone").value = phoneContact;
  document.querySelector("#hpCity").value = city;
  document.querySelector("#hpState").value = state;
  document.querySelector("#hpZip").value = zip;
  document.querySelector("#hpValveSize").value = valveSizeSecc2; // line 635
  document.querySelector("#hpBrand").value = brandSecc2; // line 639
  document.querySelector("#hpSeries").value = seriesSecc2; // line 644

  let editButtonHp = document.querySelector("#editHighPressureActuator");

  editButtonHp.onclick = function() {
    var washingtonRef = db.collection("HP_Pneumatic").doc(id);

    var companyhp = document.querySelector("#hpCompany").value;
    var contactNamehp = document.querySelector("#hpName").value;
    var locationhp = document.querySelector("#hpLocation").value;
    var phoneContacthp = document.querySelector("#hpPhone").value;
    var cityhp = document.querySelector("#hpCity").value;
    var statehp = document.querySelector("#hpState").value;
    var ziphp = document.querySelector("#hpZip").value;
    var valveSizehp = document.querySelector("#hpValveSize").value;
    var brandhp = document.querySelector("#hpBrand").value;
    var serieshp = document.querySelector("#hpSeries").value;

    return washingtonRef
      .update({
        Company_Name: companyhp, //company,
        Contact_Name: contactNamehp, //contactName,
        Location: locationhp, //location,
        Phone_Contact: phoneContacthp, //phoneContact,
        City: cityhp, //city,
        State: statehp, //state,
        Zip: ziphp, //zip,
        Valve_Size: valveSizehp, //valveSizeSecc2,
        Brand: brandhp, //brandSecc2,
        Series: serieshp, //seriesSecc2,
        Brand_Actuator_LP: brandhp, //brandActuatorSecc6,
        Model_Actuator_LP: serieshp //modelActuatorSecc6
        // Valve_Type: typeValveSecc3,
        // Actuator_Type: dropdown,
        // Actuator_Mode: radioButtonsLP
      })
      .then(function() {
        console.log("Document successfully updated!");

        document.querySelector("#hpCompany").value = "";
        document.querySelector("#hpName").value = "";
        document.querySelector("#hpLocation").value = "";
        document.querySelector("#hpPhone").value = "";
        document.querySelector("#hpCity").value = "";
        document.querySelector("#hpState").value = "";
        document.querySelector("#hpZip").value = "";
        document.querySelector("#hpValveSize").value = "";
        document.querySelector("#hpBrand").value = "";
        document.querySelector("#hpSeries").value = "";
        modalContainer.style.display = "none";
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  // document.querySelector("#lpBrandDamageActuator").value = brandActuatorSecc6;
  // document.querySelector("#lpModelDamageActuator").value = modelActuatorSecc6;

  // document.querySelector("#lpValveType").value = `${typeValveSecc3}`;
  // document.querySelector("#lpActuatorType").value = `${dropdown}`;
  // document.querySelector("#lpActuatorMode").value = `${radioButtonsLP}`;
}

function editElectricActuator(
  id,
  company,
  contactName,
  location,
  phoneContact,
  city,
  state,
  zip,
  valveSizeSecc2,
  brandSecc2,
  seriesSecc2,
  brandActuatorSecc6,
  modelActuatorSecc6,
  typeValveSecc3,
  dropdown,
  radioButtonsLP
) {
  var modal3 = `<div class=" mb-4 mt-4 pb-4 pt-4 ml-auto mr-auto d-flex container justify-content-center" >
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
                    <input type="text" class="form-control" id="eACompany" placeholder="Company name" required>
                </div>
                <div class="form-group  col-md-6 ">
                    <label for="inputContactLabel">Contact</label>
                    <input type="text" class="form-control" id="eAName" placeholder="Contact number" required>
                </div>
            </div>
            <div class="form-group">
                <label for="inputLocationLabel">Location</label>
                <input type="text" class="form-control" id="eALocation" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputPhoneLabel">Phone Number</label>
                <input type="number" class="form-control" id="eAPhone" placeholder="678 -123-4567" required>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCityLabel">City</label>
                    <input type="text" class="form-control" id="eACity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputStateLabel">State</label>
                    <input type="text" class="form-control" id="eAState">

                </div>
                <div class="form-group col-md-2">
                    <label for="inputZipLabel">Zip</label>
                    <input type="number" class="form-control" id="eAZip">
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
                    <input type="text" class="form-control" id="eAValveSize" placeholder="Valve size" required>
                </div>
                <div class="col-md-6 ">
                    <label for="Brand">Brand</label>
                    <input type="text" class="form-control" id="eABrand" placeholder="Brand" required>
                </div>
            </div>
            <div class="form-group">
                <label for="series">Series</label>
                <input type="text" class="form-control" id="eASeries">
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
                <legend class="justify-content-center legend1">High Pressure Pneumatic</legend>
            </div>
            <div class="form-group">
                <label for="brand-damage-actuator">Brand</label>
                <input type="text" class="form-control" id="eABrandDamageActuator">
                <label for="model-number-actuator">Model Number</label>
                <input type="text" class="form-control" id="eAModelDamageActuator">

            </div>

            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="hp2positions"
                value="lp-2positions">
                <label class="form-check-label text-center">
                2 Positions </label>
            </div>
            <div class="form-check-inline text-center">
                <input class="form-check-input text-center" type="radio" name="radioButtonsSecc6" id="hpModulating"
                value="lpModulating">
                <label class="form-check-label text-center">
                Modulating
                </label>
            </div>
            <br><br>

    <div class="col text-center">
        <button type="button" id="editElectricActuator" class="btn btn-primary" >Edit</button>
    </div>
    </fieldset>
`;

  modalContainer.innerHTML = modal3;

  document.querySelector("#eACompany").value = company;
  document.querySelector("#eAName").value = contactName;
  document.querySelector("#eALocation").value = location;
  document.querySelector("#eAPhone").value = phoneContact;
  document.querySelector("#eACity").value = city;
  document.querySelector("#eAState").value = state;
  document.querySelector("#eAZip").value = zip;
  document.querySelector("#eAValveSize").value = valveSizeSecc2; // line 635
  document.querySelector("#eABrand").value = brandSecc2; // line 639
  document.querySelector("#eASeries").value = seriesSecc2; // line 644

  let editButtonEa = document.querySelector("#editElectricActuator");

  editButtonEa.onclick = function() {
    var washingtonRef = db.collection("Electric_Actuator").doc(id);

    var companyEa = document.querySelector("#eACompany").value;
    var contactNameEa = document.querySelector("#eAName").value;
    var locationEa = document.querySelector("#eALocation").value;
    var phoneContactEa = document.querySelector("#eAPhone").value;
    var cityEa = document.querySelector("#eACity").value;
    var stateEa = document.querySelector("#eAState").value;
    var zipEa = document.querySelector("#eAZip").value;
    var valveSizeEa = document.querySelector("#eAValveSize").value;
    var brandEa = document.querySelector("#eABrand").value;
    var seriesEa = document.querySelector("#eASeries").value;

    return washingtonRef
      .update({
        Company_Name: companyEa, //company,
        Contact_Name: contactNameEa, //contactName,
        Location: locationEa, //location,
        Phone_Contact: phoneContactEa, //phoneContact,
        City: cityEa, //city,
        State: stateEa, //state,
        Zip: zipEa, //zip,
        Valve_Size: valveSizeEa, //valveSizeSecc2,
        Brand: brandEa, //brandSecc2,
        Series: seriesEa, //seriesSecc2,
        Brand_Actuator_LP: brandEa, //brandActuatorSecc6,
        Model_Actuator_LP: seriesEa //modelActuatorSecc6
        // Valve_Type: typeValveSecc3,
        // Actuator_Type: dropdown,
        // Actuator_Mode: radioButtonsLP
      })
      .then(function() {
        console.log("Document successfully updated!");

        document.querySelector("#eACompany").value = "";
        document.querySelector("#eAName").value = "";
        document.querySelector("#eALocation").value = "";
        document.querySelector("#eAPhone").value = "";
        document.querySelector("#eACity").value = "";
        document.querySelector("#eAState").value = "";
        document.querySelector("#eAZip").value = "";
        document.querySelector("#eAValveSize").value = "";
        document.querySelector("#eABrand").value = "";
        document.querySelector("#eASeries").value = "";
        modalContainer.style.display = "none";
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  // document.querySelector("#lpBrandDamageActuator").value = brandActuatorSecc6;
  // document.querySelector("#lpModelDamageActuator").value = modelActuatorSecc6;

  // document.querySelector("#lpValveType").value = `${typeValveSecc3}`;
  // document.querySelector("#lpActuatorType").value = `${dropdown}`;
  // document.querySelector("#lpActuatorMode").value = `${radioButtonsLP}`;
}

function editArrangements(
  id,
  company,
  contactName,
  location,
  phoneContact,
  city,
  state,
  zip,
  valveSizeSecc2,
  brandSecc2,
  seriesSecc2,
  typeValveSecc3,
  radioButtonsArrangements,
  radioButtonsBonnets,
  dimensionBonnetA,
  dimensionBonnetB,
  dimensionBonnetC,
  boltHoles,
  holeSize,
  other,
  shaftType,
  optionShaftD,
  optionShaftE,
  optionShaftF,
  optionShaftG,
  optionShaftH,
  actReqSecc1,
  actReqSecc2,
  actReqSecc3,
  actReqSecc4,
  otherPneumaticOrElec,
  controlSignal,
  otherControlSignal,
   enclosureRequired,) {

  var modal4 = `<div class=" mb-4 mt-4 pb-4 pt-4 ml-auto mr-auto d-flex container justify-content-center" >
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
                    <input type="text" class="form-control" id="arrangementsCompany" placeholder="Company name" required>
                </div>
                <div class="form-group  col-md-6 ">
                    <label for="inputContactLabel">Contact</label>
                    <input type="text" class="form-control" id="arrangementsName" placeholder="Contact number" required>
                </div>
            </div>
            <div class="form-group">
                <label for="inputLocationLabel">Location</label>
                <input type="text" class="form-control" id="arrangementsLocation" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputPhoneLabel">Phone Number</label>
                <input type="number" class="form-control" id="arrangementsPhone" placeholder="678 -123-4567" required>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCityLabel">City</label>
                    <input type="text" class="form-control" id="arrangementsCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputStateLabel">State</label>
                    <input type="text" class="form-control" id="arrangementsState">

                </div>
                <div class="form-group col-md-2">
                    <label for="inputZipLabel">Zip</label>
                    <input type="number" class="form-control" id="arrangementsZip">
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
                    <input type="text" class="form-control" id="arrangementsValveSize" placeholder="Valve size" required>
                </div>
                <div class="col-md-6 ">
                    <label for="Brand">Brand</label>
                    <input type="text" class="form-control" id="arrangementsBrand" placeholder="Brand" required>
                </div>
            </div>
            <div class="form-group">
                <label for="series">Series</label>
                <input type="text" class="form-control" id="arrangementsSeries">
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


        <fieldset class="text-center" id="seccion7">
            <div class="col-12 row text-center">
                <legend class="justify-content-center">Three Way Arrangements</legend><br><br>
                <legend class="justify-content-center">Top View</legend>
            </div>

            <div class="col-12 form-row">
                <table class="table table-hover table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Arrangement</th>
                        <th scope="col">Actuated Valve</th>
                        <th scope="col">Normally Closed</th>
                        <th scope="col">Normally Open</th>

                    </tr>
                    </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>Valve A</td>
                            <td>Valve A</td>
                            <td>Valve B</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                            <td>Valve A</td>
                            <td>Valve A</td>
                            <td>Valve c</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                            <td>Valve B</td>
                            <td>Valve B</td>
                            <td>Valve C</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                            <td>Valve B</td>
                            <td>Valve B</td>
                            <td>Valve A</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                            <td>Valve C</td>
                            <td>Valve C</td>
                            <td>Valve B</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                            <td>Valve C</td>
                            <td>Valve C</td>
                            <td>Valve A</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div class="container-fluid">   
            <div class="form-row">
                <figure class="col-lg-4">
                    <img class="img-rounded img-responsive center-block" src="./imagenes/a1.png" alt="Test"><br><br>
                    <label class="form-check-label text-center">
                    Arrangement 1 </label><br>
                    <input class="form-check-input text-center" type="radio" name="arrangements" id="a1"
                    value="Arrangement_1" checked>
                </figure>
                <br>
        
                <figure class="col-lg-4">
                    <img class="img- rounded img-responsive center-block" src="./imagenes/a2.png" alt="Test"><br><br>
                    <label class="form-check-label text-center">
                    Arrangement 2</label><br>
                    <input class="form-check-input text-center" type="radio" name="arrangements" id="a2" value="Arrangement_2">
                </figure>
                <br>

                <figure class="col-lg-4">
                    <img class="img- rounded img-responsive center-block" src="./imagenes/a3.png" alt="Test"><br><br>
                    <label class="form-check-label text-center">
                    Arrangement 3 </label><br>
                    <input class="form-check-input text-center" type="radio" name="arrangements" id="a3" value="Arrangement_3">
                </figure>
<br>

            </div>
            </div>
            <br><br><br>

            <div class="container-fluid">
                <div class="row">
                    <figure class="col-lg-4">
                        <img class="img-responsive center-block" src="./imagenes/a1.png" alt="Test"><br><br>
                        <label class="form-check-label text-center">
                        Arrangement 4
                        </label><br>
                        <input class="form-check-input text-center" type="radio" name="arrangements" id="a4" value="Arrangement_4">
                    </figure>
    
                    <figure class="col-lg-4">
                        <img class="img-responsive center-block" src="./imagenes/a2.png" alt="Test"><br><br>
                        <label class="form-check-label text-center">
                        Arrangement 5 </label><br>
                        <input class="form-check-input text-center" type="radio" name="arrangements" id="a5" value="Arrangement_5">
                    </figure>
    
                    <figure class="col-lg-4">
                        <img class="img-responsive center-block" src="./imagenes/a3.png" alt="Test"><br><br>
                        <label class="form-check-label text-center">
                        Arrangement 6 </label><br>
                        <input class="form-check-input text-center" type="radio" name="arrangements" id="a6" value="Arrangement_6">
                    </figure>
                </div>
            </div><br>
        </fieldset>

<!-- Ends form Seccion 7  -->

<!-- Start form Seccion 8  -->

<fieldset class="text-center" id="seccion8">
    <!-- <div class="row text-center"> -->
    <div class="form-row d-flex row justify-content-md-center">
        <legend class=" justify-content-center legend1">Bonnet Information</legend>
    </div><br>

<div class=" d-flex row justify-content-md-center">
    <div class="col-lg-auto  ">
        <figure class="col-lg-4 justify-content-center">
            <img class="img-rounded img-responsive rounded" src="./imagenes/bonnet1 (1).png" alt="Bonnet_1"><br>
            <br>
            <input class="form-check-input text-center form-check-inline" type="radio" name="BonnetsRadioButtons" id="bonnet1" value="Bonnet_1">
        </figure>
        <br>
    </div>

    <div class="col-lg-auto ">
        <figure class="col-lg-4 justify-content-center">
            <img class="img-rounded img-responsive rounded" src="./imagenes/bonnet2 (1).png" alt="Bonnet_2">
            <br><br>
            <input class="form-check-input text-center form-check-inline" type="radio" name="BonnetsRadioButtons" id="bonnet2" value="Bonnet_2">
        </figure>
        <br>
    </div>
    <div class="col-lg-auto ">
        <figure class="col-lg-4 justify-content-center">
            <img class="img-rounded img-responsive rounded" src="./imagenes/bonnet3 (1).png" alt="Bonnet_3">
            <br><br>
            <input class="form-check-input text-center form-check-inline" type="radio" name="BonnetsRadioButtons" id="bonnet3" value="Bonnet_3">
        </figure>
        <br>
    </div>
    
    
</div> <br>

<div class="row form-group justify-content-md-center">
    <legend class=" justify-content-center legend1">Dimensions (Closets 0.001")</legend>
</div>
<div class="row form-group justify-content-md-center">
    <div class="form-group justify-content-md-center form-inline">
        <span class=" d-inline-block">A</span>
        <input type="text" class="form-control " id="bonnetA" name="bonnetA">
    </div>
<!-- </div> -->
<!-- <div class="row form-group justify-content-md-center"> -->
    <div class="form-group col-sm-10 justify-content-md-center form-inline">
        <span class=" d-inline-block">B</span>
        <input type="text" class="form-control " id="bonnetB" name="bonnetB">
    </div>
<!-- </div> -->
<!-- <div class="row form-group justify-content-md-center"> -->
    <div class="form-group col-sm-10 justify-content-md-center form-inline">
        <span class=" d-inline-block">C</span>
        <input type="text" class="form-control " id="bonnetC" name="bonnetC">
    </div>
<!-- </div> -->
</div>

<div class="row text-center">
    <legend class=" justify-content-center legend1">Bolt Holes</legend>
</div><br>
<div class="form-check-inline text-center">
    <input class="form-check-input text-center" type="radio" name="boltHoles" id="boltDrilled" value="Bolt_Drilled">
    <label class="form-check-label text-center">
        Drilled </label>
</div>
<div class="form-check-inline text-center">
    <input class="form-check-input text-center" type="radio" name="boltHoles" id="boltDrilledAndTapped"
        value="Bolt_Drilled_&_Tapped">
    <label class="form-check-label text-center">
        Drilled & Tapped
    </label>
</div>
<br>
<br>
<div class="col text-center form-group">
    <legend class=" justify-content-center legend1">Hole Size And/Or Thread/Inch</legend>
    <!-- <label for="holeSize">Hole Size And/Or Thread/Inch</label> -->
    <input type="text" class="form-control" id="holeSize">
</div>

<div class="col text-center form-group">
    <legend class=" justify-content-center legend1">Other</legend>
    <!-- <label for="holeSize">Hole Size And/Or Thread/Inch</label> -->
    <textarea class="form-control" id="otherBonnet" name="otherBonnet" rows="3">
    </textarea>
</div>

</fieldset>

<!-- Ends form Seccion 8  -->

<!-- Starts form Seccion 9  -->

<fieldset class="text-center" id="seccion9">
    <div class="form-row">
        <legend class=" justify-content-center legend1">Shaft Information</legend>
    </div><br>
    <div class="row justify-content-md-center">   
        <div class="col-lg-auto  ">
        <figure class="col-lg-4 justify-content-center">
            <img class="img-rounded img-responsive rounded" src="./imagenes/shafts/shatt1.png" alt="Test"><br>
            <br>
            <input class="form-check-input text-center form-check-inline" type="radio" name="radioShaft" id="shaft1" value="Shaft_1"
                checked>
        </figure>
        <br>
        </div>

        <div class="col-lg-auto ">        
        <figure class="col-lg-4 justify-content-center">
            <img class="img-rounded img-responsive rounded" src="./imagenes/shafts/shaft2.png" alt="Test">
            <br><br>
            <input class="form-check-input text-center form-check-inline" type="radio" name="radioShaft" id="shaft2" value="Shaft_2">
        </figure>
        <br>
        </div>
        <div class="col-lg-auto ">
        <figure class="col-lg-4 justify-content-center">
            <img class="img-rounded img-responsive rounded" src="./imagenes/shafts/shaft3.png" alt="Test">
            <br><br>
            <input class="form-check-input text-center form-check-inline" type="radio" name="radioShaft" id="shaft3" value="Shaft_3">
        </figure>
        <br>
        </div>
        <div class="col-lg-auto ">
            <figure class="col-lg-4 justify-content-center">
                <img class="img-rounded img-responsive rounded" src="./imagenes/shafts/shatf4.png" alt="Test">
                <br><br>
                <input class="form-check-input text-center form-check-inline " type="radio" name="radioShaft" id="shaft4" value="Shaft_4">
            </figure>
            <br>
        </div>
        <div class="col-lg-auto ">
            <figure class="col-lg-4 justify-content-center">
                <img class="img-rounded img-responsive rounded" src="./imagenes/shafts/shatf5.png" alt="Test">
                <br><br>
            <div class="form-check-inline justify-content-center">    
                <input class="form-check-input text-center form-check-inline " type="radio" name="radioShaft" id="shaft5" value="Shaft_5">
            </div>
            </figure>
            <br>
        </div>
</div>
<br>         

<div class="row form-group justify-content-md-center">
        <legend class=" justify-content-center legend1">Dimensions (Closets 0.001")</legend>
    </div>
    <div class="row form-group justify-content-md-center">
        <div class="form-group col-sm-10 justify-content-md-center form-inline">
            <span class=" d-inline-block">D</span>
            <input type="text" class="form-control " id="shaftD" name="shaftD">
        </div>
    </div>
    <div class="row form-group justify-content-md-center">    
        <div class="form-group col-sm-10 justify-content-md-center form-inline">
            <span class=" d-inline-block">E</span>
            <input type="text" class="form-control " id="shaftE" name="shaftE">
        </div>
    </div>
    <div class="row form-group justify-content-md-center">
        <div class="form-group col-sm-10 justify-content-md-center form-inline">
            <span class=" d-inline-block">F</span>
            <input type="text" class="form-control " id="shaftF" name="shaftF">
        </div>
    </div>
    <div class="row form-group justify-content-md-center">
        <div class="form-group col-sm-10 justify-content-md-center form-inline">
            <span class=" d-inline-block">G</span>
            <input type="text" class="form-control " id="shaftG" name="shaftG">
        </div>
    </div>
    <div class="row form-group justify-content-md-center">
        <div class="form-group col-sm-10 justify-content-md-center form-inline">
            <span class=" d-inline-block">H</span>
            <input type="text" class="form-control " id="shaftH" name="shaftH">
        </div>
    </div>
    
</fieldset>

<!-- Ends form Seccion 9  -->

<!-- Starts form Seccion 10  -->

<fieldset class="text-center" id="seccion10">
    <div class="form-row">
        <legend class=" justify-content-center legend1">Actuator Requirements</legend>
    </div><br>
<!-- <fieldset> -->
<div class="container-fluid">
    <div class="form-row custom-control custom-radio custom-control-inline form-check-inline">
        <input type="radio" id="electricRadioButtonSecc10" name="seccion10" value="Electric" class="custom-control-input form-check-input">
        <label class="custom-control-label" for="electricRadioButtonSecc10">Electric</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline form-check-inline">
        <input type="radio" id="pneumaticRadioButtonSecc10" name="seccion10" value="Pneumatic" class="custom-control-input form-check-input">
        <label class="custom-control-label" for="pneumaticRadioButtonSecc10">Pneumatic</label>
    </div>
</div>
    <!-- </fieldset> -->
    <br><hr><br>
    <div class="custom-control custom-radio custom-control-inline form-check-inline">
        <input type="radio" id="positionRadioButtonSecc10" name="seccion10.1" value="2_Positions" class="custom-control-input" checked>
        <label class="custom-control-label" for="positionRadioButtonSecc10">2 Positions</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline form-check-inline">
        <input type="radio" id="modulatingRadioButtonSecc10" name="seccion10.1" value="Modulating" class="custom-control-input">
        <label class="custom-control-label" for="modulatingRadioButtonSecc10">Modulating</label>
    </div>
    <br><br><hr><br>
    
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="springReturnSecc10" name="seccion10.2" value="Spring_Return(Failsafe)" class="custom-control-input" checked>
        <label class="custom-control-label" for="springReturnSecc10">Spring Return (Failsafe)</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="ncSecc10" name="seccion10.2" value="N.C." class="custom-control-input">
        <label class="custom-control-label" for="ncSecc10">N.C.</label>
    </div>
    <br><br>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="noSpringReturnSecc10" name="seccion10.2" value="No_Spring_Return" class="custom-control-input">
        <label class="custom-control-label" for="noSpringReturnSecc10">No Spring Return</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="noSecc10" name="seccion10.2" value="N.O." class="custom-control-input">
        <label class="custom-control-label" for="noSecc10">N.O</label>
    </div>
    <br><br><hr>
    <div class="form-row">
        <legend class=" justify-content-center legend1">Power (Electric or Pneumatic)</legend>
    </div><br>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="120vacSecc10" name="seccion10.3" value="120_V_AC" class="custom-control-input" checked>
        <label class="custom-control-label" for="120vacSecc10">120 VAC</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="20PsigSecc10" name="seccion10.3" value="20_Psig" class="custom-control-input">
        <label class="custom-control-label" for="20PsigSecc10">20 psig</label>
    </div><br><br>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="24vacSecc10" name="seccion10.3" value="24_V_AC" class="custom-control-input">
        <label class="custom-control-label" for="24vacSecc10">24 VAC</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="80PsigSecc10" name="seccion10.3" value="80_Psig" class="custom-control-input">
        <label class="custom-control-label" for="80PsigSecc10">80 psig</label>
    </div><br><br>
    
    <div class="col text-center form-group">
        <legend class=" justify-content-center legend1">Other</legend>
        <!-- <label for="holeSize">Hole Size And/Or Thread/Inch</label> -->
        <textarea class="form-control" id="otherInput10" name="otherBonnet" rows="3">
        </textarea>
    </div>
   
        <div class="form-row">
            <legend class=" justify-content-center legend1">Control Signal</legend>
        </div><br>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="4-20mASecc10" name="seccion10.4" value="4-20mA" class="custom-control-input">
            <label class="custom-control-label" for="4-20mASecc10">4-20 mA</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="3-15psig" name="seccion10.4" value="3-15_Psig" class="custom-control-input">
            <label class="custom-control-label" for="3-15psig">3-15 psig</label>
        </div><br><br>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="2-10vdcSecc10" name="seccion10.4" value="2-10_VDC" class="custom-control-input" checked>
            <label class="custom-control-label" for="2-10vdcSecc10">2-10 VDC</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="floatingSecc10" name="seccion10.4" value="Floating" class="custom-control-input">
            <label class="custom-control-label" for="floatingSecc10">Floating</label>
        </div><br><br>
        
        <div class="col text-center form-group">
            <legend class=" justify-content-center legend1">Other</legend>
            <!-- <label for="holeSize">Hole Size And/Or Thread/Inch</label> -->
            <textarea class="form-control" id="otherControlInput10" name="otherSecc10.2" raws="3">
            </textarea>
        </div>

    <div class="form-row">
        <legend class=" justify-content-center legend1">NEMA 4 Enclosure Required</legend>
    </div><br>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="yesSecc10" name="seccion10.5" value="Yes" class="custom-control-input" checked>
        <label class="custom-control-label" for="yesSecc10">Yes</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="notSecc10" name="seccion10.5" value="No" class="custom-control-input">
        <label class="custom-control-label" for="notSecc10">No</label>
    </div><br><br>

    <div class="col text-center">
        <button type="button" id="editArrangements" class="btn btn-primary" >Edit</button>
    </div>
    </fieldset>
`;

  modalContainer.innerHTML = modal4;

  document.querySelector("#arrangementsCompany").value = company;
  document.querySelector("#arrangementsName").value = contactName;
  document.querySelector("#arrangementsLocation").value = location;
  document.querySelector("#arrangementsPhone").value = phoneContact;
  document.querySelector("#arrangementsCity").value = city;
  document.querySelector("#arrangementsState").value = state;
  document.querySelector("#arrangementsZip").value = zip;
  document.querySelector("#arrangementsValveSize").value = valveSizeSecc2; // line
  document.querySelector("#arrangementsBrand").value = brandSecc2; // line
  document.querySelector("#arrangementsSeries").value = seriesSecc2; // line 

  let editButtonArrangements = document.querySelector("#editArrangements");

  editButtonArrangements.onclick = function() {
    var washingtonRef = db.collection("3_Way").doc(id);

    var companyArrangements = document.querySelector("#arrangementsCompany").value;
    var contactNameArrangements = document.querySelector("#arrangementsName").value;
    var locationArrangements = document.querySelector("#arrangementsLocation").value;
    var phoneContactArrangements = document.querySelector("#arrangementsPhone").value;
    var cityArrangements = document.querySelector("#arrangementsCity").value;
    var stateArrangements = document.querySelector("#arrangementsState").value;
    var zipArrangements = document.querySelector("#arrangementsZip").value;
    var valveSizeArrangements = document.querySelector("#arrangementsValveSize").value;
    var brandArrangements = document.querySelector("#arrangementsBrand").value;
    var seriesArrangements = document.querySelector("#arrangementsSeries").value;

    return washingtonRef
      .update({
        Company_Name: companyArrangements, //company,
        Contact_Name: contactNameArrangements, //contactName,
        Location: locationArrangements, //location,
        Phone_Contact: phoneContactArrangements, //phoneContact,
        City: cityArrangements, //city,
        State: stateArrangements, //state,
        Zip: zipArrangements, //zip,
        Valve_Size: valveSizeArrangements, //valveSizeSecc2,
        Brand: brandArrangements, //brandSecc2,
        Series: seriesArrangements, //seriesSecc2,
        // Brand_Actuator_LP: brandArrangements, //brandActuatorSecc6,
        // Model_Actuator_LP: seriesArrangements //modelActuatorSecc6
        // Valve_Type: typeValveSecc3,
        // Actuator_Type: dropdown,
        // Actuator_Mode: radioButtonsLP
      })
      .then(function() {
        console.log("Document successfully updated!");

        document.querySelector("#arrangementsCompany").value = "";
        document.querySelector("#arrangementsName").value = "";
        document.querySelector("#arrangementsLocation").value = "";
        document.querySelector("#arrangementsPhone").value = "";
        document.querySelector("#arrangementsCity").value = "";
        document.querySelector("#arrangementsState").value = "";
        document.querySelector("#arrangementsZip").value = "";
        document.querySelector("#arrangementsValveSize").value = "";
        document.querySelector("#arrangementsBrand").value = "";
        document.querySelector("#arrangementsSeries").value = "";
        modalContainer.style.display = "none";
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  // document.querySelector("#lpBrandDamageActuator").value = brandActuatorSecc6;
  // document.querySelector("#lpModelDamageActuator").value = modelActuatorSecc6;

  // document.querySelector("#lpValveType").value = `${typeValveSecc3}`;
  // document.querySelector("#lpActuatorType").value = `${dropdown}`;
  // document.querySelector("#lpActuatorMode").value = `${radioButtonsLP}`;
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

// Ends Delete Seccion



  

  

  