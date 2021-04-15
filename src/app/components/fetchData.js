import printData from './accessData';
import convertDegree from './convertDegree';

const cityName = document.querySelector('.city');
const convertBtn = document.getElementById('convert');
const submitCityName = document.getElementById('search');

let city = cityName.value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a`;

const fetchCities = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.status);
  }
  const data = await res.json();
  printData(data);
};

window.onload = () => { fetchCities(url); };

submitCityName.addEventListener('click', (e) => {
  e.preventDefault();
  city = cityName.value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a`;
  fetchCities(url);
});

convertBtn.addEventListener('click', () => {
  const printDegreeVal = convertDegree();
  city = cityName.value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a${printDegreeVal}`;
  fetchCities(url);
});
