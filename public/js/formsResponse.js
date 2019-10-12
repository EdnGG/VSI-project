console.log("Hello")

let divTableForm = document.querySelector("#tableOne");
let divTableForm2 = document.querySelector("#tableTwo");
let divTableForm3 = document.querySelector("#tableThree");
let divTableForm4 = document.querySelector("#tableFour");

divTableForm.style.display = "none";
divTableForm2.style.display = "none";
divTableForm3.style.display = "none";
divTableForm4.style.display = "none";



let flag = 1;
function togle() {
  if (flag == 1){
    document.querySelector("#tableOne").style.display = "block";
    console.log("flag = 1 ", flag);
    flag = 0;
  } else {
    document.querySelector("#tableOne").style.display = "none";
    console.log("flag = 2", flag);
    flag = 1;
  }
}
//
let flag1 = 1;
function togle1() {
  if (flag1 == 1) {
    document.querySelector("#tableTwo").style.display = "block";
    console.log("flag = 1 ", flag1);
    flag1 = 0;
  } else {
    document.querySelector("#tableTwo").style.display = "none";
    console.log("flag = 2", flag1);
    flag1 = 1;
  }
}
//
let flag2 = 1;
function togle2() {
  if (flag2 == 1) {
    document.querySelector("#tableThree").style.display = "block";
    console.log("flag = 1 ", flag2);
    flag2 = 0;
  } else {
    document.querySelector("#tableThree").style.display = "none";
    console.log("flag = 2", flag2);
    flag2 = 1;
  }
}
//
let flag3 = 1;
function togle3() {
  if (flag3 == 1) {
    document.querySelector("#tableFour").style.display = "block";
    console.log("flag = 1 ", flag3);
    flag3 = 0;
  } else {
    document.querySelector("#tableFour").style.display = "none";
    console.log("flag = 2", flag3);
    flag3 = 1;
  }
}



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
                
        </tr>
      
      `;
  });
});