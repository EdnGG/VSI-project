// STARTS 3 WAY ARRANGEMENTS SEEDING TABLES

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
                  data-toggle="modal"  
                  data-target="#staticBackdrop3Way"
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
                    onclick="arrangementsPDF(
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
                    '${doc.data().Enclosure_Required}')">PDF
                </button>
              </td>
        </tr>
      `;
  });
});

// STARTS 3 WAY ARRANGEMENTS PDF GENERATOR


// 
function arrangementsPDF(
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

  // Checar como crear mas de una pagina

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
        align-items: inherit;
        flex-flow: column;">
          <figure class="logo" >
            <img src="./imagenes/logo-valvesolutions.png" alt="Blog Logotipo">
          </figure><br >
          <strong class="modal-title main-title text-center"
            
            id="staticBackdropLabel"
           >Retrofit Form for 3 Way Arrangements
          </strong> <br>
            <div class="modal-body data-seccion modal--group_first">
              <div class="row">
                <div class="col-6">
                  <div class="form-group row">
                    <label  class="col-sm-3 col-form-label arrangements">Company:</label>
                    
                    <div class="col-sm-9">
                      <h6>${company}</h6>
                    </div>

                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label arrangements">Contact:</label>
                    <div class="col-sm-9">
                      <h6>${contactName}</h6>
                    
                    </div>
                  </div>
                  <div class="form-group row">
                     <label class="col-sm-3 col-form-label arrangements">Email:</label>
                    <div class="col-sm-9">
                      <h6>${email}</h6>
                    
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label arrangements">Phone Number:</label>
                    <div class="col-sm-9">
                      <h6>${phoneContact}</h6>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group row">
                    <label  class="col-sm-3 col-form-label arrangements">City:</label>
                    <div class="col-sm-9">
                      <h6>${city}</h6>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label  class="col-sm-3 col-form-label arrangements">State:</label>
                    <div class="col-sm-9">
                      <h6>${state}</h6>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label arrangements">Zipcode:</label>
                    <div class="col-sm-9">
                      <h6>${zip}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-body data-seccion modal--group_second">
              <div class="row">
                <div class="col-6">
                  <div class="form-group row">
                    <label  class="col-sm-3 col-form-label arrangements">Valve Size:</label>
                    <div class="col-sm-9">
                      <h6>${valveSizeSecc2}</h6>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label arrangements">Valve Brand:</label>
                    <div class="col-sm-9">
                      <h6>${brandSecc2}</h6>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label arrangements">Valve Series:</label>
                    <div class="col-sm-9">
                      <h6>${seriesSecc2}</h6>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label arrangements">Valve Type:</label>
                    <div class="col-sm-9">
                      <h6>${typeValveSecc3}</h6>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputActuatorType" class="col-sm-3 col-form-label">Actuator Type:</label>
                    <div class="col-sm-9">
                      <h6>empty</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-body data-seccion modal--group_first">
              <div class="row">
                <div class="col-12">
                  <h6 
                    class="arrangements"
                    style="
                    display: flex;
                    justify-content: center;
                    padding-bottom:15px;
                    font-size:21px;">
                    Arrangement Type:</h6>
                  <div class="form-group row">
                    <div class="col-sm-12">
                      <figure>
                        <img src="./imagenes/3waymodal/table.png" class="rounded mx-auto d-block" alt="Blog Logotipo"
                          style="width: 600px;">
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div class="" style="display:flex;
                  justify-content: center;
                  ">
                    <h6>${radioButtonsArrangements}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body data-seccion modal--group_second">
              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    padding-bottom:15px;
                    font-size:21px;
                    ">Bonnet Information:
                  </h6>
                  <div class="form-group row">
                    <div class="col-sm-12">
                      <figure>
                        <img src="./imagenes/3waymodal/bonnets-images.png" class="rounded mx-auto d-block"
                          alt="Blog Logotipo" style="width: 600px;">
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div class="" style="display:flex;
                  justify-content: center;
                  ">
                    <h6>${radioButtonsBonnets}</h6>
                  </div>
                </div>
              </div> <br>
              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Dimensions (Closets 0.001):
                  </h6> <br>
                </div>
              </div>
              <div class="row"
              style="justify-content:center">
                <div class="col-sm-4" 
                style="display:flex;
                justify-content:center;
                ">
                  <label class="col-sm-4 col-form-label arrangements">A:</label>
                  <div class="" style="display:flex;
                  justify-content: center;
                  ">
                    <h6>${dimensionBonnetA}</h6>
                  </div>

                  <label class="col-sm-4 col-form-label arrangements">B:</label>
                  <div class="" style="display:flex;
                  justify-content: center;
                  ">
                    <h6>${dimensionBonnetB}</h6>
                  </div>

                  <label class="col-sm-4 col-form-label arrangements">C:</label>
                  <div class="" style="display:flex;
                  justify-content: center;
                  ">
                    <h6>${dimensionBonnetC}</h6>
                  </div>

                </div>
              </div><br>

            <div class="modal--group_second"> 
              <div class="row-12 text-center ">
                <div class="col-sm-12" style="display: flex;
                text-align: center;">
                  <label for="holeSize" style="padding: 0%;" class="col-sm-8 col-form-label">
                  <strong>Bolt Holes:</strong>
                  </label>
                  <div class="col-sm-3" style="align-content: center;">
                    <h6>${boltHoles}</h6>
                  </div>
                </div>
              </div>
              </div>
              <br>


              <div class="row-12 text-center">
                <div class="col-sm-12" style="display: flex;
                text-align: center;">
                  <label for="holeSize" style="padding: 0%;" class="col-sm-8 col-form-label">
                  <strong>Hole Size and/or Thread/Inch:</strong>
                  </label>
                  <div class="col-sm-3" style="align-content: center;">
                    <h6>${holeSize}</h6>
                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Other:
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div class="" style="display:flex;
                    justify-content: center;">
                    <h6>${other}</h6>
                      
                  </div>
                </div>
              </div><br>

              <div class="modal-body data-seccion modal--group_second">
                <div class="row">
                  <div class="col-12">
                    <h6 style="
                      display: flex;
                      justify-content: center;
                      font-size:21px;">Shaft Information:
                    </h6>
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <figure>
                          <img src="./imagenes/3waymodal/shaft-images.png" class="rounded mx-auto d-block"
                            alt="Blog Logotipo" style="width: 600px;">
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="container">
                    <div class="" style="display:flex;
                      justify-content: center;">
                      <h6>${shaftType}</h6>
                    </div>
                  </div>
                </div><br>

                <div class="row modal--group_second">
                  <div class="col-12">
                    <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Dimensions (Closets 0.001):
                    </h6> <br>
                  </div>
                </div>
                <div class="row" 
                style="
                display:flex;
                justify-content:center;">
                  <div 
                  style="
                  width:100px;
                  display:flex;
                  justify-content:center;">

                    <label class="col-sm-4 col-form-label arrangements">D:</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <h6>${optionShaftD}</h6>
                    </div>
                    <label class="col-sm-4 col-form-label arrangements">E:</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <h6>${optionShaftE}</h6>
                    </div>
                    <label class="col-sm-4 col-form-label arrangements">F:</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <h6>${optionShaftF}</h6>
                    </div>
                    <label class="col-sm-4 col-form-label 
                    arrangements">G:</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <h6>${optionShaftG}</h6>
                    </div>
                    <label class="col-sm-4 col-form-label arrangements">H:</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <h6>${optionShaftH}</h6>
                    </div>

                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Actuator Requirements Seccion 1:
                  </h6> <br>
                </div>
              </div>
              <div class="modal-body data-seccion" style="
              display:flex;
              /* justify-content:center; */
              width:100%;
              ">
              <div class="row" 
                style="display:flex;
                text-align: center;
                justify-content:center;
                ">
                  <div class="col-12" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;">

                    <label style="padding:10px">Requirement:</label>
                    <div>
                      <h6>${actReqSecc1}</h6>
                    </div>
                  </div>
                </div>

                <div class="row" style="text-align: center;">
                  <div class="container" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;">
                    <label style="padding:10px">Requirement:</label>
                    <div>
                      <h6>${actReqSecc2}</h6>
                    </div>
                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Actuator Requirements Seccion 2:
                  </h6> <br>
                </div>
              </div>
              <div class="modal-body data-seccion" style="
              display:flex;
              /*justify-content:center;*/
              widht:100%
              /*flex-direction:row;*/
              /*flex-wrap: nowrap;*/
              ">
                <div class="row"
                  style="
                  display:flex;
                  text-align: center;
                  justify-content: center;
                  ">
                  <div class="col-12" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  ">

                    <label style="padding:10px;" ">Requirement:</label>
                    <div>
                      <h6>${actReqSecc3}</h6>
                    </div>
                  </div>
                </div>

                <div class="row" style="text-align: center;">
                  <div class="container" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;">
                    <label style="padding:10px;">Requirement:</label>
                    <div class="">
                      <h6>${actReqSecc4}</h6>
                    </div>
                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;
                    ">Power (Electric or Pneumatic):
                  </h6> <br>
                </div>
              </div>

              <div class="row">
                <div class="col-12" style="display:flex;
                  text-align:center;">
                  <h6 class="col-sm-3" style="
                  justify-content:center;
                  text-align:center;
                  ">120 VAC</h6>
                  <h6 class="col-sm-3" style="
                  justify-content:center;
                  text-align:center;
                  ">20 PSI</h6>
                  <h6 class="col-sm-3" style="
                  justify-content:center;
                  text-align:center;
                  ">24 VAC</h6>
                  <h6 class="col-sm-3" style="
                  justify-content:center;
                  text-align:center;
                  ">80 PSI</h6>
                </div>
              </div>

              <div class="row">
                <div class="container">
                  <div style="
                    display:flex;
                    justify-content:center;">
                    <h6>${controlSignal}</h6>
                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Other
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div style="display:flex;
                    justify-content: center;">
                    <h6>${otherPneumaticOrElec}</h6>
                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Control Signal:
                  </h6> <br>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12" style="display:flex;
                    text-align:center;">
                  <h6 class="col-sm-3" style="justify-content:center;
                  text-align:center;
                  ">4-20 mA</h6>
                  <h6 class="col-sm-3" style="justify-content:center;
                  text-align:center;
                  ">3-15 psig</h6>
                  <h6 class="col-sm-3" style="justify-content:center;
                  text-align:center;
                  ">2-10 VDC</h6>
                  <h6 class="col-sm-3" style="justify-content:center;
                  text-align:center;
                  ">Floating</h6>
                </div>
              </div>

              <div class="row">
                <div class="container">
                  <div style="
                    display:flex;
                    justify-content:center;">
                    <h6>${controlSignal}</h6>
                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">Other:
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div style="display:flex;
                      justify-content: center;">
                    <h6>${otherControlSignal}</h6>
                  </div>
                </div>
              </div><br>

              <div class="row modal--group_second">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;
                    font-size:21px;">NEMA 4 Enclosure Required:
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div style="display:flex;
                      justify-content: center;">
                    <h6>${enclosureRequired}</h6>
                  </div>
                </div>
              </div>
            </div>
        </div> 
      </div>  
        `
  containerPdf.innerHTML = template

  pdf.addHTML(containerPdf, options, function () {
    pdf.save(`${company}.pdf`)
    containerPdf.innerHTML = ''
    containerPdf.style.display = "none"
  })

}

// ENDS 3 WAY ARRANGEMENTS PDF GENERATOR

// STARTS 3 WAY ARRANGEMENTS EDIT SECCION

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
  console.log('hello from 3 Way arrangement')

  // main DIV for UPDATE MODAL Seccion
  let modalContainer = document.querySelector("#staticBackdrop3Way");

  let modalArrangement = `
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
                    <label for="arrangementsCompany" class="col-sm-3 col-form-label">Company</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="arrangementsCompany">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="arrangementsName" class="col-sm-3 col-form-label">Contact</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="arrangementsName">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="arrangementsEmail" class="col-sm-3 col-form-label">Email</label>
                    <div class="col-sm-9">
                      <input type="email" class="form-control" id="arrangementsEmail">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="arrangementsPhone" class="col-sm-3 col-form-label">Phone Number</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="arrangementsPhone">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group row">
                    <label for="arrangementsCity" class="col-sm-3 col-form-label">City</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="arrangementsCity">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="arrangementsState" class="col-sm-3 col-form-label">State</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="arrangementsState">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="arrangementsZip" class="col-sm-3 col-form-label">Zipcode</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="arrangementsZip">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-body data-seccion">
              <div class="row">
                <div class="col-6">
                  <div class="form-group row">
                    <label for="arrangementsValveSize" class="col-sm-3 col-form-label">Valve Size</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="arrangementsValveSize">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="arrangementsBrand" class="col-sm-3 col-form-label">Valve Brand</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="arrangementsBrand">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="arrangementsSeries" class="col-sm-3 col-form-label">Valve Series</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="arrangementsSeries">
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group row">
                    <label for="valve3wayType" class="col-sm-3 col-form-label">Valve Type</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="valve3wayType">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputActuatorType" class="col-sm-3 col-form-label">Actuator Type</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="inputActuatorType">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-body data-seccion">
              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Arrangement
                    Type</h6>
                  <div class="form-group row">
                    <div class="col-sm-12">
                      <figure>
                        <img src="./imagenes/3waymodal/table.png" class="rounded mx-auto d-block" alt="Blog Logotipo"
                          style="width: 600px;">
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div class="" style="display:flex;
                  justify-content: center;
                  ">
                    <input type="text" class="form-control" style="width:25%" id="arrangementType">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body data-seccion">
              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Bonnet Information
                  </h6>
                  <div class="form-group row">
                    <div class="col-sm-12">
                      <figure>
                        <img src="./imagenes/3waymodal/bonnets-images.png" class="rounded mx-auto d-block"
                          alt="Blog Logotipo" style="width: 600px;">
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div class="" style="display:flex;
                  justify-content: center;
                  ">
                    <input type="text" class="form-control" style="width:25%" id="bonneType">
                  </div>
                </div>
              </div> <br>
              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Dimensions (Closets 0.001)
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4" style="
                display:flex;
                ">
                  <label for="bonnetA" class="col-sm-4 col-form-label">A</label>
                  <div class="col-sm-8" style="align-content: space-between;">
                    <input type="text" class="form-control" id="bonnetA">
                  </div>

                  <label for="bonnetB" class="col-sm-4 col-form-label">B</label>
                  <div class="col-sm-8" style="align-content: space-between;">
                    <input type="text" class="form-control" id="bonnetB">
                  </div>

                  <label for="bonnetC" class="col-sm-4 col-form-label">C</label>
                  <div class="col-sm-8" style="align-content: space-between;">
                    <input type="text" class="form-control" id="bonnetC">
                  </div>

                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Bolt Holes
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12" 
                style="display:flex;
                text-align:center;">
                  <h6 class="col-sm-6" style="justify-content:center">Drilled</h6>
                  <h6 class="col-sm-6" style="justify-content:center">Drilled & Tapped</h6>

                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div style="
                display:flex;
                /* align-content: center; */
                justify-content:center;
                /* text-align:center; */
                ">
                    <input type="text" class="form-control" id="boltHoles" style="width:25%">
                  </div>
                </div>
              </div><br>

              <div class="row-12 text-center">
                <div class="col-sm-12" style="display: flex;
                text-align: end;">
                  <label for="holeSize" style="padding-right: 0%;" class="col-sm-8 col-form-label">Hole Size and/or
                    Thread/Inch</label>
                  <div class="col-sm-4" style="align-content: center;">
                    <input type="text" class="form-control" id="holeSize" style="width:25%">
                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Other
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div class="" style="display:flex;
                    justify-content: center;">
                    <textarea type="text" class="form-control" style="width:60%;" name="other1" rows="3" cols="50"
                      id="other"></textarea>
                  </div>
                </div>
              </div><br>

              <div class="modal-body data-seccion">
                <div class="row">
                  <div class="col-12">
                    <h6 style="
                      display: flex;
                      justify-content: center;">Shaft Information
                    </h6>
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <figure>
                          <img src="./imagenes/3waymodal/shaft-images.png" class="rounded mx-auto d-block"
                            alt="Blog Logotipo" style="width: 600px;">
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="container">
                    <div class="" style="display:flex;
                      justify-content: center;">
                      <input type="text" class="form-control" style="width:25%" id="shaftType">
                    </div>
                  </div>
                </div><br>

                <div class="row">
                  <div class="col-12">
                    <h6 style="
                    display: flex;
                    justify-content: center;">Dimensions (Closets 0.001)
                    </h6> <br>
                  </div>
                </div>
                <div class="row" style="display:flex;">
                  <div class="col-sm-2" style="display:flex;">

                    <label for="shaftD" class="col-sm-4 col-form-label">D</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <input type="text" class="form-control" id="shaftD">
                    </div>
                    <label for="shaftE" class="col-sm-4 col-form-label">E</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <input type="text" class="form-control" id="shaftE">
                    </div>
                    <label for="shaftF" class="col-sm-4 col-form-label">F</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <input type="text" class="form-control" id="shaftF">
                    </div>
                    <label for="shaftG" class="col-sm-4 col-form-label">G</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <input type="text" class="form-control" id="shaftG">
                    </div>
                    <label for="shaftH" class="col-sm-4 col-form-label">H</label>
                    <div class="col-sm-8" style="align-content: space-between;">
                      <input type="text" class="form-control" id="shaftH">
                    </div>

                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Actuator Requirements 1
                  </h6> <br>
                </div>
              </div>
              <div class="modal-body data-seccion" style="display:flex;">
                <div class="row" style="text-align: center;">
                  <div class="container" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;">

                    <label for="requirements1" class="col-sm-6 col-form-label">Requirement:</label>
                    <div class="col-sm-6">
                      <input type="text" class="col-sm-6 form-control" style="width:50%;" id="requirements1">
                    </div>
                  </div>
                </div>

                <div class="row" style="text-align: center;">
                  <div class="container" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;">
                    <label for="requirements2" class="col-sm-6 col-form-label">Requirement:</label>
                    <div class="col-sm-6">
                      <input type="text" class="col-sm-6 form-control" style="width:50%;" id="requirements2">
                    </div>
                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Actuator Requirements Seccion 2
                  </h6> <br>
                </div>
              </div>
              <div class="modal-body data-seccion" style="
              display:flex;
              flex-direction:row;
              flex-wrap: nowrap;
              ">
                <div class="row" style="text-align: center;">
                  <div class="container" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  text-align: center;">

                    <label for="requirements3" class="col-sm-6 col-form-label">Requirement:</label>
                    <div class="col-sm-6">
                      <input type="text" class="col-sm-6 form-control" style="width:50%;" id="requirements3">
                    </div>
                  </div>
                </div>

                <div class="row" style="text-align: center;">
                  <div class="container" style="
                  display:flex;
                  justify-content:center;
                  align-items:center;">
                    <label for="requirements4" class="col-sm-6 col-form-label">Requirement:</label>
                    <div class="col-sm-6">
                      <input type="text" class="col-sm-6 form-control" style="width:50%;" id="requirements4">
                    </div>
                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Power (Electric or Pneumatic)
                  </h6> <br>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12" style="display:flex;
                  text-align:center;">
                  <h6 class="col-sm-3" style="justify-content:center">120 VAC</h6>
                  <h6 class="col-sm-3" style="justify-content:center">20 PSI</h6>
                  <h6 class="col-sm-3" style="justify-content:center">24 VAC</h6>
                  <h6 class="col-sm-3" style="justify-content:center">80 PSI</h6>
                </div>
              </div>

              <div class="row">
                <div class="container">
                  <div style="
                    display:flex;
                    justify-content:center;">
                    <input type="text" class="form-control" id="elecOrPneum" style="width:25%">
                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Other
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div style="display:flex;
                    justify-content: center;">
                    <textarea type="text" class="form-control" style="width:60%;" name="other1" rows="3" cols="50"
                      id="other2"></textarea>
                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Control Signal
                  </h6> <br>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12" style="display:flex;
                    text-align:center;">
                  <h6 class="col-sm-3" style="justify-content:center">4-20 mA</h6>
                  <h6 class="col-sm-3" style="justify-content:center">3-15 psig</h6>
                  <h6 class="col-sm-3" style="justify-content:center">2-10 VDC</h6>
                  <h6 class="col-sm-3" style="justify-content:center">Floating</h6>
                </div>
              </div>

              <div class="row">
                <div class="container">
                  <div style="
                    display:flex;
                    justify-content:center;">
                    <input type="text" class="form-control" id="controlSignal" style="width:25%">
                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">Other
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div style="display:flex;
                      justify-content: center;">
                    <textarea type="text" class="form-control" style="width:60%;" name="other1" rows="3" cols="50"
                      id="other3"></textarea>
                  </div>
                </div>
              </div><br>

              <div class="row">
                <div class="col-12">
                  <h6 style="
                    display: flex;
                    justify-content: center;">NEMA 4 Enclosure Required
                  </h6> <br>
                </div>
              </div>
              <div class="row">
                <div class="container">
                  <div style="display:flex;
                      justify-content: center;">
                    <input type="text" class="form-control" style="width:30%;" name="other1" id="enclosureType">
                  </div>
                </div>
              </div><br>

              <div class="modal-footer" display="border-top:0 !important;">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="editArrangements1()"
                  data-dismiss="modal">Update</button>
              </div>
            </div>
      </div>
    </div>
  
`;

  modalContainer.innerHTML = modalArrangement;
  // pintando el modal dentro del HTML

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

  document.querySelector("#valve3wayType").value = typeValveSecc3;
  // Aqui estoy 
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

// ENDS 3 WAY ARRANGEMENTS EDIT SECCION

// STARTS 3 WAY ARRANGEMENT DELETE SECCION

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

// ENDS 3 WAY ARRANGEMENT DELETE SECCION





