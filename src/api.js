const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
// const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-kr";
// const popularUrl = baseUrl + "movie/popular" + "?language=ko-kr";
// const topRatedUrl = baseUrl + "movie/top_rated" + "?language=ko-kr";
// const upcomingUrl = baseUrl + "movie/upcoming" + "?language=ko-kr";

const url = (urlName) => {
  return baseUrl + `${urlName}` + "?language=ko-kr";
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjMzMzA4YTJmMGJiMTY0ZTJhZDEwNTE0YWIzMDg2ZiIsInN1YiI6IjYwMmY2YjZiNjRmNzE2MDA0MDU2MjYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JE4tOx9I0MNBy3X-AGsUPZztvJTSo5edEt8HHbIY8go",
  },
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}` + "?language=ko-kr";
  return fetch(detailUrl, options).then((res) => res.json());
};
