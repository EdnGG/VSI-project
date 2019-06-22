/*********** Inicializando Firebase**************************/
firebase.initializeApp(config);

/******** Inicializando Firebase-Firestore ***************/
let db = firebase.firestore();

/*********Login Form Seccion*****************/
const loginForm = document.querySelector('#logreg-forms') 
const loginButton = document.querySelector('#btnInicioSesion')

loginButton.addEventListener('click', ()=> {
   console.log('Login button works')
   loginForm.style.display = 'block'
   carousel.style.display = 'none'    
   //mainForm.style.display = 'none'
})



/**********Ends Login Form Seccion*********/

/*********Starts Carousel seccion*************/
const carousel = document.querySelector('#carousel')

/********Ends carousel seccion***************/

/********Start Main Form seccion*****************/
const mainForm = document.querySelector('#mainForm')
const btnSeccion1 = document.querySelector("#btnSeccion1");

/****************Seccion 1 ************/ 
btnSeccion1.addEventListener("click", () => {
   console.log("validating first seccion");
   validationSeccion1()
});

const validationSeccion1 = () => {
   let firstSeccion = document.querySelector('#seccion1')
   let secondSeccion = document.querySelector("#seccion2");
   let thirdSeccion = document.querySelector("#seccion3")
   let fourthSeccion = document.querySelector("#seccion4")
   let fifthSeccion = document.querySelector('#seccion5')
   let companyName = document.querySelector('#inputCompany').value
   let contactName = document.querySelector('#inputContact').value
   let inputPhone = document.querySelector('#inputPhone').value
      
      if (companyName === '' && contactName === '' && inputPhone === ''){
         
         swal({
           title: `Please fill correctly those fields`,
           icon: `error`
         });
         
         //firstSeccion.style.display = 'none'
      } else { 
         firstSeccion.style.display = 'none'
         secondSeccion.style.display = "block"
         thirdSeccion.style.display = "block"
         fourthSeccion.style.display = "none"
         fifthSeccion.style.display = "none"
      }
}

/************Ends Seccion 1************/ 

/************Starts Seccion 2************/ 
const btnSeccion2 = document.querySelector("#btnSeccion2");
btnSeccion2.addEventListener("click", () => {
   console.log('seccion 2 button works')
   validationSeccion2()
;});

const validationSeccion2 = () => { 
   let valve2way = document.getElementById('valve2way').value;
   let valve3way = document.getElementById('valve3way').value;
   let valve2wayCheked = document.getElementById("valve2way").checked;
   let valve3wayCheked = document.getElementById("valve3way").checked;
   let firstSeccion = document.querySelector("#seccion1");
   let secondSeccion = document.querySelector("#seccion2");
   let thirdSeccion = document.querySelector("#seccion3");
   let fourthSeccion = document.querySelector("#seccion4");
   let fifthSeccion = document.querySelector("#seccion5");
   let valveSize = document.querySelector("#inputValveSize").value;
   let brand = document.querySelector("#inputBrand").value;
   let location = document.querySelector("#inputLocation").value;
   

console.log(valve2way, valve3way);

   if (
     (valveSize === "" && brand === "" && !valve2wayCheked) ||
     !valve3wayCheked) {
     swal({
       title: `Valve Size and Brand fields are required!`,
       icon: `error`
     });
     //   if (!valve2wayCheked || !valve3wayCheked){
     //       swal({
     //          title: `please selec any checkbox!`,
     //          icon: `error`
     //       });
     //   }

     //firstSeccion.style.display = 'none'
   } else {
     firstSeccion.style.display = "none";
     secondSeccion.style.display = "none";
     thirdSeccion.style.display = "none";
     fourthSeccion.style.display = "block";
     fifthSeccion.style.display = "none";
   }

}


/************Ends Seccion 2************/ 

/********Ends Main form seccion*****************/

/************************************************/
const save = () => {   

    // let valveSize = document.querySelector('#valveSize').value
    // let brand = document.querySelector('#brand').value
    // let series = document.querySelector('#series').value

    // let companyName = document.querySelector('#inputCompany').value
    // let contactName = document.querySelector('#inputContac').value
    // let location = document.querySelector('#inputLocation').value
    // let inputPhone = document.querySelector('#inputPhone').value
    // let inputCity = document.querySelector('#inputCity').value
    // let inputState = document.querySelector('#inputState').value
    // let inputZip = document.querySelector('#inputZip').value
    


    //     db.collection("clients").add({
    //         Company : company,            
    //         Contact_name: contact,
    //         Location: location,
    //         Project: project,
    //         Phone_Contact: phoneContact,
    //         Fax_Contact: faxContact,
    //         ValveSize: valveSize,
    //         brand: brand,
    //         series: series
    //     })
    //     // if promise is succesfull
    //     .then(function (docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     // if promise is reject
    //     .catch(function (error) {
    //         console.error("Error adding document: ", error);
    //     });
    // console.log('New client create!')
}

/***************  Starts  Global Variables   *****************/

// let valveSize = document.querySelector('#valveSize').value
// let brand = document.querySelector('#brand').value
// let series = document.querySelector('#series').value

/*****************  Ends Global Variables   ****************/




// // Valve info seccion part 2
// const valveInfoSeccion = document.querySelector('.information-seccion')  

//  // Valve info seccion part 3
// const listTypeValve = document.querySelector('.list-type-valve') 

// // Saving the form in a variable
// const form = document.querySelector('.container')

// const valve2way = document.querySelector('.valve-type-2')
// const valve3way = document.querySelector('.valve-type-3')
// const valveList = document.querySelector('#valve-selection')



// const submitButton = document.querySelector('#btn')
// const buttonNextSeccion = document.querySelector('.btn-info')




/******************* Event Listeners ********************/
// buttonNextSeccion.addEventListener('click', (e) =>{
//    e.preventDefault()
    
//     let company = document.querySelector('.company-field').value
//     let contact = document.querySelector('.contact-field').value
//     let location = document.querySelector('.location-field').value
//     let project = document.querySelector('.project-field').value
//     let phoneContact = document.querySelector('.phone-field').value
//     let faxContact = document.querySelector('.fax-field').value

        
    
//     if (company ==='' && contact ==='' && location ==='' && project ===''&& phoneContact ==='' && faxContact ===''){
//             swal({
//                 title: `Validation seccion works`,
//                 icon: `success`
//             })

//     } else {

//         infoSeccion.style.display = 'none'
//         valveInfoSeccion.style.display = 'block'
//         listTypeValve.style.display = 'block'
//         submitButton.style.display = 'block'

//     }

// })

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     swal({
//         title: `Submit button works. Posting data on firebase`,
//         icon: `success`
//     })
//     save()

// })

/************************************************/
// valveList.addEventListener('change', ()=> {
//     console.log('listener working')
//         swal({
//             title: `Valve list seccion works`,
//             icon: `success`
//         })

//         if (valveList.value === '2-way') {
//             valve3way.style.display = 'none'
//             valve2way.style.display = 'block'

//         } else if (valveList.value === '3-way'){
//             valve3way.style.display = 'block'
//             valve2way.style.display = 'none'

//         } else if (valveList.value === 'choose') {
//             valve2way.style.display = 'none'
//             valve3way.style.display = 'none'

//         }
// })


/************************************************/


/*********************  Hidding Elements  ***************************/

// submitButton.style.display = 'none'
// valve2way.style.display= 'none' 
// valve3way.style.display = 'none' 
// //clientInfo.style.display = 'none'
// valveInfoSeccion.style.display = 'none'
// listTypeValve.style.display = 'none'
mainForm.style.display = 'none'
loginForm.style.display = 'none'



