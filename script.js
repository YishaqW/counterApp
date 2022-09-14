//1. Create a new variable called 'total' and assign it the div with the id of 'total'
const total = document.querySelector('#total')
total.textContent = 10
let value = Number(total.textContent)

//2. Create Six Functions (add, subtract, multiplyBy2, divideBy5, multiplyBy5, divideBy5)
// Example:
function add() {
  value+=1
  total.textContent = value
  window.alert(value)
  console.log(value)
}

function subtract() {
  value-=1
  total.textContent = value
  window.alert(value)
  console.log(value)
}

function multiplyBy2() {
  value*=2
  total.textContent = value
  window.alert(value)
  console.log(value)
}

function divideBy2() {
  value/=2
  total.textContent = value
  window.alert(value)
  console.log(value)
}

function multiplyBy5() {
  value*=5
  total.textContent = value
  window.alert(value)
  console.log(value)
}

function divideBy5() {
  value/=5
  total.textContent = value
  window.alert(value)
  console.log(value)
}

//3. Attach Functions to Buttons
const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', add)

const subtractBtn = document.querySelector('#subtract')
subtractBtn.addEventListener('click', subtract)

const MultiplyTwoBtn = document.querySelector('#mult-2')
MultiplyTwoBtn.addEventListener('click', multiplyBy2)

const DivideTwoBtn = document.querySelector('#div-2')
DivideTwoBtn.addEventListener('click', divideBy2)

const MultiplyFiveBtn = document.querySelector('#mult-5')
MultiplyFiveBtn.addEventListener('click', multiplyBy5)

const DivideFiveBtn = document.querySelector('#div-5')
DivideFiveBtn.addEventListener('click', divideBy5)