(()=>{"use strict";document.querySelector(".search"),document.querySelector(".city_name");const e=document.querySelector(".city").value;fetchUsers(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=3471d2dec0a5bbfa50a6a6a9569cbe0a`)})();