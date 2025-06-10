
const nav = document.querySelector(".navbar");
fetch("../views/navbarIndexJS.html")
    .then(res => res.text())
    .then(data => { nav.innerHTML = data })
