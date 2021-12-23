const moviesDiv = document.getElementById("movies");

import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

export async function renderMovies() {
  const movies = await getPopularMovies();
  console.log(movies);
  moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("");
}

function renderSingleMovie(movie) {
  return (
    `
  <div>
    <img src="${config.image_base_url + movie?.poster_path}" class="post_thumbnail" onmouseover="enlargeImage(this)" onmouseout="reduceImage(this)">
    <p class="movie_title">${movie?.title}</p>
    </div>
  `
  )
}