
let hamburgerHTML = document.querySelector(`.hamburgerJS`);
let hamburgerOpen = document.querySelector(`.hamburgerOpenedJS`)

function openHamburger() {
    if (hamburgerHTML.classList.contains(`hamburgerClosed`)) {
        hamburgerHTML.classList.remove(`hamburgerClosed`)
    } else {
        hamburgerHTML.classList.add(`hamburgerClosed`)
    }
}

function hamburgerOpened() {
    if (hamburgerOpen.classList.contains(`opacityDark`)) {
        hamburgerOpen.classList.remove(`opacityDark`)
    } else {
        hamburgerOpen.classList.add(`opacityDark`)
    }
}