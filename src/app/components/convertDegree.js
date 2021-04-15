const convertBtn = document.getElementById('convert');

function convertDegree() {
  let degreeVal = '';
  if (convertBtn.textContent === 'Celsius') {
    convertBtn.textContent = 'Fahrenheit';
    degreeVal = '&units=metric';
  } else {
    convertBtn.textContent = 'Celsius';
    degreeVal = '&units=imperial';
  }
  return degreeVal;
}

export default convertDegree;
