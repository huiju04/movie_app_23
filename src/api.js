const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjAwYjM3ODY4MjZiZTFiNTM3MTlkYzNhNTBhZGEwNiIsInN1YiI6IjY1NGIzYTEyMjg2NmZhMDBmZTAxNzJmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HjrE_fe9gdJfjK8rCyxw-aoZ47zBKGjNQcE1c-PD9Ok",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
