const searchForCity = document.querySelector('.search');
const printCityName = document.querySelector('.city_name');
const printData = (data) => {
  searchForCity.addEventListener('click', (e) => {
    e.preventDefault();
    printCityName.textContent = data.name;
    console.log(data);
  });
}

export default printData;
