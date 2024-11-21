const kezdgomb = document.getElementById('start-btn');
const kovetkezogomb = document.getElementById('next-btn');
const kerdestarto = document.getElementById('kerdes-container');
const kerdeselem = document.getElementById('kerdes');
const valaszgombelem = document.getElementById('egyediValasz-buttons');

let megkevertkerdesek, jelenlegiKerdesIndex;

kezdgomb.addEventListener('click', jatekkezdes);

kovetkezogomb.addEventListener('click', () => {
    jelenlegiKerdesIndex++;
    kovetkezoKerdes();
});

function jatekkezdes() {
    kezdgomb.classList.add('hide');
    megkevertkerdesek = [...kerdesek].sort(() => Math.random() - 0.5);
    jelenlegiKerdesIndex = 0;
    kerdestarto.classList.remove('hide');
    kovetkezoKerdes();
}

function kovetkezoKerdes() {
    visszaallit();
    kerdesMutat(megkevertkerdesek[jelenlegiKerdesIndex]);
}

function kerdesMutat(kerdes) {
    kerdeselem.innerText = kerdes.kerdes;
    kerdes.valaszok.forEach(egyediValasz => {
        const gomb = document.createElement('button');
        gomb.innerText = egyediValasz.text;
        gomb.classList.add('btn');
        if (egyediValasz.helyes) {
            gomb.dataset.helyes = egyediValasz.helyes;
        }
        gomb.addEventListener('click', valaszjelol);
        valaszgombelem.appendChild(gomb);
    });
}

function visszaallit() {
    statuszUrit(document.body);
    kovetkezogomb.classList.add('hide');
    while (valaszgombelem.firstChild) {
        valaszgombelem.removeChild(valaszgombelem.firstChild);
    }
}

function valaszjelol(e) {
    const megjeloltGomb = e.target;
    const helyes = megjeloltGomb.dataset.helyes === 'true';
    statusJel(document.body, helyes);
    Array.from(valaszgombelem.children).forEach(gomb => {
        statusJel(gomb, gomb.dataset.helyes === 'true');
    });
    if (megkevertkerdesek.length > jelenlegiKerdesIndex + 1) {
        kovetkezogomb.classList.remove('hide');
    } else {
        kezdgomb.innerText = 'Újrakezd';
        kezdgomb.classList.remove('hide');
    }
}

function statuszUrit(elem) {
    elem.classList.remove('helyes');
    elem.classList.remove('helytelen');
}

function statusJel(elem, helyes) {
    statuszUrit(elem);
    if (helyes) {
        elem.classList.add('helyes');
    } else {
        elem.classList.add('helytelen');
    }
}

const kerdesek = [
    {
        kerdes: 'Melyik a legnagyobb ország?',
        valaszok: [
            { text: 'Ausztria', helyes: false },
            { text: 'Szlovákia', helyes: false },
            { text: 'Oroszország', helyes: true },
            { text: 'Magyarország', helyes: false }
        ]
    },
    {
        kerdes: 'Mi a legnagyobb ország fővárosa?',
        valaszok: [
            { text: 'Moszkva', helyes: true },
            { text: 'Budapest', helyes: false },
            { text: 'Szeged', helyes: false },
            { text: 'Debrecen', helyes: false }
        ]
    },
    {
        kerdes: 'Mi Magyarország fővárosa?',
        valaszok: [
            { text: 'Budapest', helyes: true },
            { text: 'Szeged', helyes: false },
            { text: 'Miskolc', helyes: false },
            { text: 'Debrecen', helyes: false }
        ]
    }
];
