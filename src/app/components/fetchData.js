import printData from './accessData.js';
import windowLoad from './windowLoad.js';
import searchEvent from './searchEvent.js';

windowLoad();
searchEvent();

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

export default fetchCities;
