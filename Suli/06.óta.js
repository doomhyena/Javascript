function egyedirendez(lista) {
    let rendezett = lista.sort(function(a, b) {
        return a - b;
    });
    return Array.from(new Set(rendezett));
}

// Feladat: Adott egy string, ami x és o betűkből áll. Ugyanannyi van-e a két karakterből?

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
