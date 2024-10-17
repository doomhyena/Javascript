/*

    01.Feladat:
        A függvény egy számlistát kezeljen. Minden szám legyen megszorozva a saját indexével. A megoldás ezen szorzatok összegennnnnnnnnnnnnnnnnnnnn legyen.
        Pl.: console.log(indexszoroz[1, 2, 3, 4, 5]) -> 40 lesz a megoldás (mert 1*0 + 2*1 +  3*2 + 4*3 + 5*4 = 40)
        
        Tippek: segédváltozó az összegnek, for ciklus, indexkezelés, +=

        -------------------------------------

*/

function indexszoroz(szamlista) {
    let osszeg = 0;
    for (let i = 0; i < szamlista.length; i++) {
        osszeg += szamlista[i] * i; 
    }
    return osszeg; 
}

console.log(indexszoroz([1, 2, 3, 4, 5]));