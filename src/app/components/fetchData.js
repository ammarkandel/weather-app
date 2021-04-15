import printData from './accessData';

const cityName = document.querySelector('.city');

let city = cityName.value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a&units=metric`;

const fetchCities = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.status);
  }
  const data = await res.json();
  printData(data);
};

window.onload = () => { fetchCities(url); };

export default fetchCities;
