// STARTS LOW PRESSURE ACTUATORS SEDDING TABLES


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
                  <button class="btn btn-danger"
                  onclick="deleteLowPressure('${doc.id
      }')">Delete</button>
                </td>
                <td>
                  <button 
                  class="btn btn-warning"
                  data-toggle="modal"  
                  data-target="#staticBackdropLP"
                  onclick="editLowPressure( 
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
                    '${doc.data().Brand_Actuator_LP}',
                    '${doc.data().Model_Actuator_LP}',
                    '${doc.data().Valve_Type}',
                    '${doc.data().Actuator_Type}',
                    '${doc.data().Actuator_Mode}')"
                    >Edit
                  </button>
                </td>
                <td>
                <button class="btn btn-info"
                onclick="lpActuatorPDF(
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
                    '${doc.data().Brand_Actuator_LP}',
                    '${doc.data().Model_Actuator_LP}',
                    '${doc.data().Valve_Type}',
                    '${doc.data().Actuator_Type}',
                    '${doc.data().Actuator_Mode}')"
                >PDF
                </button>
              </td>
        </tr>
      `; // En el boton con la funcion que esta dentro del metodo "onclick" contiene el valor de las variables que se encuentran en la DB
  });
});

// ENDS LOW PRESSURE ACTUATORS SEDDING TABLES

// STARTS LOW PRESSURE ACTUATOR PDF GENERATOR

function lpActuatorPDF(
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

  let pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'letter',
    // putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });
  let options = {
    "backgroundColor": '#ffffff',
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
          <strong class="modal-title main-title text-center" id="staticBackdropLabel">Retrofit Form for Low Pressure Actuator</strong>
        </div><br >
        <div class="modal-body data-seccion modal--group_first">
          <div class="row">
            <div class="col-6">
              <div class="form-group row myclass">
                <label for="inputCompany" class="col-sm-6 col-form-label label-font" 
                style="padding: 0%;
                margin: 0%;"
                >Company:</label>
                <div class="col-sm-6">
                  <h6>${company}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputContact" class="col-sm-6 col-form-label label-font" 
                style="padding: 0%;
                margin: 0%;"
                >Contact:</label>
                <div class="col-sm-6">
                  <h6>${contactName}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputEmail" class="col-sm-6 col-form-label label-font" 
                style="padding: 0%;
                margin: 0%;"
                >Email:</label>
                <div class="col-sm-6">
                  <h6>${email}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputPhone" class="col-sm-6 col-form-label label-font" 
                style="padding: 0%;
                margin: 0%;"
                >Phone Number:</label>
                <div class="col-sm-6">
                  <h6>${phoneContact}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row myclass">
                <label for="inputCity" class="col-sm-6 col-form-label label-font" 
                style="padding: 0%;
                margin: 0%;"
                >City:</label>
                <div class="col-sm-6">
                  <h6>${city} 1</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputState" class="col-sm-6 col-form-label label-font" 
                style="padding: 0%;
                margin: 0%;"
                >State:</label>
                <div class="col-sm-6">
                  <h6>${state}</h6>
                </div>
              </div>
              <div class="form-group row myclass">
                <label for="inputZipcode" class="col-sm-6 col-form-label label-font" 
                style="padding: 0%;
                margin: 0%;"
                >Zipcode:</label>
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
                <label class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Valve Size:</label>
                <div class="col-sm-6">
                  <h6>${valveSizeSecc2}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-6 
                col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Valve Brand:</label>
                <div class="col-sm-6">
                  <h6>${brandSecc2}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputValveSeries" class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Valve Series:</label>
                <div class="col-sm-6">
                  <h6>${seriesSecc2}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label for="inputValveType" class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Valve Type:</label>
                <div class="col-sm-6">
                  <h6>${typeValveSecc3}</h6>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputActuatorType" class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Actuator Type:</label>
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
                <label for="inputElectricActuator" class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Brand:</label>
                <div class="col-sm-6">
                  
                  <h6>${brandActuatorSecc6}</h6>
                </div>
                <label class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Model Number:</label>
                <div class="col-sm-6">
                  <h6>${modelActuatorSecc6}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Type of Actuator:</label>
                <div class="col-sm-6">
                  <h6>${radioButtonsLP}</h6> 
                  
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>  
        `
  containerPdf.innerHTML = template

  pdf.addHTML(containerPdf, options, function () {
    pdf.setFontSize(10)
    pdf.setFontStyle('normal')
    pdf.save(`${company}.pdf`)

  })
  containerPdf.innerHTML = ''
  containerPdf.style.display = "none"

}

// ENDS LOW PRESSURE ACTUATOR PDF GENERATOR

// STARTS LOW PRESSURE EDIT SECCION

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

  let modalContainerLP = document.querySelector("#staticBackdropLP");

  let modalLP =
    `
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
          <h5 class="modal-title main-title" id="staticBackdropLabel">Low Pressure Actuator Retrofit Solutions</h5>
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
`
  modalContainerLP.innerHTML = modalLP;

  // pintando la tabla dentro del HTML
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
      .value;

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

// ENDS LOW PRESSURE EDIT SECCION

// STARTS HIGH PRESSURE DELETE SECCION

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

// ENDS HIGH PRESSURE DELETE SECCION