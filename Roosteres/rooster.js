// De c nummer kan van 1-5 zijn. Het zou op de website mee updaten :)
let roosterNr = 2;

let roosterData = document.querySelector(`.c${roosterNr}`);

if (loggedIn === true) {
    roosterData.classList.add("ingeroosterd");

}