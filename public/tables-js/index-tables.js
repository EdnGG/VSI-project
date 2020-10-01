console.log("Hello from index-tables.js");

// Starts Hidding tables seccion
let divTableForm = document.querySelector("#tableOne");
let divTableForm2 = document.querySelector("#tableTwo");
let divTableForm3 = document.querySelector("#tableThree");
let divTableForm4 = document.querySelector("#tableFour");

// CONTAINER FOR PDF GENERATOR
let containerPdf = document.querySelector("#pdf")
let containerPdf1 = document.querySelector("#pdf1")


containerPdf.style.display = "none"
containerPdf1.style.display = "none"
divTableForm.style.display = "none";
divTableForm2.style.display = "none";
divTableForm3.style.display = "none";
divTableForm4.style.display = "none";


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
