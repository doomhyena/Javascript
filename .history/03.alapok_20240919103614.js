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

console.log(osztokszama(8))