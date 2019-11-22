console.log("Hello from formResponse.js");

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
//let carouselForm2 = document.querySelector("#carousel22");
//let carouselForm3 = document.querySelector("#carousel33");
//let carouselForm4 = document.querySelector("#carousel44");

// Ends Carousel seccion

// Toggle buttons
let flag = true;
function togle() {
  if (flag === true) {
    document.querySelector("#tableOne").style.display = "block";
    document.querySelector("#threeWayRequest").innerHTML = "Hide Table";
    carouselForm1.style.display = "none";
    // document.querySelector("#carousel1").style.display = "none";
    console.log("flag = 1 ", flag);
    flag = false;
  } else {
    document.querySelector("#tableOne").style.display = "none";
    document.querySelector("#threeWayRequest").innerHTML = "3 Way Requests";
    // document.querySelector("#carousel1").style.display = "block";
    carouselForm1.style.display = "block";
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
    // carouselForm2.style.display = "none";

    console.log("flag = 1 ", flag1);
    flag1 = false;
  } else {
    document.querySelector("#tableTwo").style.display = "none";
    document.querySelector("#elecActuator").innerHTML = "Electric Actuator";
    // carouselForm2.style.display = "block";

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
    // carouselForm3.style.display = "none";

    console.log("flag = 1 ", flag2);
    flag2 = false;
  } else {
    document.querySelector("#tableThree").style.display = "none";
    document.querySelector("#hpPneumaticBtn").innerHTML =
      "High Pressure Pneumatic";
    // carouselForm3.style.display = "block";

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
    // carouselForm4.style.display = "none";

    console.log("flag = 1 ", flag3);
    flag3 = false;
  } else {
    document.querySelector("#tableFour").style.display = "none";
    document.querySelector("#lpPneumaticBtn").innerHTML =
      "Low Pressure Pneumatic";
    // carouselForm4.style.display = "block";

    console.log("flag = 2", flag3);
    flag3 = true;
  }
}

// Ends Toggle buttons

// Getting data from firestore to full those tables
let tableForm = document.querySelector("#table");
db.collection("3_Way").onSnapshot(querySnapshot => {
  tableForm.innerHTML = ""; // checar
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
    // console.table(`${doc.data()}`);
    tableForm.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                
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
                <td>${doc.data().Other2}</td>
                <td>${doc.data().Enclosure_Required}</td>
                <td>
                  <button class="btn btn-danger" 
                    onclick="deleteArrangements('${doc.id}')">Delete</button>
                </td>
                <td>
                  <button class="btn btn-warning" 
                    onclick="editArrangements(
                    '${doc.id}',
                    '${doc.data().Company_Name}',
                    '${doc.data().Contact_Name}',
                    
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
});

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
                  '${doc.data().Phone_Contact}',
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
                  '${doc.data().Phone_Contact}',
                  '${doc.data().City}','${doc.data().State}',
                  '${doc.data().Zip}','${doc.data().Valve_Size}', 
                  '${doc.data().Brand}','${doc.data().Series}',
                  '${doc.data().Brand_Actuator_HP}',
                  '${doc.data().Model_Actuator_HP}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Actuator_Mode}')">Edit
                  </button>
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
                  <button class="btn btn-warning" onclick="editLowPressure(
                    '${doc.id}','${doc.data().Company_Name}',
                    '${doc.data().Contact_Name}',
                    '${doc.data().Phone_Contact}',
                    '${doc.data().City}','${doc.data().State}',
                    '${doc.data().Zip}','${doc.data().Valve_Size}',
                    '${doc.data().Brand}','${doc.data().Series}',
                    '${doc.data().Brand_Actuator_LP}',
                    '${doc.data().Model_Actuator_LP}',
                    '${doc.data().Valve_Type}',
                    '${doc.data().Actuator_Type}',
                    '${doc.data().Actuator_Mode}'
                    )">Edit
                  </button>
                </td>

        </tr>
      
      `; // En el boton con la funcion que esta dentro del metodo "onclick" contiene el valor de las variables que se encuentran en la DB
  });
});

// Ends Getting data from firestore to seed tables

// Edit Seccion
var modalContainerLP = document.querySelector("#modalLP");
var modalContainerHP = document.querySelector("#modalHP");
var modalContainerElectric = document.querySelector("#modalE");
var modalContainerTreeWay = document.querySelector("#modalTreeWay");

//

let shiftLP = true;
function editLowPressure(
  id,
  company,
  contactName,
  //location,
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
  if (shiftLP) {
    modalContainerLP.style.display = "block";
    shiftLP = false;
    console.log(`%cvalor de shift dentro de IF: ${shiftLP}`, "color : green;");
  } else if (!shiftLP) {
    modalContainerLP.style.display = "block";
    shiftLP = true;
    console.log(
      `%cvalor de shift dentro de ELSE IF: ${shiftLP}`,
      "color : yellow;"
    );
  }

  let modalLP = `
	<div class="table-responsive-xl ml-2 pt-2 pl-2 pr-2 responsetable"
        id="tableFourModal">
        <table class="table table-hover responsetable">
          <caption>
            Retrofit Forms for Low Pressure Actuators Requests
          </caption>

          <div style="overflow-x:auto;">
            
          </div>
          <thead class="">
            <tr class="justity-content-center text-center bg-secondary">
              <th scope="col">ID</th>
              <th scope="col">Company</th>
              <th scope="col">Contact</th>
              
              <th scope="col">Phone Number</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Valve Size</th>
              <th scope="col">Brand</th>
              <th scope="col">Series</th>
              <th scope="col">Brand Actuator LP</th>
              <th scope="col">Model Actuator LP</th>
              <th scope="col">Valve Type</th>
              <th scope="col">Actuator Type</th>
              <th scope="col">Actuator Mode</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
					<tbody id="table4">
					<tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th >${id}</th>
                <td ><input type="text" id="lpCompany"></td>
                <td ><input type="text" id="lpName"></td>
                
                <td ><input type="text" id="lpPhone"></td>
                <td ><input type="text" id="lpCity"></td>
                <td ><input type="text" id="lpState"></td>
                <td ><input type="text" id="lpZip"></td>
                <td ><input type="text" id="lpValveSize"></td>
                <td ><input type="text" id="lpBrand"></td>
                <td ><input type="text" id="lpSeries"></td>
                <td ><input type="text" id="lpBrandDamageActuator"></td>
                <td ><input type="text" id="lpModelDamageActuator"></td>
								
								
      <td ><input type="text" 
      id="valve2way"></td>

      <td ><input type="text" id="lp2positions"></td>
      
      <td ><input type="text" id="lpModulating"></td>
                
                <td>
                  <button class="btn btn-primary 
                    id="editLowPressureActuator" 
                    onclick="editLP()">
                      Update
                  </button>
                </td>
                

        </tr>
					</tbody>
        </table>
      </div>

	`;

  modalContainerLP.innerHTML = modalLP; // pintando la tabla dentro del HTML

  document.querySelector("#lpCompany").value = company;
  document.querySelector("#lpName").value = contactName;
  //document.querySelector("#lpLocation").value = location;
  document.querySelector("#lpPhone").value = phoneContact;
  document.querySelector("#lpCity").value = city;
  document.querySelector("#lpState").value = state;
  document.querySelector("#lpZip").value = zip;
  document.querySelector("#lpValveSize").value = valveSizeSecc2;
  document.querySelector("#lpBrand").value = brandSecc2;
  document.querySelector("#lpSeries").value = seriesSecc2;

  document.querySelector("#lpBrandDamageActuator").value = brandActuatorSecc6;
  document.querySelector("#lpModelDamageActuator").value = modelActuatorSecc6;

  document.querySelector("#valve2way").value = typeValveSecc3;

  document.querySelector("#lp2positions").value = dropdown;

  document.querySelector("#lpModulating").value = radioButtonsLP;

  console.log(`inside of radiobuttons: ${radioButtonsLP}`);
  console.log(`inside of dropdows: ${dropdown}`);
  console.log(`inside of typeValveSecc3: ${typeValveSecc3}`);

  window.editLP = () => {
    let washingtonRef = db.collection("LowP_Pneumatic").doc(id);

    let companylp = document.querySelector("#lpCompany").value;
    let contactNamelp = document.querySelector("#lpName").value;
    // let locationlp = document.querySelector("#lpLocation").value;
    let phoneContactlp = document.querySelector("#lpPhone").value;
    let citylp = document.querySelector("#lpCity").value;
    let statelp = document.querySelector("#lpState").value;
    let ziplp = document.querySelector("#lpZip").value;
    let valveSizelp = document.querySelector("#lpValveSize").value;
    let brandlp = document.querySelector("#lpBrand").value;
    let serieslp = document.querySelector("#lpSeries").value;

    let brandDamageLp = document.querySelector("#lpBrandDamageActuator").value;
    let modelDamageLp = document.querySelector("#lpModelDamageActuator").value;

    let valveTypeLP = document.querySelector("#valve2way").value;

    let actuatorTypeLP = document.querySelector("#lp2positions").value;

    let modulatingOr2PositionsLP = document.querySelector("#lpModulating")
      .value; // checar ID

    return washingtonRef
      .update({
        Company_Name: companylp, //company,
        Contact_Name: contactNamelp, //contactName,
        //Location: locationlp, //location,
        Phone_Contact: phoneContactlp, //phoneContact,
        City: citylp, //city,
        State: statelp, //state,
        Zip: ziplp, //zip,
        Valve_Size: valveSizelp, //valveSizeSecc2,
        Brand: brandlp, //brandSecc2,
        Series: serieslp, //seriesSecc2,
        Brand_Actuator_LP: brandDamageLp, //brandActuatorSecc6,
        Model_Actuator_LP: modelDamageLp, //modelActuatorSecc6
        Valve_Type: valveTypeLP,
        Actuator_Type: actuatorTypeLP,
        Actuator_Mode: modulatingOr2PositionsLP
      })
      .then(function() {
        console.log(`%cDocument successfully updated!`, "color : orange;");

        document.querySelector("#lpCompany").value = "";
        document.querySelector("#lpName").value = "";
        //document.querySelector("#lpLocation").value = "";
        document.querySelector("#lpPhone").value = "";
        document.querySelector("#lpCity").value = "";
        document.querySelector("#lpState").value = "";
        document.querySelector("#lpZip").value = "";
        document.querySelector("#lpValveSize").value = "";
        document.querySelector("#lpBrand").value = "";
        document.querySelector("#lpSeries").value = "";

        document.querySelector("#lpBrandDamageActuator").value = "";
        document.querySelector("#lpModelDamageActuator").value = "";

        document.querySelector("#valve2way").value = "";
        document.querySelector("#lp2positions").value = "";
        document.querySelector("#lpModulating").value = ""; // checar ID

        modalContainerLP.style.display = "none";
        shiftLP = false;
        console.log(
          `%cvalor de shift dentro de .then : ${shiftLP}`,
          "color : orange;"
        );
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
}

let shiftHP = true;
function editHighPressure(
  id,
  company,
  contactName,
  //location,
  phoneContact,
  city,
  state,
  zip,
  valveSizeSecc2,
  brandSecc2,
  seriesSecc2,
  brandActuatorSecc5,
  modelActuatorSecc5,

  typeValveSecc3_HP,
  dropdown_HP,
  radioButtonsHP
) {
  if (shiftHP) {
    modalContainerHP.style.display = "block";
    shiftHP = false;
    console.log(`%cvalor de shift dentro de IF: ${shiftHP}`, "color : green;");
  } else if (!shiftHP) {
    modalContainerHP.style.display = "block";
    shiftHP = true;
    console.log(
      `%cvalor de shift dentro de ELSE IF: ${shiftHP}`,
      "color : yellow;"
    );
  }

  let modalHP = `
	<div class="table-responsive-xl ml-2 pt-2 pl-2 pr-2 responsetable"
        id="tableThreeModal">
        <table class="table table-hover responsetable">
          <caption>
            Retrofit Forms for High Pressure Actuators Requests
          </caption>

          <div style="overflow-x:auto;">
            
          </div>
          <thead class="">
            <tr class="justity-content-center text-center bg-secondary">
              <th scope="col">ID</th>
              <th scope="col">Company</th>
              <th scope="col">Contact</th>
              
              <th scope="col">Phone Number</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Valve Size</th>
              <th scope="col">Brand</th>
              <th scope="col">Series</th>
              <th scope="col">Brand Actuator LP</th>
              <th scope="col">Model Actuator LP</th>
              <th scope="col">Valve Type</th>
              <th scope="col">Actuator Type</th>
              <th scope="col">Actuator Mode</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
					<tbody id="table3">
					<tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th >${id}</th>
                <td ><input type="text" id="hpCompany"></td>
                <td ><input type="text" id="hpName"></td>
                
                <td ><input type="text" id="hpPhone"></td>
                <td ><input type="text" id="hpCity"></td>
                <td ><input type="text" id="hpState"></td>
                <td ><input type="text" id="hpZip"></td>
                <td ><input type="text" id="hpValveSize"></td>
                <td ><input type="text" id="hpBrand"></td>
                <td ><input type="text" id="hpSeries"></td>
                <td ><input type="text" id="hpBrandDamageActuator"></td>
                <td ><input type="text" id="hpModelDamageActuator"></td>
								
								
      <td ><input type="text" 
      id="valve2way"></td>

      <td ><input type="text" id="hp2positions"></td>
      
      <td ><input type="text" id="hpModulating"></td>
                
                <td>
                  <button class="btn btn-primary 
                    id="editHighPressureActuator" 
                    onclick="editHP()">
                      Update
                  </button>
                </td>
                

        </tr>
					</tbody>
        </table>
      </div>

	`;

  modalContainerHP.innerHTML = modalHP; // pintando la tabla dentro del HTML

  document.querySelector("#hpCompany").value = company;
  document.querySelector("#hpName").value = contactName;
  //document.querySelector("#hpLocation").value = location;
  document.querySelector("#hpPhone").value = phoneContact;
  document.querySelector("#hpCity").value = city;
  document.querySelector("#hpState").value = state;
  document.querySelector("#hpZip").value = zip;
  document.querySelector("#hpValveSize").value = valveSizeSecc2;
  document.querySelector("#hpBrand").value = brandSecc2;
  document.querySelector("#hpSeries").value = seriesSecc2;

  document.querySelector("#hpBrandDamageActuator").value = brandActuatorSecc5;
  document.querySelector("#hpModelDamageActuator").value = modelActuatorSecc5;

  document.querySelector("#valve2way").value = typeValveSecc3_HP;

  document.querySelector("#hp2positions").value = dropdown_HP;

  document.querySelector("#hpModulating").value = radioButtonsHP;

  console.log(`inside of radiobuttons: ${radioButtonsHP}`);
  console.log(`inside of dropdows: ${dropdown_HP}`);
  console.log(`inside of typeValveSecc3: ${typeValveSecc3_HP}`);

  // let editButtonHp = document.querySelector("#editHighPressureActuator");

  window.editHP = () => {
    let washingtonRef = db.collection("HP_Pneumatic").doc(id);

    let companyhp = document.querySelector("#hpCompany").value;
    let contactNamehp = document.querySelector("#hpName").value;
    //let locationhp = document.querySelector("#hpLocation").value;
    let phoneContacthp = document.querySelector("#hpPhone").value;
    let cityhp = document.querySelector("#hpCity").value;
    let statehp = document.querySelector("#hpState").value;
    let ziphp = document.querySelector("#hpZip").value;
    let valveSizehp = document.querySelector("#hpValveSize").value;
    let brandhp = document.querySelector("#hpBrand").value;
    let serieshp = document.querySelector("#hpSeries").value;

    let brandDamageHp = document.querySelector("#hpBrandDamageActuator").value;
    let modelDamageHp = document.querySelector("#hpModelDamageActuator").value;

    let valveTypeHP = document.querySelector("#valve2way").value;

    let actuatorTypeHP = document.querySelector("#hp2positions").value;

    let modulatingOr2PositionsHP = document.querySelector("#hpModulating")
      .value; // checar ID

    return washingtonRef
      .update({
        Company_Name: companyhp, //company,
        Contact_Name: contactNamehp, //contactName,
        //Location: locationhp, //location,
        Phone_Contact: phoneContacthp, //phoneContact,
        City: cityhp, //city,
        State: statehp, //state,
        Zip: ziphp, //zip,
        Valve_Size: valveSizehp, //valveSizeSecc2,
        Brand: brandhp, //brandSecc2,
        Series: serieshp, //seriesSecc2,
        Brand_Actuator_HP: brandDamageHp, //brandActuatorSecc6,
        Model_Actuator_HP: modelDamageHp, //modelActuatorSecc6
        Valve_Type: valveTypeHP,
        Actuator_Type: actuatorTypeHP,
        Actuator_Mode: modulatingOr2PositionsHP
      })
      .then(function() {
        console.log("Document successfully updated!");

        document.querySelector("#hpCompany").value = "";
        document.querySelector("#hpName").value = "";
        //document.querySelector("#hpLocation").value = "";
        document.querySelector("#hpPhone").value = "";
        document.querySelector("#hpCity").value = "";
        document.querySelector("#hpState").value = "";
        document.querySelector("#hpZip").value = "";
        document.querySelector("#hpValveSize").value = "";
        document.querySelector("#hpBrand").value = "";
        document.querySelector("#hpSeries").value = "";

        document.querySelector("#hpBrandDamageActuator").value = "";
        document.querySelector("#hpModelDamageActuator").value = "";

        document.querySelector("#valve2way").value = "";
        document.querySelector("#hp2positions").value = "";
        document.querySelector("#hpModulating").value = ""; // checar ID

        modalContainerHP.style.display = "none";
        shiftHP = false;
        console.log(
          `%cvalor de shift dentro de .then : ${shiftHP}`,
          "color : orange;"
        );
        //   })
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
}

let shiftElectric = true;
function editElectricActuator(
  id,
  company,
  contactName,
  //location,
  phoneContact,
  city,
  state,
  zip,
  valveSizeSecc2,
  brandSecc2,
  seriesSecc2,
  brandActuatorSecc4,
  modelActuatorSecc4,
  typeValveSecc3,
  dropdown,
  electricActuator
) {
  if (shiftElectric) {
    modalContainerElectric.style.display = "block";
    shiftElectric = false;
    console.log(
      `%cvalor de shift dentro de IF: ${shiftElectric}`,
      "color : green;"
    );
  } else if (!shiftElectric) {
    modalContainerElectric.style.display = "block";
    shiftElectric = true;
    console.log(
      `%cvalor de shift dentro de ELSE IF: ${shiftElectric}`,
      "color : yellow;"
    );
  }

  let modalElectric = `
	<div class="table-responsive-xl ml-2 pt-2 pl-2 pr-2 responsetable"
        id="tableTwoModal">
        <table class="table table-hover responsetable">
          <caption>
            Retrofit Forms for High Pressure Actuators Requests
          </caption>

          <div style="overflow-x:auto;">
            
          </div>
          <thead>
            <tr class="justity-content-center text-center bg-secondary">
              <th scope="col">ID</th>
              <th scope="col">Company</th>
              <th scope="col">Contact</th>
              
              <th scope="col">Phone Number</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Valve Size</th>
              <th scope="col">Brand</th>
              <th scope="col">Series</th>
              <th scope="col">Brand Electric Actuator </th>
              <th scope="col">Model Electric Actuator </th>
              <th scope="col">Valve Type</th>
              <th scope="col">Actuator Type</th>
              <th scope="col">Electric Actuator</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
					<tbody id="table2">
					<tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th>${id}</th>
                <td ><input type="text" id="elecActuatorCompany"></td>
                <td ><input type="text" id="elecActuatorName"></td>
                
                <td ><input type="text" id="elecActuatorPhone"></td>
                <td ><input type="text" id="elecActuatorCity"></td>
                <td ><input type="text" id="elecActuatorState"></td>
                <td ><input type="text" id="elecActuatorZip"></td>
                <td ><input type="text" id="elecActuatorValveSize"></td>
                <td ><input type="text" id="elecActuatorBrand"></td>
                <td ><input type="text" id="elecActuatorSeries"></td>
                <td ><input type="text" id="electricBrandDamageActuator"></td>
                <td ><input type="text" id="electricModelDamageActuator"></td>
								
                <td ><input type="text"                 id="valve2way">
                </td>

                <td ><input type="text" id="electricActuatorType"></td>
      
                <td ><input type="text" id="actuator"></td>
                
                <td>
                  <button class="btn btn-primary 
                    id="editHighPressureActuator" 
                    onclick="editElectric()">
                      Update
                  </button>
                </td>
                

        </tr>
					</tbody>
        </table>
      </div>

	`;

  modalContainerElectric.innerHTML = modalElectric; // pintando la tabla dentro del HTML

  document.querySelector("#elecActuatorCompany").value = company;
  document.querySelector("#elecActuatorName").value = contactName;
  //document.querySelector("#elecActuatorLocation").value = location;
  document.querySelector("#elecActuatorPhone").value = phoneContact;
  document.querySelector("#elecActuatorCity").value = city;
  document.querySelector("#elecActuatorState").value = state;
  document.querySelector("#elecActuatorZip").value = zip;
  document.querySelector("#elecActuatorValveSize").value = valveSizeSecc2;
  document.querySelector("#elecActuatorBrand").value = brandSecc2;
  document.querySelector("#elecActuatorSeries").value = seriesSecc2;

  //   document.querySelector("#elecActuatorSeries").value = seriesSecc2;

  document.querySelector(
    "#electricBrandDamageActuator"
  ).value = brandActuatorSecc4;
  document.querySelector(
    "#electricModelDamageActuator"
  ).value = modelActuatorSecc4;
  document.querySelector("#valve2way").value = typeValveSecc3;
  document.querySelector("#electricActuatorType").value = dropdown;
  document.querySelector("#actuator").value = electricActuator;

  window.editElectric = () => {
    let washingtonRef = db.collection("Electric_Actuator").doc(id);

    let companyEa = document.querySelector("#elecActuatorCompany").value;
    let contactNameEa = document.querySelector("#elecActuatorName").value;
    //let locationEa = document.querySelector("#elecActuatorLocation").value;
    let phoneContactEa = document.querySelector("#elecActuatorPhone").value;
    let cityEa = document.querySelector("#elecActuatorCity").value;
    let stateEa = document.querySelector("#elecActuatorState").value;
    let zipEa = document.querySelector("#elecActuatorZip").value;
    let valveSizeEa = document.querySelector("#elecActuatorValveSize").value;
    let brandEa = document.querySelector("#elecActuatorBrand").value;
    let seriesEa = document.querySelector("#elecActuatorSeries").value;

    let electricDamageAct = document.querySelector(
      "#electricBrandDamageActuator"
    ).value;

    let electricModelDamageAct = document.querySelector(
      "#electricModelDamageActuator"
    ).value;

    let electricValveType = document.querySelector("#valve2way").value;

    let dropdown_E = document.querySelector("#electricActuatorType").value;

    let elecActuator = document.querySelector("#actuator").value;

    return washingtonRef
      .update({
        Company_Name: companyEa,
        Contact_Name: contactNameEa,
        //Location: locationEa,
        Phone_Contact: phoneContactEa, //phoneContact,
        City: cityEa, //city,
        State: stateEa, //state,
        Zip: zipEa, //zip,
        Valve_Size: valveSizeEa, //valveSizeSecc2,
        Brand: brandEa, //brandSecc2,
        Series: seriesEa, //seriesSecc2,

        Brand_Electric_Actuator: electricDamageAct,
        Model_Electric_Actuator: electricModelDamageAct,

        Valve_Type: electricValveType,
        Actuator_Type: dropdown_E,
        Electric_Actuator: elecActuator
      })
      .then(function() {
        console.log("Document successfully updated!");

        document.querySelector("#elecActuatorCompany").value = "";
        document.querySelector("#elecActuatorName").value = "";
        //document.querySelector("#elecActuatorLocation").value = "";
        document.querySelector("#elecActuatorPhone").value = "";
        document.querySelector("#elecActuatorCity").value = "";
        document.querySelector("#elecActuatorState").value = "";
        document.querySelector("#elecActuatorZip").value = "";
        document.querySelector("#elecActuatorValveSize").value = "";
        document.querySelector("#elecActuatorBrand").value = "";
        document.querySelector("#elecActuatorSeries").value = "";

        document.querySelector("#electricBrandDamageActuator").value = "";
        document.querySelector("#electricModelDamageActuator").value = "";
        document.querySelector("#valve2way").value = "";
        document.querySelector("#electricActuatorType").value = "";
        document.querySelector("#actuator").value = "";

        modalContainerElectric.style.display = "none";
        shiftElectric = false;
        console.log(
          `%cvalor de shift dentro de .then : ${shiftElectric}`,
          "color : orange;"
        );
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
}

let shiftArrangement = true;
function editArrangements(
  id,
  company,
  contactName,
  //location,
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
  otherControlSignal, // text area
  enclosureRequired // radio buttons
) {
  if (shiftArrangement) {
    modalContainerElectric.style.display = "block";
    shiftArrangement = false;
    console.log(
      `%cvalor de shift dentro de IF: ${shiftArrangement}`,
      "color : green;"
    );
  } else if (!shiftArrangement) {
    modalContainerElectric.style.display = "block";
    shiftArrangement = true;
    console.log(
      `%cvalor de shift dentro de ELSE IF: ${shiftArrangement}`,
      "color : yellow;"
    );
  }

  let modalArrangement = `
	<div class="table-responsive-xl ml-2 pt-2 pl-2 pr-2 responsetable"
        id="tableOneModal">
        <table class="table table-hover responsetable">
          <caption>
            Retrofit Forms for High Pressure Actuators Requests
          </caption>

          <div style="overflow-x:auto;">
            
          </div>
          <thead>
            <tr class="justity-content-center text-center bg-secondary">
      <th scope="col">ID</th>
      <th scope="col">Company</th>
      <th scope="col">Contact</th>
      
      <th scope="col">Phone Number</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip Code</th>
      <th scope="col">Valve Size</th>
      <th scope="col">Brand</th>
      <th scope="col">Series</th>
      <th scope="col">Valve Type</th>
      <th scope="col">Arrangement Type</th>
      <th scope="col">Bonnet Type</th>
      <th scope="col">Dimension Bonnet A</th>
      <th scope="col">Dimension Bonnet B</th>
      <th scope="col">Dimension Bonnet C</th>
      <th scope="col">Bolt Holes Type</th>
      <th scope="col">Hole Size</th>
      <th scope="col">Other</th>
      <th scope="col">Shaft Type</th>
      <th scope="col">Shaft Dimensions D</th>
      <th scope="col">Shaft Dimensions E</th>
      <th scope="col">Shaft Dimensions F</th>
      <th scope="col">Shaft Dimensions G</th>
      <th scope="col">Shaft Dimensions H</th>
      <th scope="col">Actuator Requirements 1</th>
      <th scope="col">Actuator Requirements 2</th>
      <th scope="col">Actuator Requirements 3</th>
      <th scope="col">Actuator Requirements 4</th>
      <th scope="col">Pneumatic || Electric</th>
      <th scope="col">Actuator Control Signal</th>
      <th scope="col">Other</th>
      <th scope="col">Enclosure Required</th>
      <th scope="col">Update</th>

            </tr>
          </thead>
		<tbody id="table1"><tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
<th>${id}</th>

    <td ><input type="text" id="arrangementsCompany"></td>
    <td ><input type="text" id="arrangementsName"></td>
    
    <td ><input type="text" id="arrangementsPhone"></td>
    <td ><input type="text" id="arrangementsCity"></td>
    <td ><input type="text" id="arrangementsState"></td>
    <td ><input type="text" id="arrangementsZip"></td>
    <td ><input type="text" id="arrangementsValveSize"></td>
    <td ><input type="text" id="arrangementsBrand"></td>
    <td ><input type="text" id="arrangementsSeries"></td>

    <td ><input type="text" id="valve3wayType"></td>
    <td ><input type="text" id="arrangementType"></td>
                
    <td ><input type="text" id="bonneType"></td>
    <td ><input type="text" id="bonnetA"></td>
    <td ><input type="text" id="bonnetB"></td>
                
    <td ><input type="text" id="bonnetC"></td>
    <td ><input type="text" /id="boltHoles"></td>
    <td ><input type="text" id="holeSize"></td>
    <td ><input type="text" id="other"></td>
    <td ><input type="text" id="shaftType"></td>
    <td ><input type="text" id="shaftD"></td>
    <td ><input type="text" id="shaftE"></td>
    <td ><input type="text" id="shaftF"></td>
    <td ><input type="text" id="shaftG"></td>
    <td ><input type="text" id="shaftH"></td>
    <td ><input type="text" id="requirements1"></td>
    <td ><input type="text" id="requirements2"></td>
    <td ><input type="text" id="requirements3"></td>
    <td ><input type="text" id="requirements4"></td>
    <td ><input type="text" id="elecOrPneum"></td>
    <td ><input type="text" id="controlSignal"></td>
    <td ><input type="text" id="other2"></td>
    <td ><input type="text" id="enclosureType"></td>

      <td>
        <button class="btn btn-primary 
          id="edit3wayArr" 
          onclick="editArrangements()">
          Update
        </button>
      </td>
      </tr>
		</tbody>
  </table>
</div>

`;

  modalContainerTreeWay.innerHTML = modalArrangement; // pintando la tabla dentro del HTML

  document.querySelector("#arrangementsCompany").value = company; //
  document.querySelector("#arrangementsName").value = contactName; //
  //document.querySelector("#arrangementsLocation").value = location;
  document.querySelector("#arrangementsPhone").value = phoneContact; //
  document.querySelector("#arrangementsCity").value = city; //
  document.querySelector("#arrangementsState").value = state; //
  document.querySelector("#arrangementsZip").value = zip; //
  document.querySelector("#arrangementsValveSize").value = valveSizeSecc2; //
  document.querySelector("#arrangementsBrand").value = brandSecc2; //
  document.querySelector("#arrangementsSeries").value = seriesSecc2; //

  document.querySelector("#valve3wayType").value = typeValveSecc3; //
  document.querySelector("#arrangementType").value = radioButtonsArrangements; //
  document.querySelector("#bonneType").value = radioButtonsBonnets; //
  document.querySelector("#bonnetA").value = dimensionBonnetA; //
  document.querySelector("#bonnetB").value = dimensionBonnetB; //
  document.querySelector("#bonnetC").value = dimensionBonnetC; //

  document.querySelector("#boltHoles").value = boltHoles; //
  document.querySelector("#holeSize").value = holeSize; //
  document.querySelector("#other").value = other; //
  document.querySelector("#shaftType").value = shaftType; //
  document.querySelector("#shaftD").value = optionShaftD; //
  document.querySelector("#shaftE").value = optionShaftE; //
  document.querySelector("#shaftF").value = optionShaftF; //

  document.querySelector("#shaftG").value = optionShaftG; //
  document.querySelector("#shaftH").value = optionShaftH; //
  document.querySelector("#requirements1").value = actReqSecc1; //
  document.querySelector("#requirements2").value = actReqSecc2; //
  document.querySelector("#requirements3").value = actReqSecc3; //

  document.querySelector("#requirements4").value = actReqSecc4; //
  document.querySelector("#elecOrPneum").value = otherPneumaticOrElec; //
  document.querySelector("#controlSignal").value = controlSignal; //
  document.querySelector("#other2").value = otherControlSignal; //
  document.querySelector("#enclosureType").value = enclosureRequired; //

  window.editArrangements = () => {
    let washingtonRef = db.collection("3_Way").doc(id);
    // Se le asigna a una variable el valor contenido
    let companyArrangements = document.querySelector("#arrangementsCompany")
      .value;
    let contactNameArrangements = document.querySelector("#arrangementsName")
      .value;
    //let locationArrangements = document.querySelector("#arrangementsLocation")

    let phoneContactArrangements = document.querySelector("#arrangementsPhone")
      .value;
    let cityArrangements = document.querySelector("#arrangementsCity").value;
    let stateArrangements = document.querySelector("#arrangementsState").value;
    let zipArrangements = document.querySelector("#arrangementsZip").value;
    let valveSizeArrangements = document.querySelector("#arrangementsValveSize")
      .value;
    let brandArrangements = document.querySelector("#arrangementsBrand").value;
    let seriesArrangements = document.querySelector("#arrangementsSeries")
      .value;
    //

    let valve3wayType = document.querySelector("#valve3wayType").value;
    let arrangementType = document.querySelector("#arrangementType").value;
    let bonneType = document.querySelector("#bonneType").value;
    let bonnetA = document.querySelector("#bonnetA").value;
    let bonnetB = document.querySelector("#bonnetB").value;
    let bonnetC = document.querySelector("#bonnetC").value;
    let boltHoles = document.querySelector("#boltHoles").value;
    let holeSize = document.querySelector("#holeSize").value;
    let other = document.querySelector("#other").value;
    let shaftType = document.querySelector("#shaftType").value;
    let shaftD = document.querySelector("#shaftD").value;
    let shaftE = document.querySelector("#shaftE").value;

    let shaftF = document.querySelector("#shaftF").value;
    let shaftG = document.querySelector("#shaftG").value;
    let shaftH = document.querySelector("#shaftH").value;
    let requirements1 = document.querySelector("#requirements1").value;
    let requirements2 = document.querySelector("#requirements2").value;
    let requirements3 = document.querySelector("#requirements3").value;
    let requirements4 = document.querySelector("#requirements4").value;
    let elecOrPneum = document.querySelector("#elecOrPneum").value;

    let controlSignal = document.querySelector("#controlSignal").value;
    let other2 = document.querySelector("#other2").value;
    let enclosureType = document.querySelector("#enclosureType").value;

    return washingtonRef
      .update({
        // por aqui esta el bug
        Company_Name: companyArrangements, //company,
        Contact_Name: contactNameArrangements, //contactName,
        //Location: locationArrangements,
        Phone_Contact: phoneContactArrangements, //phoneContact,
        City: cityArrangements, //city,
        State: stateArrangements, //state,
        Zip: zipArrangements, //zip,
        Valve_Size: valveSizeArrangements, //valveSizeSecc2,
        Brand: brandArrangements, //brandSecc2,
        Series: seriesArrangements, //seriesSecc2,

        // Continue here
        Valve_Type: valve3wayType,
        //Actuator_Type: dropdown,
        //Actuator_Mode: radioButtonsLP,
        Arrangement_Type: arrangementType,
        //
        Bonnet_Type: bonneType,
        Dimension_Bonnet_A: bonnetA,
        Dimension_Bonnet_B: bonnetB,
        Dimension_Bonnet_C: bonnetC,
        TypeOf_Bolt_Holes: boltHoles,
        Hole_Size: holeSize,
        Other: other,
        Shaft_Type: shaftType,
        Shaft_Dimensions_D: shaftD,
        Shaft_Dimensions_E: shaftE,
        Shaft_Dimensions_F: shaftF,
        Shaft_Dimensions_G: shaftG,
        Shaft_Dimensions_H: shaftH,
        Actuator_Requirements_Secc_1: requirements1,
        Actuator_Requirements_Secc_2: requirements2, //
        Actuator_Requirements_Secc_3: requirements3,
        Actuator_Requirements_Secc_4: requirements4,
        Pneumatic_Or_Electric: elecOrPneum,
        Control_Signal: controlSignal,
        Other2: other2,
        Enclosure_Required: enclosureType
      })
      .then(function() {
        console.log("Document successfully updated!");

        document.querySelector("#arrangementsCompany").value = "";
        document.querySelector("#arrangementsName").value = "";
        //document.querySelector("#arrangementsLocation").value = "";
        document.querySelector("#arrangementsPhone").value = "";
        document.querySelector("#arrangementsCity").value = "";
        document.querySelector("#arrangementsState").value = "";
        document.querySelector("#arrangementsZip").value = "";
        document.querySelector("#arrangementsValveSize").value = "";
        document.querySelector("#arrangementsBrand").value = "";
        document.querySelector("#arrangementsSeries").value = "";

        //

        document.querySelector("#valve3wayType").value = "";
        document.querySelector("#arrangementType").value = "";
        document.querySelector("#bonneType").value = "";
        document.querySelector("#bonnetA").value = "";
        document.querySelector("#bonnetB").value = "";
        document.querySelector("#bonnetC").value = "";
        document.querySelector("#boltHoles").value = "";
        document.querySelector("#holeSize").value = "";
        document.querySelector("#other").value = "";
        document.querySelector("#shaftType").value = "";
        document.querySelector("#shaftD").value = "";
        document.querySelector("#shaftE").value = "";

        document.querySelector("#shaftF").value = "";
        document.querySelector("#shaftG").value = "";
        document.querySelector("#shaftH").value = "";
        document.querySelector("#requirements1").value = "";
        document.querySelector("#requirements2").value = "";
        document.querySelector("#requirements3").value = "";
        document.querySelector("#requirements4").value = "";
        document.querySelector("#elecOrPneum").value = "";

        document.querySelector("#controlSignal").value = "";
        document.querySelector("#other2").value = "";
        document.querySelector("#enclosureType").value = "";

        //

        modalContainerTreeWay.style.display = "none";
        shiftArrangement = false;
        console.log(
          `%cvalor de shift dentro de .then : ${shiftArrangement}`,
          "color : orange;"
        );
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
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
