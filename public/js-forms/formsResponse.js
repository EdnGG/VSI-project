console.log("Hello from formResponse.js");

// Starts Hidding tables seccion
let divTableForm = document.querySelector("#tableOne");
let divTableForm2 = document.querySelector("#tableTwo");
let divTableForm3 = document.querySelector("#tableThree");
let divTableForm4 = document.querySelector("#tableFour");
let containerPdf = document.querySelector("#pdf")

// Modal container for all modals
let modalContainer = document.querySelector("#staticBackdrop");

let modalContainerHP = document.querySelector("#staticBackdropHP");


containerPdf.style.display = "none"
divTableForm.style.display = "none";
divTableForm2.style.display = "none";
divTableForm3.style.display = "none";
divTableForm4.style.display = "none";

// Ends Hidding tables seccion 


// main DIV for UPDATE MODAL Seccion
// let modalContainer = document.querySelector("#staticBackdrop");

// let modalContainerLP = document.querySelector("#staticBackdropLP");
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



// Ends Getting data from firestore to seed tables

// let shiftArrangement = true;
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
