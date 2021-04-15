import fetchCities from './fetchData';

const windowLoad = () => {
  const cityName = document.querySelector('.city');
  window.onload = () => {
    const city = cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a`;
    fetchCities(url);
  };
};

export default windowLoad;
