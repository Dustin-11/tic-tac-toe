let hamburgerMenu = document.getElementById("menu__button");

hamburgerMenu.addEventListener("click", dropDown);
function dropDown() {
    let nav = document.getElementById("nav");
   if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
/*
function close() {
    if (nav.style.display = "block") {
        nav.style.display = "none";
    }
} */