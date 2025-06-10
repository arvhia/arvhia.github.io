
const nav = document.querySelector(".navbar");
fetch("../views/navbarViewsJS.html")
    .then(res => res.text())
    .then(data => { nav.innerHTML = data })

// Added 09-06-25. Footer div

const footer = document.querySelector(".footer");
fetch("../views/footerViews.html")
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data;
        addNumber();
    })

