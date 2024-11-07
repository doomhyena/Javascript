function egyedirendez(lista) {
    let rendezett = lista.sort(function(a, b) {
        return a - b;
    });
    return Array.from(new Set(rendezett));
}

/*

    Feladat: adott egy string, ami x és o betűkből áll. Ugyannyi van-e a két karakterből?
    Pl.:  "xo" -> true, "xxo" -> false
        - kis/nagybetű nem számít
        - feltételezzük, hogy nincsnenek az x-en és az o-n kívűl más karakterek a stringben



*/
/*

    function Ugyanannyi(string) {
    let countx = 0;
    let counto = 0;

    for (let char of string) {
        if (char === 'x') {
            countx++;
        } else if  (char === 'o') {
            counto++;
        }
    }
    return countx === counto;
}

*/

function  Ugyanannyi(string) {
    let countx = 0
    let counto = 0
    for (var i = 0; i < string.length; i++) {
        if(string[i].toLowerCase() === 'x') {
            countx += 1;
        } else if (string[i].toLowerCase() === 'o') {
            counto += 1
        }
    }
    return countx === counto;
}

/*

    A megadott betű melyik magánhangzóval esik a legközelebb az abc-ben?
    Pl.: lkmh("b") -> "a"

*/

function lkmh(char) {
    let mhlista = ['a', 'e', 'i', 'o', 'u']

    if (mhlista.includes(char)) return char;

    let ujlista  = mhlista.map(mh => Math.abs(mh.charCodeAt(0) - char.charCodeAt(0)))
    return  mhlista[ujlista.indexOf(Math.min(...ujlista))];

}
/*

    Feladat: A sakktábla lépkedünk egy futóval. A kérdés, hogy az adott számú lépésből fel tud-e jutni A-ból B-be?
    Pl.: futó("a1", "b4", 2) -> true
         futó("a1", "b5", 5) -> false

*/

function futó(kezd, vég,  lép) {
    var xk = Math.abs(cel[0].charCodeAt(0)-kezd[0].charCodeAt(0))
    var yk  = Math.abs(parseInt(cel[1]-kezd[1]))
    // Ha eltérő színene van 2 hely akkor false
    if (yk === 2 && xk === 1) return false
    // Ha a lépésszám 2 vagy több akkor true
    if (lép >= 2) return true
    // Ha a kezdő és a cél hely megegyezik, akkor true
    if (kezd === vég) return true
    // Ha egy lépésünk van rá
    if (lép === 1) {
        if (xk != yk) return false 
        else return true
    } 
    // Minden más esetben
    else return false
}
