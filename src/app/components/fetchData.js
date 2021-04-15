import printData from './accessData';
import windowLoad from './windowLoad';
import searchEvent from './searchEvent';
import degreeFetch from './convertDegree';

windowLoad();
searchEvent();
degreeFetch();

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
};

export default fetchCities;
