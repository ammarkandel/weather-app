import moment from 'moment';

const printCityName = document.querySelector('.city_name');
const weatherDetails = document.querySelector('.weather_details');

const changeDgree = (data) => {
  const temp = document.createElement('li');
  const btnDeg = document.getElementById('convert');
  let degree;

  btnDeg.textContent.slice(0, 1) === 'F' ? degree = 'C' : degree = 'F';
  temp.innerHTML = `<span>Tempreture</span> ${data.main.temp} °${degree}`;
  weatherDetails.appendChild(temp);
};

const printData = (data) => {
  printCityName.textContent = data.name;
  const sunrise = moment(new Date(data.sys.sunrise * 1000)).format('h:mm:ss a');
  const sunset = moment(new Date(data.sys.sunset * 1000)).format('h:mm:ss a');
  weatherDetails.innerHTML = `
  <li><span>Sun rise</span> ${sunrise}</li>
  <li><span>Sun set</span> ${sunset}</li>
  <li><span>Wind speed</span> ${data.wind.speed} meters/s</li>
  <li><span>Weather</span> ${data.weather[0].description} <img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'></li>
  `;
  changeDgree(data);
};

export default printData;
