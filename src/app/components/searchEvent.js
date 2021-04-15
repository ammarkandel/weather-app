import fetchCities from './fetchData';

const submitCityName = document.getElementById('search');
const cityName = document.querySelector('.city');

const searchEvent = () => {
  submitCityName.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a`;
    fetchCities(url);
  });
};

export default searchEvent;
