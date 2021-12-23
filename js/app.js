import { renderMovies } from "./movies.js";

function App() {
  renderMovies();
}

App();

/*
let alertText = "Bem-vindo ao meu site.";
alert(`${alertText}`);
console.log(`${alertText}`);
*/

/*
let movie;

function getMovieInfo() {
  theMovieDb.search.getMovie({"query": "Fight%20Club"}, gotMovieInfo, failedMovieInfo);
}

function gotMovieInfo(data) {
  console.log("success " + data);
}

function failedMovieInfo(data) {
  console.log("failed");
}

getMovieInfo();
*/