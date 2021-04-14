import fetchCities from './fetchData';

const submitCityName = document.getElementById('search');

const searchEvent = () => {
  return submitCityName.addEventListener('click', (e) => {
    e.preventDefault();
    let city = cityName.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a&units=metric`;
    fetchCities(url);
  })
}

export default searchEvent;
