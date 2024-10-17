console.log("01.Feladat:")
function indexszoroz(szamlista) {
    let osszeg = 0;
    for (let i = 0; i < szamlista.length; i++) {
        osszeg += szamlista[i] * i; 
    }
    return osszeg; 
}

console.log(indexszoroz([1, 2, 3, 4, 5]));

console.log("02.Feladat:")

function parosIndexEgybeesik(szamlista) {
    for (let i = 0; i < szamlista.length; i++) {
        if ((szamlista[i] % 2) !== (i % 2)) {
            return false;
        }
    }
    return true; 
}

console.log(parosIndexEgybeesik([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(parosIndexEgybeesik([2, 7, 9, 1, 6, 1, 6]));
