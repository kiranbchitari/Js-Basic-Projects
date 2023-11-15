const form = document.querySelector('form');
const result = document.querySelector('#results');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
   
    const bmi = calculateBmi(height, weight);
    result.innerHTML = bmi
    console.log(bmi);
})

function calculateBmi(height, weight) {
    return ((weight / (height * height))*10000).toFixed(2)
}