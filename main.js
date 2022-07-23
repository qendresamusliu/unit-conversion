let baseValue = 0;
let input = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let rotateEl = document.getElementById("rotate")

const meter = 0.304
const feet = 3.281
const liter = 0.264
const gallons = 3.78
const kilo = 2.204
const pounds = 0.453

function enter() {
    baseValue = input.value
    length.textContent = `${baseValue} Meter = ${baseValue * feet.toFixed(2)} Feet`
    volume.textContent = `${baseValue} Liter = ${baseValue * liter.toFixed(2)} Gallons`
    mass.textContent = `${baseValue} Kilo = ${baseValue * kilo.toFixed(2)} Pounds`
}

rotateEl.addEventListener("click", function() {
    baseValue = input.value
    length.textContent = `${baseValue} Feet = ${baseValue * meter.toFixed(2)} Meter `
    volume.textContent = `${baseValue} Gallons = ${baseValue * gallons.toFixed(2)} Liter`
    mass.textContent = `${baseValue} Pounds = ${baseValue * pounds.toFixed(2)} Kilo`
})
