const search = localStorage.getItem("search")

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

function openMovies() {
    window.location.href = "movies.html"
}