var navIsOpen = false;

function toggleNav() {
    let nav = document.getElementById("side-nav")
    let width = screen.width;
    if (navIsOpen) {
        nav.style.width = "0px";
    } else {
        if (width <= 1000) {
            nav.style.width = "350px";
        } else {
            nav.style.width = "200px";
        }
    }

    navIsOpen = !navIsOpen;
}
