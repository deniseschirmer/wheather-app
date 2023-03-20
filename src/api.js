export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "'606f0af189msh9d89efe3597153fp1cbbcejsn5405672abf01",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "8d923b6d7ebd22cba57addbeadb6a73f";

export const teste = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=6322752&appid=8d923b6d7ebd22cba57addbeadb6a73f&lang=pt_br"
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
