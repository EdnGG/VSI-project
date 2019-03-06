
/*********** Inicializando Firebase**************************/

firebase.initializeApp(config);

/******** Inicializando Firebase-Firestore ***************/

let db = firebase.firestore();

/***********************************************/


/***********************************************/

/***********************************************/



/************************************************/
const save = () => {   

    let valveSize = document.querySelector('#valveSize').value
    let brand = document.querySelector('#brand').value
    let series = document.querySelector('#series').value

    let company = document.querySelector('.company-field').value
    let contact = document.querySelector('.contact-field').value
    let location = document.querySelector('.location-field').value
    let project = document.querySelector('.project-field').value
    let phoneContact = document.querySelector('.phone-field').value
    let faxContact = document.querySelector('.fax-field').value


        db.collection("clientes").add({
            Company : company,            
            Contact_name: contact,
            Location: location,
            Project: project,
            Phone_Contact: phoneContact,
            Fax_Contact: faxContact,
            ValveSize: valveSize,
            brand: brand,
            series: series
        })
        // if promise was succesfull
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        // if promise was reject
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    console.log('New client create!')
}

/*******************  Starts  Global Variables   *****************************/

let valveSize = document.querySelector('#valveSize').value
let brand = document.querySelector('#brand').value
let series = document.querySelector('#series').value

/*********************  Ends Global Variables   **************************/

// const valveSize= document.querySelector(".valve-size")
// valveSize.focus()

// Focus on the first field of the form
const companyField = document.querySelector("#company")
company.focus()

// Valve info seccion part 2
const valveInfoSeccion = document.querySelector('.information-seccion')  

// Client info seccion part 1
const infoSeccion = document.querySelector('.client-info') 

// Valve info seccion part 3
const listTypeValve = document.querySelector('.list-type-valve') 

// Saving the form in a variable
const form = document.querySelector('.form-container')

const valve2way = document.querySelector('.valve-type-2')
const valve3way = document.querySelector('.valve-type-3')
const valveList = document.querySelector('#valve-selection')

const submitButton = document.querySelector('#btn')
const buttonNextSeccion = document.querySelector('.btn-info')

/************************************************/
buttonNextSeccion.addEventListener('click', (e) =>{
   e.preventDefault()
    
    let company = document.querySelector('.company-field').value
    let contact = document.querySelector('.contact-field').value
    let location = document.querySelector('.location-field').value
    let project = document.querySelector('.project-field').value
    let phoneContact = document.querySelector('.phone-field').value
    let faxContact = document.querySelector('.fax-field').value

        
    
    if (company ==='' && contact ==='' && location ==='' && project ===''&& phoneContact ==='' && faxContact ===''){
            swal({
                title: `Validation seccion works`,
                icon: `success`
            })

    } else {

        infoSeccion.style.display = 'none'
        valveInfoSeccion.style.display = 'block'
        listTypeValve.style.display = 'block'
        submitButton.style.display = 'block'

    }

})

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    swal({
        title: `Submit button works. Posting data on firebase`,
        icon: `success`
    })
    save()

})

/************************************************/
valveList.addEventListener('change', ()=> {
    console.log('listener working')
        swal({
            title: `Valve list seccion works`,
            icon: `success`
        })

        if (valveList.value === '2-way') {
            valve3way.style.display = 'none'
            valve2way.style.display = 'block'

        } else if (valveList.value === '3-way'){
            valve3way.style.display = 'block'
            valve2way.style.display = 'none'

        } else if (valveList.value === 'choose') {
            valve2way.style.display = 'none'
            valve3way.style.display = 'none'

        }
})


/************************************************/

submitButton.style.display = 'none'
valve2way.style.display= 'none' 
valve3way.style.display = 'none' 
//clientInfo.style.display = 'none'
valveInfoSeccion.style.display = 'none'
listTypeValve.style.display = 'none'
//form.style.display = 'none'



