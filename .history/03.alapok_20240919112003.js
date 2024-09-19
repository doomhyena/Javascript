// 3 óra dolgozat előtt 2024/09/19

/*
function fuggvenynev(parameter) {
    érdemi kód, számítások;
    return eredményválrotó;
}

console.log(fuggvenynev(konkrét értékek))

- nem kőtelező tabulátorozni, de ajánlott
- tab. helyett a {} jelek alapján szegmentálja a kódot
- pontosvesszők a sorok végére

for ciklus:
for (var i = kezdőérték; Meddigmenjen; irány) {
    kód
}

listához fűzés: listanév.push(Újelem)

egysoros, rövidített if-else állítás
    (logikai állítás) ? Művelethaigaz : Művelethahamis;
*/ 

// 01,Feladat: A függvény vizsgáljon meg számokat és mondja meg, hogy párps vagy páratlan számú osztója van-e?

console.log("1.Feladat:")

function osztokszama(num) {
    const osztok = [];
    for (var i = 1; i <= num; i++) {
        if (num % 1 == 0) {
            osztok.push(i)
        }
    }
    return osztok.length % 2 == 1 ? 'páratlan' : 'páros';
}

console.log(osztokszama(8));

console.log("2.Feladat:")

/*

Index Műveltek:
    - index: listaelem sorszáma
    - jelölések: listanév[sorszám]
    - az indexek mindig 0-val kezdődnek
    -a []-en belül lehet műveleteket végezni az eredményt nézi madj

*/

// Feladat: A számlístában hányszor fordul elő elő, hogy a következő elem az nagyobb az előzőnél? Pl. [10, 11, 12, 9 ,10] --> 3

function hanynagyobb(szamok) {
    let eredmeny = 0;  
    for (var i = 1; i < szamok.length; i++) {
        if (szamok[i] > szamok[i-1]) {
            eredmeny += 1;
        }
    }
    return eredmeny;
}

console.log(hanynagyobb([10, 11, 12, 9 ,10]));

console.log("3.Feladat:")

/*

Szöveglistánál "" jelekkel mutatjuk, hogy string típusú változók:

const szoveglista = ["szoveg1", "szoveg2", "szoveg3"]

Hozzáfűtés a lista végére?
listanév,push(újElem);

Az igaz/hamis értékek kisbetűsek: true, false.

=== -> Ez nem csak az értéket, hanem a típust is nézi.

Igaz/Hamis tartlom megfordítása: !érték

Pl.:

const érték = true;

érték = !érték;

*/

function valtoztato(szoveglista) {
    let megoldas = [];
    let allapot = true;
    for (var i = 1; i < megoldas.length; i++) {
        if (szamok[i] === "vált") {
            allapot = !allapot;
        }
        megoldas.push(allapot);
    }
    return megoldas;
}

console.log(valtoztato(["Ágoston", "Kincső", "Igor", "Ádám", "Balázs"]))
console.log(megoldas)