
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.getElementById("cityInput");
const output = document.getElementById("cityOutput");
const cities = [];


fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


input.addEventListener("input", updateView); //is this sufficient?

function updateView() {
    let filtered = cities.filter(containsCity);
    let formatted = filtered.map(place => {
        let i = input.value;
        const regex = new RegExp(i, 'gi');
        const city = place.city.replace(regex, `<span class="highlight">${i}</span>`);
        const state = place.state.replace(regex, `<span class="highlight">${i}</span>`);
        return `<li>${city}, ${state}</li>`
    }).join("");



    output.innerHTML = formatted;
} 

function containsCity(value) {

    let i = input.value.toLowerCase();
    return value.city.toLowerCase().includes(i) || value.state.toLowerCase().includes(i);
}