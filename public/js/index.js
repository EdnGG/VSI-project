console.log('hello')
// /*********** Inicializando Firebase**************************/
// firebase.initializeApp(config);

// /******** Inicializando Firebase-Firestore ***************/
// let db = firebase.firestore();

/***************  Starts  Global Variables   *****************/


/*****************  Ends Global Variables   ****************/


/*********Login Form Seccion*****************/
const loginForm = document.querySelector('#logreg-forms') 
const loginButton = document.querySelector('#btnInicioSesion')

loginButton.addEventListener('click', ()=> {
   console.log('Login button works')
   const user = firebase.auth().currentUser
   //loginButton.innerHTML = 'Sign Out'

   if(user){
      //loginButton.innerHTML = 'Sign Out'
      loginForm.style.display = 'none'
      carousel.style.display = 'block'
      mainForm.style.display = 'none'    

      return firebase.auth().signOut().then( ()=> {
         //loginButton.innerHTML = 'Sign Out'

         $("#avatar").attr("src", "../imagenes/usuario.png");
         swal({
            title: `Sign Out succesfull`,
            icon: `success`
         })

      }).catch(error => {
         swal({
            title: `Something was wrong trying to sign out`,
            icon: `error`
         })
      })
   }
   //loginButton.innerHTML = "Log Out"
   loginForm.style.display = 'block'
   carousel.style.display = 'none'    
   //mainForm.style.display = 'block'
   
}) 

/************ Starts function that observe if user is true   **********/

firebase.auth().onAuthStateChanged( user => {
   if(user){
      loginButton.innerHTML = "Log Out"
         if (user.photoURL){
            $("#avatar").attr("src", user.photoURL);
         } else {
            $("#avatar").attr("src", "./imagenes/usuarioauth.png");
         }
   } else {
      loginButton.innerHTML = "Sign In"
      $("#avatar").attr("src", "./imagenes/usuarioauth.png");

   }
})

/************ Starts function that observe if user is true   **********/


/**********Ends Login Form Seccion*********/

/*********Starts Carousel seccion*************/
const carousel = document.querySelector('#carousel')    

/********Ends carousel seccion***************/

/********Start Main Form seccion*****************/
const mainForm = document.querySelector('#mainForm')
const btnSeccion1 = document.querySelector("#btnSeccion1");

/******** Starts Hidding Elements Seccion **********/

mainForm.style.display = 'none'  //Poner "block" para desarrollo
loginForm.style.display = 'none'  //none

/******** Ends Hidding Elements Seccion **********/

/****************Seccion 1 ************/ 
btnSeccion1.addEventListener("click", () => {
   console.log("validating first seccion");
   validationSeccion1()
});
/**********Starts Validation seccion function 1************/
const validationSeccion1 = () => {
   let firstSeccion = document.querySelector('#seccion1')
   let secondSeccion = document.querySelector("#seccion2");
   let thirdSeccion = document.querySelector("#seccion3")
   let fourthSeccion = document.querySelector("#seccion4")
   let fifthSeccion = document.querySelector('#seccion5')
   let sixthSeccion = document.querySelector('#seccion6')
   let seventhSeccion = document.querySelector('#seccion7')
   let eigthSeccion = document.querySelector("#seccion8");
   let ninethSeccion = document.querySelector("#seccion9");
   let tenthSeccion = document.querySelector("#seccion10");

   let companyName = document.querySelector('#inputCompany').value
   let contactName = document.querySelector('#inputContact').value
   let inputPhone = document.querySelector('#inputPhone').value
      
      if (companyName === '' ||contactName === '' || inputPhone === ''){
         
         swal({
           title: `Please fill correctly those fields`,
           icon: `error`
         });
         
      } else { 
         firstSeccion.style.display = 'none'
         secondSeccion.style.display = "block"
         thirdSeccion.style.display = "block"
         fourthSeccion.style.display = "none"
         fifthSeccion.style.display = "none"
         sixthSeccion.style.display = "none"
         seventhSeccion.style.display = "none"
         eigthSeccion.style.display = "none";
         ninethSeccion.style.display = "none";
         tenthSeccion.style.display = "none";
      }
}
/**********Ends Validation seccion function 1************/

/************Ends Seccion 1************/ 

/************Starts Seccion 2************/ 
const btnSeccion2 = document.querySelector("#btnSeccion2");
btnSeccion2.addEventListener("click", () => {
   console.log('seccion 2 button works')
   validationSeccion2()
;});

/**********Starts Validation seccion function 2************/
const validationSeccion2 = () => { 

   let valve2way = document.getElementById('valve2way')
   let valve3way = document.getElementById('valve3way')
   
   let firstSeccion = document.querySelector("#seccion1")
   let secondSeccion = document.querySelector("#seccion2")
   let thirdSeccion = document.querySelector("#seccion3")
   let fourthSeccion = document.querySelector("#seccion4")
   let fifthSeccion = document.querySelector("#seccion5")
   let sixthSeccion = document.querySelector("#seccion6")
   let seventhSeccion = document.querySelector('#seccion7')
   let eigthSeccion = document.querySelector("#seccion8");
   let ninethSeccion = document.querySelector("#seccion9");
   let tenthSeccion = document.querySelector("#seccion10");

   let valveSize = document.querySelector("#inputValveSize").value;
   let brand = document.querySelector("#inputBrand").value;
   let location = document.querySelector("#inputLocation").value;
   
   function first(){
      if (valveSize === '' || brand === '' ){  
         swal({
            title: `Valve Size and Brand fields are required!`,
            icon: `error`
         });
      } else {
         second();
      }
   }
   function second(){
      let electric = document.getElementById("electric");
      let lp = document.getElementById("lp");
      let hp = document.getElementById("hp");

      if (valve3way.checked) {
         swal({
            icon: `success`
         })
         firstSeccion.style.display = "none"
         secondSeccion.style.display = "none"
         thirdSeccion.style.display = "none"
         fourthSeccion.style.display = "none"
         fifthSeccion.style.display = "none"
         sixthSeccion.style.display = "none"
         seventhSeccion.style.display = "block"
         eigthSeccion.style.display = "none";
         ninethSeccion.style.display = "none";
         tenthSeccion.style.display = "none";


      } 
      else if (valve2way.checked) {
         //&& valve3way.checked 
       if (electric.selected ) {
         swal({
           icon: `success`
         });
         firstSeccion.style.display = "none"
         secondSeccion.style.display = "none"
         thirdSeccion.style.display = "none"
         fourthSeccion.style.display = "block"
         fifthSeccion.style.display = "none"
         sixthSeccion.style.display = "none"
         seventhSeccion.style.display = "none"
         eigthSeccion.style.display = "none";
         ninethSeccion.style.display = "none";
         tenthSeccion.style.display = "none";

      } else if (hp.selected) {
         swal({
            icon: `success`
         });
         firstSeccion.style.display = "none";
         secondSeccion.style.display = "none"
         thirdSeccion.style.display = "none"
         fourthSeccion.style.display = "none"
         fifthSeccion.style.display = "block"
         sixthSeccion.style.display = "none"
         seventhSeccion.style.display = "none"
         eigthSeccion.style.display = "none";
         ninethSeccion.style.display = "none";
         tenthSeccion.style.display = "none";


      } else if (lp.selected) {
         swal({
            icon: `success`
         });
         firstSeccion.style.display = "none";
         secondSeccion.style.display = "none"
         thirdSeccion.style.display = "none"
         fourthSeccion.style.display = "none"
         fifthSeccion.style.display = "none"
         sixthSeccion.style.display = "block"
         seventhSeccion.style.display = "none"
         eigthSeccion.style.display = "none";
         ninethSeccion.style.display = "none";
         tenthSeccion.style.display = "none";


      } 
      
      else {
         swal({
            title: `Please select any checkbox`,
            icon: `error`
         });
      }
   } 
}

first()
     
}

/************Ends Seccion 2************/ 

/**********Ends Validation seccion function 2************/


/**********Starts Seccion 3************/

const btnSeccion3 = document.querySelector('#btnSeccion7');
btnSeccion3.addEventListener('click', ()=> {

   validationSeccion3()
});
/********Starts Main form seccion3 *****************/

const validationSeccion3 = ()=> {
   let firstSeccion = document.querySelector("#seccion1");
   let secondSeccion = document.querySelector("#seccion2");
   let thirdSeccion = document.querySelector("#seccion3");
   let fourthSeccion = document.querySelector("#seccion4");
   let fifthSeccion = document.querySelector("#seccion5");
   let sixthSeccion = document.querySelector("#seccion6");
   let seventhSeccion = document.querySelector("#seccion7");
   let eigthSeccion = document.querySelector("#seccion8");
   let ninethSeccion = document.querySelector("#seccion9");
   let tenthSeccion = document.querySelector("#seccion10");

   swal( {icon: `success`} );

   firstSeccion.style.display = "none";
   secondSeccion.style.display = "none";
   thirdSeccion.style.display = "none";
   fourthSeccion.style.display = "none";
   fifthSeccion.style.display = "none";
   sixthSeccion.style.display = "none";
   seventhSeccion.style.display = "none";
   eigthSeccion.style.display = "block";
   ninethSeccion.style.display = "none";
   tenthSeccion.style.display = "none";

}


/*****Ends Seccion 3************/

/********Ends Main form seccion3 *****************/


/**********Starts Seccion 4************/

const btnSeccion4 = document.querySelector('#btnSeccion8');
btnSeccion4.addEventListener('click', ()=> {

   validationSeccion4()
});
/********Starts Main form seccion4 *****************/

const validationSeccion4 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  swal({ icon: `success` });

  firstSeccion.style.display = "none";
  secondSeccion.style.display = "none";
  thirdSeccion.style.display = "none";
  fourthSeccion.style.display = "none";
  fifthSeccion.style.display = "none";
  sixthSeccion.style.display = "none";
  seventhSeccion.style.display = "none";
  eigthSeccion.style.display = "none";
  ninethSeccion.style.display = "block";
  tenthSeccion.style.display = "none";
};

/**********Starts Seccion 5************/

const btnSeccion5 = document.querySelector('#btnSeccion9');
btnSeccion5.addEventListener('click', ()=> {

   validationSeccion5()
});
/********Starts Main form seccion4 *****************/

const validationSeccion5 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  swal({ icon: `success` });

  firstSeccion.style.display = "none";
  secondSeccion.style.display = "none";
  thirdSeccion.style.display = "none";
  fourthSeccion.style.display = "none";
  fifthSeccion.style.display = "none";
  sixthSeccion.style.display = "none";
  seventhSeccion.style.display = "none";
  eigthSeccion.style.display = "none";
  ninethSeccion.style.display = "none";
  tenthSeccion.style.display = "block";
};


/**********Starts Seccion 5************/

// const btnSeccion6 = document.querySelector('#btnSeccion10');
// btnSeccion6.addEventListener('click', ()=> {

//    validationSeccion6()
// });
/********Starts Main form seccion4 *****************/

const validationSeccion6 = () => {
  let firstSeccion = document.querySelector("#seccion1");
  let secondSeccion = document.querySelector("#seccion2");
  let thirdSeccion = document.querySelector("#seccion3");
  let fourthSeccion = document.querySelector("#seccion4");
  let fifthSeccion = document.querySelector("#seccion5");
  let sixthSeccion = document.querySelector("#seccion6");
  let seventhSeccion = document.querySelector("#seccion7");
  let eigthSeccion = document.querySelector("#seccion8");
  let ninethSeccion = document.querySelector("#seccion9");
  let tenthSeccion = document.querySelector("#seccion10");

  swal({ icon: `success` });

  firstSeccion.style.display = "none";
  secondSeccion.style.display = "none";
  thirdSeccion.style.display = "none";
  fourthSeccion.style.display = "none";
  fifthSeccion.style.display = "none";
  sixthSeccion.style.display = "none";
  seventhSeccion.style.display = "none";
  eigthSeccion.style.display = "none";
  ninethSeccion.style.display = "none";
  tenthSeccion.style.display = "block";
};
