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
        console.log(`Ez a szám: i`);
        megoldás = megoldás.concat(főlista[i])
    }
}