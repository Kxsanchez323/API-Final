const url = "https://www.omdapi.com/?apikey=13389d6d&";
const moviesList = document.querySelector(".movies");
const formLabel =  document.querySelectorAll("label");

// current trending movies as of 8/19/2023

const trendingMoviesIds = [
    "tt1517268",
    "tt15398776",
    "tt6791350",
    "tt9224104",
    "tt8589698",
    "tt13603966",
    "tt9362722",
    "tt10172266",
];

function movieHtml(movie) {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
      <img
        src="${movie.Poster}"
        alt=""
        class="movie__img" />
    </figure>
    <div class="movie__info">
    <h3 class="movie__title">${movie.Title}
    <br>
    <span class="movie__year">${movie.Year}</span>
    </h3>
    </div>
    </div> `
}

async function renderMovies(movieId) {
    const movieRender = await fetch(url + `i=${movieId}`);
    const movieData = await movieRender.json();

    moviesList.innerHTML += movieHtml(movieData);
}


async function renderTrendingMovies() {
    for (const movieId of trendingMoviesIds) {
        await renderMovies(movieId);
    }
}

renderTrendingMovies();