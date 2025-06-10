
const nav = document.querySelector(".navbar");
fetch("../views/navbarIndexJS.html")
    .then(res => res.text())
    .then(data => { nav.innerHTML = data })

const footer = document.querySelector("#footer");
fetch("../views/footerViews.html")
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data;
        addNumber();
    })

