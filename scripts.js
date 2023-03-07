const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// When someone clicks the hamburger menu
navToggle.addEventListener('click', () => {
    // if the menu is closed, open it
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

    console.log(navToggle.getAttribute("aria-expanded"));
});
// if the menu is open, close it


