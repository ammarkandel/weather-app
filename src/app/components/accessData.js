import moment from 'moment';

const printCityName = document.querySelector('.city_name');
const weatherDetails = document.querySelector('.weather_details');

const printData = (data) => {
  printCityName.textContent = data.name;
  const sunrise = moment(new Date(data.sys['sunrise'] * 1000)).format('h:mm:ss a');
  const sunset = moment(new Date(data.sys['sunset'] * 1000)).format('h:mm:ss a');
  weatherDetails.innerHTML = `
  <li><span>Sun rise</span> ${sunrise}</li>
  <li><span>Sun set</span> ${sunset}</li>
  <li><span>Wind speed</span> ${data.wind.speed} meters/s</li>
  <li><span>Tempreture</span> ${data.main.temp} °C</li>
  <li><span>Weather</span> ${data.weather[0].description} <img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'></li>
  `;
  console.log(data);
}

export default printData;
