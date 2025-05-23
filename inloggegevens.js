let gegevens = {
    info: {
        naam: ``,
        rol: ``,
    },
    gegevens: {
        email: ``,
        wachtwoord: ``,
    }
};

let p1 = {
    info: {
        naam: `Sander`,
        rol: `VCS Lid`,
    },
    gegevens: {
        email: `sander@gmail.com`,
        wachtwoord: `sander123`,
    }
}

let inlogData = JSON.parse(localStorage.getItem('loggedIn'));

// console.log(inlogData);

// Of je bent ingelogd of niet --- BELANGRIJK!
if (inlogData === null || inlogData === false) {
    loggedIn = false;
}
else if (inlogData === true) {
    loggedIn = true;
}
// 

let gebruikerDivJS = document.querySelector(`.gebruikerDiv`);
let loginIconJS = document.querySelector(`.loginIcon`);

if (loggedIn === true) {
    // ------------------- Dit deel heb ik gebruik gemaakt van AI -------------------
    // Dit snijdt de naam af en voegt '...' toe als het langer is dan 6 tekens
    let truncatedNaam = p1.info.naam.length > 6
        ? p1.info.naam.substring(0, 7) + '...'
        : p1.info.naam;

    let truncatedRole = p1.info.rol.length > 7
        ? p1.info.rol.substring(0, 7) + '...'
        : p1.info.rol;
    // ----------------------------------------------------------------------------

    let gebruikerInfoJS = document.querySelector(`.gebruikerInfo`);

    gebruikerDivJS.classList.add(`loggedIn`);
    loginIconJS.classList.remove(`loggedOut`);

    gebruikerInfoJS.innerHTML = `
        <p class="VCSuser">${truncatedNaam}</p>
        <p class="VCSrole">${truncatedRole}</p>
    `;
} else {
    gebruikerDivJS.classList.remove(`loggedIn`);
    loginIconJS.classList.add(`loggedOut`);
};

function appearGebInst() {
    if (loggedIn === true) {
        let gebInst = document.querySelector(`.gebruikerInst`);

        // ------------------- Dit deel heb ik gebruik gemaakt van AI ------------------
        // Dit zorgt ervoor dat de instelling opent en dichtgaat wanneer je wegklikt
        if (gebInst.classList.contains('visible')) {
            gebInst.classList.remove('visible');
            gebInst.innerHTML = '';
            document.removeEventListener('click', closeGebInstOnClickOutside);
        } else {
            //                  /!\ Deze html code is GEEN AI /!\
            gebInst.innerHTML = `
            <ul>
                <li><a href="">Instellingen</a></li>
                <li><a href="">Teamcode</a></li>
                <li class="uitloggen" onclick="logOut();"><a href="">Uitloggen</a></li>
            </ul>
            `;
            //                 /!\ Deze html code is GEEN AI /!\
            gebInst.classList.add('visible');

            setTimeout(() => {
                document.addEventListener('click', closeGebInstOnClickOutside);
            }, 0);
            //----------------------------------------------------------------------------
        }
    }
}

function closeGebInstOnClickOutside(event) {
    let gebInst = document.querySelector(`.gebruikerInst`);
    if (!gebInst.contains(event.target)) {
        gebInst.classList.remove('visible');
        gebInst.innerHTML = '';
        document.removeEventListener('click', closeGebInstOnClickOutside);
    }
}

function loginOpenWindow() {
    if (loggedIn === false || loggedIn === null) {
        // ------------------- Dit deel heb ik gebruik gemaakt van AI -------------------
        // Ik kon geen andere manier bedenken om de pagina te kunnen laden (op vanaf elke locatie, terwijl index in de root moest staan)..
        if (!window.location.pathname.includes('index.html')) {
            window.open('../Inloggen/inlog.html', '_self');
        } else {
            window.open('Inloggen/inlog.html', '_self');
        }
        // ----------------------------------------------------------------------------
    }
}

function logOut() {
    loggedIn = false;

    gebruikerDivJS.classList.remove(`loggedIn`);
    loginIconJS.classList.add(`loggedOut`);

    let gebInst = document.querySelector(`.gebruikerInst`);
    gebInst.classList.remove('visible');
    gebInst.innerHTML = '';

    // ------------------- Dit deel heb ik gebruik gemaakt van AI -------------------
    // Zelfde als bovenstaand, maar dan voor uitloggen
    if (!window.location.pathname.includes('index.html')) {
        window.open('../index.html', '_self');
    } else {
        window.open('index.html', '_self');
    }
    // ----------------------------------------------------------------------------

    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
}

function checkLogin() {
    let email = document.querySelector(`.emailJS`);
    let wachtwoord = document.querySelector(`.wachtwoordJS`);

    if (email.value === p1.gegevens.email && wachtwoord.value === p1.gegevens.wachtwoord) {
        logIn();
    } else {
        alert(`
het emailadres is "sander@gmail.com"
en het wachtwoord is "sander123" 

;)`);
    }
}

function logIn() {
    loggedIn = true;
    window.open('../index.html', '_self')

    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
}