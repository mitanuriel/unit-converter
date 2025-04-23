/*
1 meter = 3.281 feet 
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let messageEl = document.getElementById("message")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener("click", function(){
    let baseValue = Number(inputEl.value)
   
    
      if(isNaN(baseValue) || baseValue === 0){
       messageEl.textContent = "Type in a number from 1 to eternity"
       return
    }
    
    messageEl.textContent = ""
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilogram = ${(baseValue * kilogramToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue / kilogramToPound).toFixed(3)} kilogram`
    
  
}
)