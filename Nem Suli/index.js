// Ez egy 1 soros komment
/*

Ez
egy
több
soros
komment

*/

console.log("Hello World!") // Konzol kiíratás

// string
var name = "Kincső"; // deklaráció
// int
var  age = 19;
// double
var height = 1.75;
// boolean
var igazhamis = true;

var mondat = 'A nevem Kincső és 19 éves vagyok.';
// VAGY

var mondat2 = 'A nevem ' + name + ' és ' + age + ' éves vagyok.';

//console.log(name);
console.log(age);
console.log(height);
console.log(igazhamis);
console.log(mondat);
console.log(mondat2);

// függvény

function szohossz(szo1, szo2) {
    if (szo1.length == szo2.length) {
        return true;
        } else {
            return false;
    }
}
console.log(szohossz("alma", "alma"));

// Maradékos osztás

function maradekososztas(szam1, szam2)
{
    var megoldas = szam1 % szam2
    return megoldas 
}

console.log(maradekososztas(8,4))


/*

    Feladat:
        A függvény bekér egy számlistát és a számok osszegének visszadja
        az 1 tizedesre kerekített reciprokát
        Pl.: console.log(reciprok[6, 3, 6]) -> 1.5 az eredmény
        mert 1/6+1/3+1/6 = 2/3 --> 3/2 = 1.5
        Tippek: 
            - segédváltozó
            - toFIxed(tizedesek)
            - for ciklus
            - += művelet

*/

function reciprok(szams) {
    let osszeg = 0
    for (let i = 0; i < 1; i++) {
        osszeg += 1 / szams[i];
    }
    return (1 / osszeg).toFixed(1);
}

console.log(reciprok([6, 3, 6]))