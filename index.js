const number= document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
const resultLength = document.getElementById("result-length")
const resultVolume = document.getElementById("result-volume")
const resultMass = document.getElementById("result-mass")

const conversion = {
    feet: 3.2808,
    meters: 0.3048,
    gallons: 0.2642,
    liters: 3.7854,
    pounds: 2.2046,
    kilos: 0.4536
  }

let inputValue = number.value

convertBtn.addEventListener("click", function() {
  let inputValue = Number(number.value)
  render(inputValue)
  number.disabled = true
})

function render(input) {
  let result = calculate(input)

  feetMeter = `${input} meters = ${result.feet} feet | ${input} feet = ${result.meters} meters`
  gallonLiter = `${input} liters = ${result.gallons} gallons | ${input} gallons = ${result.liters} liters`
  poundKilo = `${input} kilos = ${result.pounds} pounds | ${input} pounds = ${result.kilos} kilos`

  resultLength.textContent = feetMeter
  resultVolume.textContent = gallonLiter
  resultMass.textContent = poundKilo
}

function calculate(input) {
  feet = `${input}` * `${conversion.feet}`
  meters = `${input}` * `${conversion.meters}`
  gallons = `${input}` * `${conversion.gallons}`
  liters = `${input}` * `${conversion.liters}`
  pounds = `${input}` * `${conversion.pounds}`
  kilos = `${input}` * `${conversion.kilos}`
  return { feet, meters, gallons, liters, pounds, kilos }
}

resetBtn.addEventListener("click", function() {
  number.disabled = false
  number.value = ""
  resultLength.textContent = ""
  resultVolume.textContent = ""
  resultMass.textContent = ""
})