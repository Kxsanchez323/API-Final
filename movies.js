const moviesEl = document.querySelector(".movies");
async function renderMovies(filter) {

    moviesEl.classList += " movies__loading"
  const movies = await fetch(`https://www.omdbapi.com/?apikey=13389d6d&s=${search}&type=movie`);
  const moviesData = await movies.json();
  moviesEl.classList.remove("movies__loading")
  if ( filter === "OLD_TO_NEW") {
    moviesData.Search.sort(
        (a, b) =>
          a.Year - b.Year
      );
  }
  if ( filter === "NEW_TO_OLD") {
    moviesData.Search.sort(
        (a, b) =>
          b.Year - a.Year
      );
  }
  moviesEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
}

function filterMovies(event) {
    renderMovies(event.target.value)
}

function moviesHTML(movie) {
    
  return `<div class="movie">   
    <figure class="movie-img__wrapper no-cursor">
      <img
        src="${movie.Poster}"
        alt=""
        class="movie-img"
      />
    </figure>
    <div class="movie__title">${movie.Title}</div>
  </div>`;
  
}

renderMovies();