const screen1 = document
.querySelector('.screen1')

const screen2 = document
.querySelector('.screen2')

const btnTry = document
.querySelector('#btnTry')

const inputNumber = document.
querySelector('#inputNumber')

const btnReset = document
.querySelector('#btnReset')

const tryText = document
.querySelector('.tryText')





const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
console.log(randomNumber)


//função callback

function handleTryClick(event) {
  event.preventDefault()

  if (Number(inputNumber.value) === randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document
    .querySelector('.screen2 h2')
    .innerText = `Acertou em ${xAttempts} tentativas`
  }
  
  tryText.classList.remove('hide')
  inputNumber.value = "";
  xAttempts++
  
  
}



 




//events
inputNumber.oninput = () =>{
  tryText.classList.add('hide')
}

btnTry.addEventListener('click',handleTryClick)

btnReset.addEventListener('click',function(){ 

  
  location.reload()


  // screen1.classList.remove('hide')
  // screen2.classList.add('hide')
  

  xAttempts = 1
})

