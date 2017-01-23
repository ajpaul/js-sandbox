
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.getElementById("cityInput");
const output = document.getElementById("cityOutput");
const cities = [];
var inputVal;


fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


input.addEventListener("input", updateView); //is this sufficient?

function updateView() {
    inputVal = input.value.toLowerCase();
    output.innerText = cities.filter(containsCity);

    // '\n' is newline
    // filtered.forEach(function (element) {
    //     output.innerText += `${element.city}, ${element.state}\n`;
    // })

    if(inputVal === "")
        output.innerText = "";

} 

function containsCity(value) {
    return value.city.toLowerCase().includes(inputVal) 
        || value.state.toLowerCase().includes(inputVal);
}