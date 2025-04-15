let PTdata = document.querySelector(`.c1`);

function selecteerPT() {
    if (PTdata.classList.contains(`PTgeselecteerd`)) {
        PTdata.classList.remove(`PTgeselecteerd`);
    } else {
        PTdata.classList.add(`PTgeselecteerd`);
    }
}