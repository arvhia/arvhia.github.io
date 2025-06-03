
const nav = document.querySelector(".navbar");
fetch("../views/navbarViewsJS.html")
    .then(res => res.text())
    .then(data => { nav.innerHTML = data })
