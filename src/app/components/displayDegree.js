import convertDegree from './convertDegree';
import fetchCities from './fetchData';

const convertBtn = document.getElementById('convert');
const cityName = document.querySelector('.city');

convertBtn.addEventListener('click', () => {
  const printDegreeVal = convertDegree();
  const city = cityName.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a${printDegreeVal}`;
  fetchCities(url);
});
