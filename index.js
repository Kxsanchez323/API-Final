// const moviesEl = document.querySelector(".movies");
const search = localStorage.getItem("search")
// async function main() {

//   const movies = await fetch(`https://www.omdbapi.com/?apikey=13389d6d&s=${search}&type=movie`);
//   const moviesData = await movies.json();
//   moviesEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
// }

// function moviesHTML(movie) {
    
//   return `<div class="movie">   
//     <figure class="movie-img__wrapper no-cursor">
//       <img
//         src="${movie.Poster}"
//         alt=""
//         class="movie-img"
//       />
//     </figure>
//     <div class="movie__title">${movie.Title}</div>
//   </div>`;
  
// }

function onSearchChange(event) {
    const search = event.target.value
    localStorage.setItem("search", search)
    openMovies()
}


function openMenu() {
    document.body.classList += " menu--open"
}
function closeMenu() {
    document.body.classList.remove("menu--open")
}
// main();

function openMovies() {
    window.location.href = "movies.html"
}