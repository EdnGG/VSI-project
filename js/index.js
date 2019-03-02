console.log("Whats uppp!!")

const valveSize= document.querySelector(".valve-size")
valveSize.focus()

const valve2way = document.querySelector('.valve-type-2')

const valve3way = document.querySelector('.valve-type-3')

const valveList = document.querySelector('#valve-selection')


valveList.addEventListener('change', ()=> {
    console.log('listener working')
    if(valveList.value === '2-way'){
        valve2way.style.display = 'block'
        valve3way.style.display = 'none'
    } else {
        valve3way.style.display = 'block'
        valve2way.style.display = 'none'
    }

})


valve2way.style.display= 'none' 
valve3way.style.display = 'none' 

