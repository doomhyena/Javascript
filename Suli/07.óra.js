console.log("1.Feladat:")

function osszeglista(szam) {
    let lista = [];
    let hatvany = 1; 

    while (hatvany <= szam) {
        if (szam % hatvany === 0) {
            lista.push(hatvany); 
            szam -= hatvany; 
        }
        hatvany *= 2; 
    }

    return lista;
}

console.log(osszeglista(21))
console.log(osszeglista(8)); 
console.log(osszeglista(63));


console.log("2.Feladat:")

function nagyobbátesz(n1, n2) {
    let tomb = n1.toString().split('');
    let tomb2 = n2.toString().split('').sort((a, b) => b - a);
    for (let i in tomb) {
        for(let j in tomb2) {
            if (tomb[i] < tomb2[j]) {
                tomb[i] = tomb2[j];
                tomb2.splice(j,1);
            }
        }
    }
    return parseInt(tomb.join(''), 10)
}

console.log(nagyobbátesz(1234, 567));
console.log(nagyobbátesz(4321, 987));
