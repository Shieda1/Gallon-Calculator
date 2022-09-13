// https://www.omnicalculator.com/conversion/gallon

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const litersRadio = document.getElementById('litersRadio');
const USgalRadio = document.getElementById('USgalRadio');

let liters;
let USgal = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

litersRadio.addEventListener('click', function() {
  variable1.textContent = 'US gal';
  USgal = v1;
  result.textContent = '';
});

USgalRadio.addEventListener('click', function() {
  variable1.textContent = 'liters';
  liters = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(litersRadio.checked)
    result.textContent = `liters = ${computeliters().toFixed(5)}`;

  else if(USgalRadio.checked)
    result.textContent = `US gal = ${computeEdgeLength().toFixed(5)}`;
})

// calculation

function computeliters() {
  return Number(USgal.value) * 3.785411784;
}

function computeEdgeLength() {
  return Number(liters.value) / 3.785411784;
}