function egyezik(lista1, lista2) {
    lista1 = lista1.toString();
    lista2 = lista2.toString();
    if (lista1 === lista2) {
        return true;
    } else {
        return false;
    }
}

function egyezik(lista1, lista2) {
    for (let i = 0; i < lista1.length; i++) {
        if (lista1[i] !== lista[i]) {
            return false;
        }
    }
    return true;
}

// --------------------------------------------------------------------------

/*

Konkatenálás: Kettő vagy több lista összefűzése egy új változóba

Pl.:

var lista1 = [1, 2, 3]
var lista2 = [4, 5, 6]
var lista3 = [7, 8, 9]

Ezeket egyesítjük egy új változóba

újlista = elsölistaneve.concat(többilistanevei)
*/

var lista1 = [1, 2, 3]
var lista2 = [4, 5, 6]
var lista3 = [7, 8, 9]

const lista4 = lista1.concat(lista2, lista3)

console.log(lista4);

/*

Változók: a JS-ben nem típus hanem hozzáférhetőség szerint van 3:
    var: általános leggyakoribb típus
    let: csak lokálisan értelmezzük (pl. egy függvényen belül)
    const: fix tartalom, utólag nem lehet megváltoztatni

*/

function egyberak(főlista) {
    megoldás = [];
    for (let i = 0; i < lista.length; i++) {
        megoldás = megoldás.concat(főlista[i])
    }
    return megoldás
}

/*
var a = 4;
var szoveg = `A változó tartalma ${a}`;
    - behívás módja: ${változóneve}
    - Ilyenkor az AltGr+7 féle idézőjel kell
    Az eredmény mondat: A  változó tartalma 4

    A függvény számolja ki, hogy az adott számú félbahjtás után
    milyen vastag lesz a kezdetben 0.5 mm vastag papírlap.
    pl.: félbe(10) --> "Végleges vastagság x métetr"
*/

function felbe(hajtasok) {
    let szamol = 0;
    let vastag = .0005;

    let i = 0;
    while (szamol < hajtasok) {
        vastagsag *= 2;
        szamol++;
    }
    return `Végleges vastagság ${vastagsag} méter`
}

// --------------------------------------------------------------------------

function felbe(hajtasok) {
    let szamol = 0;
    let vastag = .0005;

    for (let i = 0; szamol < hajtasok; i++) {
        vastagsag *= 2;
    }
    return `Végleges vastagság ${vastagsag} méter`
}
