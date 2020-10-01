// STARTS ELECTRIC ACTUATOR SEEDING TABLES

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

// ENDS ELECTRIC ACTUATOR SEEDING TABLES

// STARTS ELECTRIC ACTUATOR PDF GENERATOR

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
    orientation: 'l',
    unit: 'mm',
    format: 'a4',
    // [612, 792],
    // putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });
  let options = {
    // pagesplit: true,
    // "backgroundColor": "#00FF00",
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
              <div class="form-group row testing">
                <label for="inputCompany" class="col-sm-6 col-form-label label-font" style="padding: 0%;
  margin: 0%;">Company:</label>
                <div class="col-sm-6">
                  <h6>${company}</h6>
                </div>
              </div>
              <div class="form-group row testing">
                <label for="inputContact" class="col-sm-6 col-form-label label-font" style="padding: 0%;
  margin: 0%;">Contact:</label>
                <div class="col-sm-6">
                  <h6>${contactName}</h6>
                </div>
              </div>
              <div class="form-group row testing">
                <label for="inputEmail" class="col-sm-6 col-form-label label-font" style="padding: 0%;
  margin: 0%;">Email:</label>
                <div class="col-sm-6">
                  <h6>${email}</h6>
                </div>
              </div>
              <div class="form-group row testing">
                <label for="inputPhone" class="col-sm-6 col-form-label label-font" style="padding: 0%;
  margin: 0%;">Phone Number:</label>
                <div class="col-sm-6">
                  <h6>${phoneContact}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row testing">
                <label for="inputCity" class="col-sm-6 col-form-label label-font" style="padding: 0%;
  margin: 0%;">City:</label>
                <div class="col-sm-6">
                  <h6>${city} 1</h6>
                </div>
              </div>
              <div class="form-group row testing">
                <label for="inputState" class="col-sm-6 col-form-label label-font" style="padding: 0%;
  margin: 0%;">State:</label>
                <div class="col-sm-6">
                  <h6>${state}</h6>
                </div>
              </div>
              <div class="form-group row testing">
                <label for="inputZipcode" class="col-sm-6 col-form-label label-font" style="padding: 0%;
  margin: 0%;">Zipcode:</label>
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
                margin: 0%;">Valve Type:</label>
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
                  
                  <h6>${brandActuatorSecc4}</h6>
                </div>
                <label class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Model Number:</label>
                <div class="col-sm-6">
                  <h6>${modelActuatorSecc4}</h6>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label class="col-sm-6 col-form-label label-font"
                style="padding: 0%;
                margin: 0%;"
                >Rotary or Damaged:</label>
                <div class="col-sm-6">
                  <h6>${electricActuator}</h6>
                  
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>  
        `
  containerPdf.innerHTML = template

  pdf.addHTML(containerPdf, options, function () {
    // here
    pdf.setFontSize(10)
    pdf.setFontStyle('normal')
    pdf.save(`${company}.pdf`)
    // containerPdf.innerHTML = ''
    // containerPdf.style.display = "none"
  })
  containerPdf.innerHTML = ''
  containerPdf.style.display = "none"
}

// ENDS ELECTRIC ACTUATOR PDF GENERATOR


// STARTS ELECTRIC ACTUATOR EDIT SECCION

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

  // main DIV for UPDATE MODAL Seccion
  let modalContainer = document.querySelector("#staticBackdrop");

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
`

  modalContainer.innerHTML = modalElectric;

  // modalContainer.appendChild(modalElectric)

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
          icon: "success",
        })

      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
}

// ENDS ELECTRIC ACTUATOR EDIT SECCION

// STARTS ELECTRIC ACTUATOR DELETING SECCION

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

// ENDS ELECTRIC ACTUATOR DELETING SECCION



