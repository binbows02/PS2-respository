// console.log('test');

let TPfotos = {
    foto1: '284.jpg',
    foto2: '288.jpg',
    foto3: '595.jpg',
    foto4: '599.jpg',
    foto5: '567.jpg'
}

let TPbg = document.querySelector('.switchBG');

let fotoNr = 1;

function switchTPBG() {
    setInterval(() => {
        if (fotoNr < 5) {
            fotoNr++;
        } else {
            fotoNr = 1;
        }

        fotoKey = `foto${fotoNr}`;
        TPbg.innerHTML = `<img src="../CSS/images/Gallerij/${TPfotos[fotoKey]}" alt="">`;

    }, 10000);
}

switchTPBG();