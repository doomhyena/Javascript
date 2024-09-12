/*

Függvény, am 1-től x-ig összead minden számot

+1 contribution

*/

function sum(num){
    let amount = 0;
    for (let i = 1; i <= num; i++){
        amount += i;
    }
    return amount;

}

console.log(sum(4))

function szamol(x, y){
    return x*2**y
}


// Hatványozás: alap ** kietvő
console.log(szamol(10,3))

/* 

A függvény kiszedi egy külön listába egy számlista legkissebb és legnagyobb értékét

ol.: [1,2,3,4,5] --> [1,4]

*/

function minimax(lista){
    var min, max = lista[0]; //2 új változót 1 sorba értékük pedig a lista 1. eleme

    for (var i = 0; i < lista.length; i++){
        if (lista[i] > max) {
            max = lista[i];
        }
        if (lista[i] < min) {
            min = lista[i];
        }
    }
    return[min, max]
}

/*

Ha végig együnk egy listán, akkor az egyenkénti elemeket nézi.
Ha végigmegyünk egy szüvegen, akkor meg a betüket nézi.
A számokat viszont több jegy esetén is egy elemnek nézi, így "szöveges formátumban" kell alakítani, hogy hozzáférjünk az egyedi számjegyekhez

*/

var a = 33;
var b = a.toString();

// Így már végig lehet menni az egyedi jegyeken

var c = "valami";
//A c második betűje legyen d tartalma
var d = c.charAt(1);

// 1.Feladat: Megvizsgálunk 1 db kétjegyű számot és megvizsgáljuk, hogy a 2 lehetséges elrendezés közül a nagyobbik van-e.

function combo(num) {
    var stringnumber = num.toString();
    if (stringnumber.charAt(0) > stringnumber.charAt(1)) {
        return true;
    } else {
        return false;
    }
}

// 2.Feladat: Hány True érték van a vizsgált tömben?

function howmanytrue(block) {
    var szam1 = 0;
    for (var i = 0; i < block.length; i++) 
        if (block[i] === true) {
            szam1++;
        }
}

/*

= --> deklaráció
== --> tartalom egyezésvizsgálata
=== --> tartalom és típus is egyezzen

*/


/* 

3.Feladat a Társasjátékban lépegetünk 2-en a dobókocka alapján 
A jelenlegi pozicíónk alapján léphetek-e úgy, hogy pontosan a társam mezőjére lépjek?
Pl.: társas(5,3) -> false, mert nem léphetek hátrafelé
     társas(2, 4) -> true, igen ha kettőt dobok     
     társas(2, 9) -> fales, nem mert 6-nál többet kellene dobnom    

*/