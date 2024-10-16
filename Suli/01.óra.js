// egysoros komment
/*
több
soros
koment
*/
console.log("Hello World!")

var nev = "Kincso";
var kor = 19;
// ez egy egész szám (int)
var a = 5;
var b = 6;
var c = 10 + 10
var d = 10 - 5
var inkrementált = 4
var tizedes = 1.5
// double
var sz1 = "SzövegA "
var sz2 = "SzövegB "
var sz3 = "SzövegC" + "SzövegD"
var mondat = "A nevem " + nev + " és " + kor + " éves vagyok" 
var x = "Történelem"
var y = "45"

console.log(nev)

/*
var: változó elölése
meve,: én most így neveztem el ezt a változót, így vivatkoznak rá majd 
"Kincso": a változó végleges  tartalma

*/

console.log(kor)

kor = 20;

console.log(kor)

b = a;

console.log(b)
console.log(c)
console.log(d)

inkrementált = inkrementált + 1

console.log(sz1+sz2)
console.log(mondat)

//Feladat: Kedvenc érettségi tárgyam az X volt és Y pontot értem el rajta

console.log("Kedvenc érettségi tárgyam a " + x + " volt és " + y + " pontot értem el rajta")

// Feladat A c és d változók legyenek a és b összege és szorzata

var a = 3; 
var b = 3;
var c = a + b;
var d = a * b;

console.log(c)
console.log(d)

// Példa: Ez a függvény megvizsgál 2 szót, hogy ugyanolyan hosszúak-e.

function szohossz(szo1, szo2)
{
    if (szo1.length == szo2.length)  // szo1 és szo2 a 2 kezelt értéket tárolja majd
    { // Ha a két szó hossza egyezik (változónév.length = karakterek számaa)
        return true; // akkor térjen vissza a true (igaz) értékkkel
    }
    else // else = "minden más esetben..." tehát ha nem teljesül az if feltétel
    {
        return false; // akkor térjen vissza false értékkel
    }
}
console.log(szohossz("alma", "körte"))

// a true/false az egy boolean érték

// Feladat: 2 szám osztható-e maradék nélkül?

function maradekososztas(szam1, szam2)
{
    var megoldas = szam1 % szam2
    return megoldas 
}

console.log(maradekososztas(8,4))