import moment from 'moment';

const printCityName = document.querySelector('.city_name');

const printData = (data) => {
  printCityName.textContent = data.name;
  const sunrise = moment(new Date(data.sys['sunrise'] * 1000)).calendar();
  const sunset = moment(new Date(data.sys['sunset'] * 1000)).calendar();


}

export default printData;
