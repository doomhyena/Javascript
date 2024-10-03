var tomb = [4, 3, 2, 1];
var tombno = tomb.sort((a, b) => a-b); 
var tombcsokken = tomb.sort((a, b) => b-a)

console.log(tombno)
console.log(tombcsokken)

// swtch-case függvény:

/* 

switch(paraméter):
    case...: ha a paraméternek egy bizonyos értéke van
    case...: ha a paraméternek egy másik bizonyos értéke van
    default...: minden más esetre
*/

/*

A metódus rendezze át egy megadott szempont szerint.

rendezmód([4, 3, 2, 1] "Asc") -> [1, 2, 3, 4]
rendezmód([7, 8, 11, 66] "Des") -> [66, 11, 8, 7]
rendezmód([1, 2, 3, 4] "None") -> [1, 2, 3, 4]

*/

function rendezmod(tomb, mod){
    if (mod === "Asc") 
        return tomb.sort((a, b) => a-b); 
    if (mod === "Desc") 
        return tomb.sort((a, b) => b-a)
    return tomb;
}

function rendezmod2(tomb, mod){
    switch(mod) {
        case 'Asc':
            return tomb.sort((a, b) => a-b); 
        case 'Desc':
            return tomb.sort((a, b) => b-a)
        default:
            return tomb;    
    }
}

/*

Kisebűtvá alakítás: szovegvaltozo.toLowerCase();
Nagybetűvé alakítás: szovegvaltozo.toUpperrCase();

*/

function szorendez(tomb) {
    let betutomb = szo.split("");

    let kisbetus = [];
    let nagybetus = [];

    for (let i = 0; i < betutomb.length; i++) {
        if(betutomb[i] == betutomb[i].toUpperCase()) {
            nagybetus.push(betutomb[i]);
        } else {
            kisbetus.push(betutomb[i]);
        }
    }
    return nagybetus.concat(kisbetus).join("");
}

/* 

Feladat: Megadjuk pár doboz méreteit. Mennyi azok öss-térfogata?

Pl.: dobozos([4, 2, 4], [3, 3, 3,], [1, 1, 2], [2, 1, 1]) -> 63
     dobozos([2, 2, 2], [2, 1, 1]) -> 10 
*/