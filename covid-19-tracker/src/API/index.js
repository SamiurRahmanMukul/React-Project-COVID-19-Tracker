import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedDate = { confirmed, recovered, deaths, lastUpdate };
    return modifiedDate;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyDate = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
