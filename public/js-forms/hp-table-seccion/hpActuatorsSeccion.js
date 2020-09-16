// STARTS HIGH PERFORMANCE ACTUATORS SEDDING TABLES

// main DIV for UPDATE MODAL Seccion
let modalContainerHP = document.querySelector("#staticBackdropHP");

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
                  <button class="btn btn-danger" 
                  onclick="deleteHighPressure('${doc.id}')">
                    Delete</button>
                </td>
                <td>
                  <button 
                  class="btn btn-warning"
                  data-toggle="modal"  
                  data-target="#staticBackdropHP"
                  onclick="editHighPressure('
                  ${doc.id}',
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
                  '${doc.data().Brand_Actuator_HP}',
                  '${doc.data().Model_Actuator_HP}',
                  '${doc.data().Valve_Type}',
                  '${doc.data().Actuator_Type}',
                  '${doc.data().Actuator_Mode}')">Edit
                  </button>
                </td>
                <td>
                <button class="btn btn-info"
                    onclick="hpActuatorPDF('${doc.id}',
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
                    '${doc.data().Brand_Actuator_HP}',
                    '${doc.data().Model_Actuator_HP}',
                    '${doc.data().Valve_Type}',
                    '${doc.data().Actuator_Type}',
                    '${doc.data().Actuator_Mode}')
                  ">PDF
                </button>
              </td>
          </tr>
    `;
  });
});

// ENDS HIGH PERFORMANCE ACTUATORS SEDDING TABLES


// STARTS HIGH PERFORMANCE ACTUATOR PDF GENERATOR

function hpActuatorPDF(
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
          <strong class="modal-title main-title" id="staticBackdropLabel">Retrofit Form for High Pressure Actuator</strong>
        </div><br >
        <div class="modal-body data-seccion modal--group_first">
          <div class="row">
            <div class="col-6">
              <div class="form-group row myclass">
                <label for="inputCompany" class="col-sm-6 col-form-label label-font">Company:</label>
                <div class="col-sm-6">
                  <h6>${company}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputContact" class="col-sm-6 col-form-label label-font">Contact:</label>
                <div class="col-sm-6">
                  <h6>${contactName}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputEmail" class="col-sm-6 col-form-label label-font">Email:</label>
                <div class="col-sm-6">
                  <h6>${email}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputPhone" class="col-sm-6 col-form-label label-font">Phone Number:</label>
                <div class="col-sm-6">
                  <h6>${phoneContact}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row myclass">
                <label for="inputCity" class="col-sm-6 col-form-label label-font">City:</label>
                <div class="col-sm-6">
                  <h6>${city} 1</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputState" class="col-sm-6 col-form-label label-font">State:</label>
                <div class="col-sm-6">
                  <h6>${state}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
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
                  <h6>${typeValveSecc3_HP}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputActuatorType" class="col-sm-6 col-form-label label-font">Actuator Type:</label>
                <div class="col-sm-6">
                  <h6>${dropdown_HP}</h6>
                  
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
                <label for="inputElectricActuator" class="col-sm-6 col-form-label label-font">Brand:</label>
                <div class="col-sm-6">
                  
                  <h6>${brandActuatorSecc5}</h6>
                </div>
                <label class="col-sm-6 col-form-label label-font">Model Number:</label>
                <div class="col-sm-6">
                  <h6>${modelActuatorSecc5}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label class="col-sm-6 col-form-label label-font">Type of Actuator:</label>
                <div class="col-sm-6">
                  <h6>${radioButtonsHP}</h6>
                  
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

// ENDS HIGH PERFORMANCE ACTUATOR PDF GENERATOR

// STARTS HIGH PERFORMANCE EDIT SECCION

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


  // let modalContainerHP = document.querySelector("#staticBackdropHP");

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
          <h5 class="modal-title main-title" id="staticBackdropLabel">High Pressure Actuator Retrofit Solutions</h5>
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
`

  modalContainerHP.innerHTML = modalHP; // pintando el modal dentro del HTML

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

        // modalContainerHP.innerHTML = ""
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

// ENDS HIGH PRESSURE EDIT SECCION

// STARTS HIGH PRESSURE DELETE SECCION

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

// ENDS HIGH PREFORMANCE DELETE SECCION