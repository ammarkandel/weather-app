const convertBtn = document.getElementById('convert');

function convertDegree() {
  let degreeVal = '';
  if (convertBtn.textContent === 'Fahrenheit') {
    convertBtn.textContent = 'Celsius';
    degreeVal = '&units=imperial';
  } else {
    convertBtn.textContent = 'Fahrenheit';
    degreeVal = '&units=metric';
  }
  return degreeVal;
}

export default convertDegree;
