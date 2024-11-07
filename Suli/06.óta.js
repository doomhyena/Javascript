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
function Ugyanannyi(string) {
    let countx = 0;
    let counto = 0;
    string.toLowerCase();

    for (let char of string) {
        if (char === 'x') {
            countx++;
        } else if  (char === 'o') {
            counto++;
        }
    }
    return countx === counto;
}
console.log(Ugyanannyi("xxoo"));
console.log(Ugyanannyi("XXoo"));
console.log(Ugyanannyi("xxooo"));
console.log(Ugyanannyi("xo"));
console.log(Ugyanannyi("xoxoxo")); 
