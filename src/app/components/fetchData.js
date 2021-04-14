import printData from './accessData.js';

const cityName = document.querySelector('.city');
const submitCityName = document.getElementById('search');

submitCityName.addEventListener('click', (e) => { // units=imperial
  e.preventDefault();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a&units=metric`;
  fetchCities(url);
})

const fetchCities = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
       throw new Error(res.status);
    }
    const data = await res.json();
    printData(data);
    } catch (error) {
       console.log(error);
    }
}
