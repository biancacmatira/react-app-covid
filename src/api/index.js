import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// async function
export const fetchData = async (country) => {
  let urlCountry = url;

  if (country) {
    urlCountry = `${url}/countries/${country}`;
  }

  try {
    const { data } = await axios.get(urlCountry);
    const mainData = {
      active: data.confirmed.value - (data.recovered.value + data.deaths.value),
      recovered: data.recovered.value,
      deaths: data.deaths.value,
      total: data.confirmed.value,
      lastUpdate: data.lastUpdate,
    };
    return mainData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const mainData = data.map((daily) => ({
      total: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
    return mainData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
