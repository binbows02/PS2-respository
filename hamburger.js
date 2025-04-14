
let hamburgerHTML = document.querySelector(`.hamburgerJS`);

function openHamburger() {
    if (hamburgerHTML.classList.contains(`hamburgerClosed`)) {
        hamburgerHTML.classList.remove(`hamburgerClosed`)
    } else {
        hamburgerHTML.classList.add(`hamburgerClosed`)
    }
}
