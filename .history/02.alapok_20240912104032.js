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

console.log(szamol(10,3))