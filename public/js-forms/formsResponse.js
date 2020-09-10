console.log("Hello from formResponse.js");

let divTableForm = document.querySelector("#tableOne");
let divTableForm2 = document.querySelector("#tableTwo");
let divTableForm3 = document.querySelector("#tableThree");
let divTableForm4 = document.querySelector("#tableFour");
let containerPdf = document.querySelector("#pdf")


containerPdf.style.display = "none"
divTableForm.style.display = "none";
divTableForm2.style.display = "none";
divTableForm3.style.display = "none";
divTableForm4.style.display = "none";


// Toggle buttons
let flag = true;
function togle() {
  if (flag === true) {
    document.querySelector("#tableOne").style.display = "block";
    document.querySelector("#threeWayRequest").innerHTML = "Hide Table";
    // carouselForm1.style.display = "none";
    // document.querySelector("#carousel1").style.display = "none";
    console.log("flag = 1 ", flag);
    flag = false;
  } else {
    document.querySelector("#tableOne").style.display = "none";
    document.querySelector("#threeWayRequest").innerHTML = "3 Way Requests";
    // document.querySelector("#carousel1").style.display = "block";
    // carouselForm1.style.display = "block";
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

// main DIV for UPDATE MODAL Seccion

let modalContainer = document.querySelector("#staticBackdrop");

let modalContainerLP = document.querySelector("#staticBackdropLP");
// let modalLow = document.querySelector("#modalLow");


// ENDS main DIV for UPDATE MODAL Seccion


// Getting data from firestore to seed all tables
let tableForm = document.querySelector("#table");
db.collection("3_Way").onSnapshot(querySnapshot => {
  tableForm.innerHTML = "";
  querySnapshot.forEach(doc => {
    //console.log(`${doc.id} => ${doc.data()}`);
    // console.table(`${doc.data()}`);
    tableForm.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Contact_Email}</td>
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
                    '${doc.data().Contact_Email}',
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
              <td>
                <button class="btn btn-info"
                    onclick="deleteArrangements('${doc.id}')">PDF
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
    tableForm2.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Contact_Email}</td>
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
                  <button class="btn btn-danger" 
                  onclick="deleteElectricAct('${doc.id}')">Delete</button>
                </td>
                <td>
                  <button 
                  type="button"
                  class="btn btn-warning"  
                  data-toggle="modal"  
                  data-target="#staticBackdrop"
                  onclick="editElectricActuator('${doc.id}',
                  '${doc.data().Company_Name}',
                  '${doc.data().Contact_Name}', 
                  '${doc.data().Contact_Email}',
                  '${doc.data().Phone_Contact}',
                  '${doc.data().City}','${doc.data().State}',
                  '${doc.data().Zip}','${doc.data().Valve_Size}',
                  '${doc.data().Brand}','${doc.data().Series}',
                  '${doc.data().Brand_Electric_Actuator}',
                  '${doc.data().Model_Electric_Actuator}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Electric_Actuator}')"
                  ">Edit
                  </button>
                </td>
                <td>
                <button class="btn btn-info"
                    onclick="elecActuatorPDF('${doc.id}',
                  '${doc.data().Company_Name}',
                  '${doc.data().Contact_Name}', 
                  '${doc.data().Contact_Email}',
                  '${doc.data().Phone_Contact}',
                  '${doc.data().City}','${doc.data().State}',
                  '${doc.data().Zip}','${doc.data().Valve_Size}',
                  '${doc.data().Brand}','${doc.data().Series}',
                  '${doc.data().Brand_Electric_Actuator}',
                  '${doc.data().Model_Electric_Actuator}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Electric_Actuator}')">PDF
                </button>
              </td>
                
        </tr>
      
      `;
  });
});

function elecActuatorPDF(id,
  company,
  contactName,
  email,
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
  electricActuator) {


  let pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });
  let options = {
    backgroundColor: '#ffffff',
  }

  containerPdf.style.display = "block"
  let template = `
  <div class="background--pdf">
        <div style="display:flex; 
        align-items: center;
        flex-flow: column wrap;">
          <figure class="logo">
            <img src="./imagenes/logo-valvesolutions.png" alt="Blog Logotipo">
          </figure><br >
          <strong class="modal-title main-title" id="staticBackdropLabel">Retrofit Form for Electric Actuator</strong>
        </div><br >
        <div class="modal-body data-seccion modal--group_first">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="inputCompany" class="col-sm-6 col-form-label label-font">Company:</label>
                <div class="col-sm-6">
                  <h6>${company}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputContact" class="col-sm-6 col-form-label label-font">Contact:</label>
                <div class="col-sm-6">
                  <h6>${contactName}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputEmail" class="col-sm-6 col-form-label label-font">Email:</label>
                <div class="col-sm-6">
                  <h6>${email}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPhone" class="col-sm-6 col-form-label label-font">Phone Number:</label>
                <div class="col-sm-6">
                  <h6>${phoneContact}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="inputCity" class="col-sm-6 col-form-label label-font">City:</label>
                <div class="col-sm-6">
                  <h6>${city} 1</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputState" class="col-sm-6 col-form-label label-font">State:</label>
                <div class="col-sm-6">
                  <h6>${state}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputZipcode" class="col-sm-6 col-form-label label-font">Zipcode:</label>
                <div class="col-sm-6">
                  <h6>${zip}</h6>
                </div>
              </div>
            </div>
          </div>
        </div><br >
        <div class="modal-body data-seccion modal--group_second">
          <!-- Second part -->
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label class="col-sm-6 col-form-label label-font">Valve Size:</label>
                <div class="col-sm-6">
                  <h6>${valveSizeSecc2}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-6 
                col-form-label label-font">Valve Brand:</label>
                <div class="col-sm-6">
                  <h6>${brandSecc2}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputValveSeries" class="col-sm-6 col-form-label label-font">Valve Series:</label>
                <div class="col-sm-6">
                  <h6>${seriesSecc2}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="inputValveType" class="col-sm-6 col-form-label label-font">Valve Type:</label>
                <div class="col-sm-6">
                  <h6>${typeValveSecc3}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputActuatorType" class="col-sm-6 col-form-label label-font">Actuator Type:</label>
                <div class="col-sm-6">
                  <h6>${dropdown}</h6>
                  
                </div>
              </div>
            </div>
            <!-- / Second part -->
          </div>
        </div><br >
        <div class="modal-body data-seccion modal--group_third">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="inputElectricActuator" class="col-sm-6 col-form-label label-font">Electric Actuator:</label>
                <div class="col-sm-6">
                  
                  <h6>${electricActuator}</h6>
                </div>
                <label class="col-sm-6 col-form-label label-font">Brand:</label>
                <div class="col-sm-6">
                  <h6>${brandActuatorSecc4}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label class="col-sm-6 col-form-label label-font">Model Number:</label>
                <div class="col-sm-6">
                  <h6>${modelActuatorSecc4}</h6>
                  
                </div>
              </div>
            </div>
          </div>
        </div>  `
  containerPdf.innerHTML = template



  // pdf.addHTML(containerPdf, options, function () {
  //   pdf.save(`${company}.pdf`)
  //   containerPdf.innerHTML = ''
  //   containerPdf.style.display = "none"
  // })

}

let tableForm3 = document.querySelector("#table3");
db.collection("HP_Pneumatic").onSnapshot(querySnapshot => {
  tableForm3.innerHTML = "";
  querySnapshot.forEach(doc => {
    //console.log(`${doc.id} => ${doc.data()}`);
    tableForm3.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Contact_Email}</td>
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
                  <button class="btn btn-warning"
                  data-toggle="modal"  
                  data-target="#staticBackdrop"
                  onclick="editHighPressure('${
      doc.id
      }','${doc.data().Company_Name}',
                  '${doc.data().Contact_Name}',
                  '${doc.data().Contact_Email}',
                  '${doc.data().Phone_Contact}',
                  '${doc.data().City}',
                  '${doc.data().State}',
                  '${doc.data().Zip}','${doc.data().Valve_Size}', 
                  '${doc.data().Brand}','${doc.data().Series}',
                  '${doc.data().Brand_Actuator_HP}',
                  '${doc.data().Model_Actuator_HP}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Actuator_Mode}')">Edit
                  </button>
                </td>
                <td>
                <button class="btn btn-info"
                    onclick="deleteArrangements('${doc.id}')">PDF
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
    //console.log(`${doc.id} => ${doc.data()}`);
    tableForm4.innerHTML += `
        <tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
            <th class="">${doc.id}</th>
                <td>${doc.data().Company_Name}</td>
                <td>${doc.data().Contact_Name}</td>
                <td>${doc.data().Contact_Email}</td>
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
                  <button class=
                  "btn btn-warning"
                  data-toggle="modal"  
                  data-target="#staticBackdrop"
                  onclick="editLowPressure(
                    '${doc.id}',
                    '${doc.data().Company_Name}',
                    '${doc.data().Contact_Name}',
                    '${doc.data().Contact_Email}',
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
                <td>
                <button class="btn btn-info">PDF
                </button>
              </td>

        </tr>
      
      `; // En el boton con la funcion que esta dentro del metodo "onclick" contiene el valor de las variables que se encuentran en la DB
  });
});

// Ends Getting data from firestore to seed tables

function editLowPressure(
  id,
  company,
  contactName,
  email,
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


  let modalLP = `
	 <div class="modal-dialog modal-xl" style="
   max-width: 90vw !important;
   width:100%;
   margin: 0;">
      <div class="modal-content" style="
      width:100%">
        <div class="modal-header header-container">

          <figure class="logo">
            <img src="./imagenes/logo-valvesolutions.png" alt="Blog Logotipo">
          </figure>
          <h5 class="modal-title main-title" id="staticBackdropLabel">Retrofit Solutions</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="lpCompany" class="col-sm-3 col-form-label">Company</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpCompany">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpName" class="col-sm-3 col-form-label">Contact</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpName">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control" id="lpEmail">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpPhone" class="col-sm-3 col-form-label">Phone Number</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="lpPhone">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="lpCity" class="col-sm-3 col-form-label">City</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpCity">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpState" class="col-sm-3 col-form-label">State</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpState">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpZip" class="col-sm-3 col-form-label">Zipcode</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="lpZip">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="lpValveSize" class="col-sm-3 col-form-label">Valve Size</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpValveSize">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpBrand" class="col-sm-3 col-form-label">Valve Brand</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpBrand">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpSeries" class="col-sm-3 col-form-label">Valve Series</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpSeries">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="valve2way" class="col-sm-3 col-form-label">Valve Type</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="valve2way">
                </div>
              </div>
              <div class="form-group row">
                <label for="lp2positions" class="col-sm-3 col-form-label">Actuator Type</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lp2positions">
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="lpBrandDamageActuator" class="col-sm-3 col-form-label">Brand</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpBrandDamageActuator">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="lpModelDamageActuator" class="col-sm-3 col-form-label">Model Number</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpModelDamageActuator">
                </div>
              </div>
              <div class="form-group row">
                <label for="lpModulating" class="col-sm-3 col-form-label">LP Actuator</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="lpModulating">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" 
            class="btn btn-primary" 
            onclick="editLP()"
            data-dismiss="modal">Update</button>
          </div>
        </div>
      </div>
    </div>

</div>
`
  modalContainer.innerHTML = modalLP; // pintando la tabla dentro del HTML

  // modalContainerElectric.innerHTML = modalLP; // pintando la tabla dentro del HTML

  document.querySelector("#lpCompany").value = company;
  document.querySelector("#lpName").value = contactName;
  document.querySelector("#lpEmail").value = email;
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


  window.editLP = () => {
    let washingtonRef = db.collection("LowP_Pneumatic").doc(id);

    let companylp = document.querySelector("#lpCompany").value;
    let contactNamelp = document.querySelector("#lpName").value;
    let locationEmail = document.querySelector("#lpEmail").value;
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
        Contact_Email: locationEmail, //location,
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
      .then(function () {
        console.log(`%cDocument successfully updated!`, "color : orange;");

        document.querySelector("#lpCompany").value = "";
        document.querySelector("#lpName").value = "";
        document.querySelector("#lpEmail").value = "";
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

        swal({
          title: "Document updated successfull",
          // text: "Once deleted, you will not be able to recover this document!",
          icon: "success",
          // buttons: true,
          // dangerMode: true,
        })

      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
}

function editHighPressure(
  id,
  company,
  contactName,
  email,
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

  let modalHP = ` 
   <div class="modal-dialog modal-xl" style="
   max-width: 90vw !important;
   width:100%;
   margin: 0;">
      <div class="modal-content" style="
      width:100%">
        <div class="modal-header header-container">

          <figure class="logo">
            <img src="./imagenes/logo-valvesolutions.png" alt="Blog Logotipo">
          </figure>
          <h5 class="modal-title main-title" id="staticBackdropLabel">Retrofit Solutions</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="hpCompany" class="col-sm-3 col-form-label">Company</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpCompany">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpName" class="col-sm-3 col-form-label">Contact</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpName">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control" id="hpEmail">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpPhone" class="col-sm-3 col-form-label">Phone Number</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="hpPhone">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="hpCity" class="col-sm-3 col-form-label">City</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpCity">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpState" class="col-sm-3 col-form-label">State</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpState">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpZip" class="col-sm-3 col-form-label">Zipcode</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="hpZip">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="hpValveSize" class="col-sm-3 col-form-label">Valve Size</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpValveSize">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpBrand" class="col-sm-3 col-form-label">Valve Brand</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpBrand">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpSeries" class="col-sm-3 col-form-label">Valve Series</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpSeries">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="valve2way" class="col-sm-3 col-form-label">Valve Type</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="valve2way">
                </div>
              </div>
              <div class="form-group row">
                <label for="hp2positions" class="col-sm-3 col-form-label">Actuator Type</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hp2positions">
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="hpBrandDamageActuator" class="col-sm-3 col-form-label">Brand</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpBrandDamageActuator">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="hpModelDamageActuator" class="col-sm-3 col-form-label">Model Number</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpModelDamageActuator">
                </div>
              </div>
              <div class="form-group row">
                <label for="hpModulating" class="col-sm-3 col-form-label">HP Actuator</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="hpModulating">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" 
            class="btn btn-primary" 
            onclick="editHP()"
            data-dismiss="modal">Update</button>
          </div>
        </div>
      </div>
    </div>

</div>
`

  modalContainer.innerHTML = modalHP; // pintando la tabla dentro del HTML

  document.querySelector("#hpCompany").value = company;
  document.querySelector("#hpName").value = contactName;
  document.querySelector("#hpEmail").value = email;
  document.querySelector("#hpPhone").value = phoneContact;
  document.querySelector("#hpCity").value = city;
  document.querySelector("#hpState").value = state;
  document.querySelector("#hpZip").value = zip;
  document.querySelector("#hpValveSize").value = valveSizeSecc2;
  document.querySelector("#hpBrand").value = brandSecc2;
  document.querySelector("#hpSeries").value = seriesSecc2;
  // 
  document.querySelector("#hpBrandDamageActuator").value = brandActuatorSecc5; // ready
  document.querySelector("#hpModelDamageActuator").value = modelActuatorSecc5; // ready
  // 
  document.querySelector("#valve2way").value = typeValveSecc3_HP; // ready

  document.querySelector("#hp2positions").value = dropdown_HP;

  document.querySelector("#hpModulating").value = radioButtonsHP;


  // let editButtonHp = document.querySelector("#editHighPressureActuator");

  window.editHP = () => {
    let washingtonRef = db.collection("HP_Pneumatic").doc(id);

    let companyhp = document.querySelector("#hpCompany").value;
    let contactNamehp = document.querySelector("#hpName").value;
    let locationEmail = document.querySelector("#hpEmail").value;
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
        Contact_Email: locationEmail, //location,
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
      .then(function () {
        console.log("Document successfully updated!");

        document.querySelector("#hpCompany").value = "";
        document.querySelector("#hpName").value = "";
        document.querySelector("#hpEmail").value = "";
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


        swal({
          title: "Document updated successfull",
          // text: "Once deleted, you will not be able to recover this document!",
          icon: "success",
          // buttons: true,
          // dangerMode: true,
        })

      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
}


function editElectricActuator(
  id,
  company,
  contactName,
  email,
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
  console.log('hello from modal electric')

  let modalElectric = ` 
   <div class="modal-dialog modal-xl" style="
   max-width: 90vw !important;
   width:100%;
   margin: 0;">
      <div class="modal-content" style="
      width:100%">
        <div class="modal-header header-container">

          <figure class="logo">
            <img src="./imagenes/logo-valvesolutions.png" alt="Blog Logotipo">
          </figure>
          <h5 class="modal-title main-title" id="staticBackdropLabel">Retrofit Solutions</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="elecActuatorCompany" class="col-sm-3 col-form-label">Company</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="elecActuatorCompany">
                </div>
              </div>
              <div class="form-group row">
                <label for="elecActuatorName" class="col-sm-3 col-form-label">Contact</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="elecActuatorName">
                </div>
              </div>
              <div class="form-group row">
                <label for="elecActuatorEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control" id="elecActuatorEmail">
                </div>
              </div>
              <div class="form-group row">
                <label for="elecActuatorPhone" class="col-sm-3 col-form-label">Phone Number</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="elecActuatorPhone">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="elecActuatorCity" class="col-sm-3 col-form-label">City</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="elecActuatorCity">
                </div>
              </div>
              <div class="form-group row">
                <label for="elecActuatorState" class="col-sm-3 col-form-label">State</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="elecActuatorState">
                </div>
              </div>
              <div class="form-group row">
                <label for="elecActuatorZip" class="col-sm-3 col-form-label">Zipcode</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="elecActuatorZip">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="elecActuatorValveSize" class="col-sm-3 col-form-label">Valve Size</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="elecActuatorValveSize">
                </div>
              </div>
              <div class="form-group row">
                <label for="elecActuatorBrand" class="col-sm-3 col-form-label">Valve Brand</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="elecActuatorBrand">
                </div>
              </div>
              <div class="form-group row">
                <label for="elecActuatorSeries" class="col-sm-3 col-form-label">Valve Series</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="elecActuatorSeries">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="valve2way" class="col-sm-3 col-form-label">Valve Type</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="valve2way">
                </div>
              </div>
              <div class="form-group row">
                <label for="electricActuatorType" class="col-sm-3 col-form-label">Actuator Type</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="electricActuatorType">
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div class="modal-body data-seccion">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label for="actuator" class="col-sm-3 col-form-label">Electric Actuator</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="actuator">
                </div>
                <label for="electricBrandDamageActuator" class="col-sm-3 col-form-label">Brand</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="electricBrandDamageActuator">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="electricModelDamageActuator" class="col-sm-3 col-form-label">Model Number</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="electricModelDamageActuator">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" 
            class="btn btn-primary" 
            onclick="editElectric()"
            data-dismiss="modal">Update</button>
          </div>
        </div>
      </div>
    </div>

</div>
`

  modalContainer.innerHTML = modalElectric;

  // pintando la tabla dentro del HTML

  document.querySelector("#elecActuatorCompany").value = company;
  document.querySelector("#elecActuatorName").value = contactName;
  document.querySelector("#elecActuatorEmail").value = email;
  document.querySelector("#elecActuatorPhone").value = phoneContact;
  document.querySelector("#elecActuatorCity").value = city;
  document.querySelector("#elecActuatorState").value = state;
  document.querySelector("#elecActuatorZip").value = zip;
  document.querySelector("#elecActuatorValveSize").value = valveSizeSecc2;
  document.querySelector("#elecActuatorBrand").value = brandSecc2;
  document.querySelector("#elecActuatorSeries").value = seriesSecc2;

  document.querySelector("#electricBrandDamageActuator").value = brandActuatorSecc4;
  document.querySelector("#electricModelDamageActuator").value = modelActuatorSecc4;
  document.querySelector("#valve2way").value = typeValveSecc3;
  document.querySelector("#electricActuatorType").value = dropdown;
  document.querySelector("#actuator").value = electricActuator;


  window.editElectric = () => {
    let washingtonRef = db.collection("Electric_Actuator").doc(id);

    let companyEa = document.querySelector("#elecActuatorCompany").value;
    let contactNameEa = document.querySelector("#elecActuatorName").value;
    let emailEa = document.querySelector("#elecActuatorEmail").value;
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
        Contact_Email: emailEa,
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
      .then(function () {
        console.log("Document successfully updated!");

        document.querySelector("#elecActuatorCompany").value = "";
        document.querySelector("#elecActuatorName").value = "";
        document.querySelector("#elecActuatorEmail").value = "";
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

        swal({
          title: "Document updated successfull",
          // text: "Once deleted, you will not be able to recover this document!",
          icon: "success",
          // buttons: true,
          // dangerMode: true,
        })

      })
      .catch(function (error) {
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
  email,
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
    modalContainerTreeWay.style.display = "block";
    shiftArrangement = false;
    console.log(
      `%cvalor de shift dentro de IF: ${shiftArrangement}`,
      "color : green;"
    );
  } else if (!shiftArrangement) {
    modalContainerTreeWay.style.display = "block";
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
      <th scope="col" class="text-center">ID</th>
      <th scope="col" class="text-center">Company</th>
      <th scope="col" class="text-center">Contact</th>
      <th scope="col" class="text-center">Email</th>
      <th scope="col" class="text-center">Phone Number</th>
      <th scope="col" class="text-center">City</th>
      <th scope="col" class="text-center">State</th>
      <th scope="col" class="text-center">Zip Code</th>
      <th scope="col" class="text-center">Valve Size</th>
      <th scope="col" class="text-center">Valve Brand</th>
      <th scope="col" class="text-center">Valve Series</th>
      <th scope="col" class="text-center">Valve Type</th>
      <th scope="col" class="text-center">Arrangement Type</th>
      <th scope="col" class="text-center">Bonnet Type</th>
      <th scope="col" class="text-center">Dimension Bonnet A</th>
      <th scope="col" class="text-center">Dimension Bonnet B</th>
      <th scope="col" class="text-center">Dimension Bonnet C</th>
      <th scope="col" class="text-center">Bolt Holes Type</th>
      <th scope="col" class="text-center">Hole Size</th>
      <th scope="col" class="text-center">Other</th>
      <th scope="col" class="text-center">Shaft Type</th>
      <th scope="col" class="text-center">Shaft Dimensions D</th>
      <th scope="col" class="text-center">Shaft Dimensions E</th>
      <th scope="col" class="text-center">Shaft Dimensions F</th>
      <th scope="col" class="text-center">Shaft Dimensions G</th>
      <th scope="col" class="text-center">Shaft Dimensions H</th>
      <th scope="col" class="text-center">Actuator Requirements 1</th>
      <th scope="col" class="text-center">Actuator Requirements 2</th>
      <th scope="col" class="text-center">Actuator Requirements 3</th>
      <th scope="col" class="text-center">Actuator Requirements 4</th>
      <th scope="col" class="text-center">Pneumatic || Electric</th>
      <th scope="col" class="text-center">Actuator Control Signal</th>
      <th scope="col" class="text-center">Other</th>
      <th scope="col" class="text-center">Enclosure Required</th>
      <th scope="col" class="text-center">Update</th>

            </tr>
          </thead>
		<tbody id="table1"><tr class="pt-2 pl-2 pr-2 justity-content-center text-center bg-light">
<th>${id}</th>

    <td ><input type="text" id="arrangementsCompany"></td>
    <td ><input type="text" id="arrangementsName"></td>
    <td ><input type="text" id="arrangementsEmail"></td>
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
          onclick="editArrangements1()">
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
  document.querySelector("#arrangementsEmail").value = email;
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

  window.editArrangements1 = () => {
    let washingtonRef = db.collection("3_Way").doc(id);
    // Se le asigna a una variable el valor contenido
    let companyArrangements = document.querySelector("#arrangementsCompany")
      .value;
    let contactNameArrangements = document.querySelector("#arrangementsName")
      .value;
    let emailArrangements = document.querySelector("#arrangementsEmail").value;

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
        Contact_Email: emailArrangements,
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
      .then(function () {
        console.log("Document successfully updated!");

        document.querySelector("#arrangementsCompany").value = "";
        document.querySelector("#arrangementsName").value = "";
        document.querySelector("#arrangementsEmail").value = "";
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
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
}

// Delete Seccion
function deleteLowPressure(id) {
  // Delete Data Low Pressure Pneumatic Actuator

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this document!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        db.collection("LowP_Pneumatic")
          .doc(id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });

        swal("Poof! Your document has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your document is safe!");
      }
    });


}

function deleteHighPressure(id) {
  // Delete Data High Pressure Pneumatic Actuator

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this document!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        db.collection("HP_Pneumatic")
          .doc(id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });

        swal("Poof! Your document has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your document is safe!");
      }
    });

}

function deleteElectricAct(id) {
  // Delete Data Electric Actuator
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        db.collection("Electric_Actuator")
          .doc(id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
        swal("Poof! Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });



}

function deleteArrangements(id) {
  // Delete Data 3 way Arrangemets

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this document!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        db.collection("3_Way")
          .doc(id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });

        swal("Poof! Your document has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your document is safe!");
      }
    });

}

// Ends Delete Seccion

// Escuchar cuando se genere nuevo documento en DB

// function listenerForElectActuator() {
//   db.collection("Electric_Actuator").onSnapshot(querySnapshot => {
//     //console.log("Current data: ", doc.data());
//     swal({
//       text: `New post on Electric Actuator Table`,
//       icon: "info"
//     });
//   });
// }
