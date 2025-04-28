let nav = document.querySelector("nav");
document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    } 
});