/*

Függvény, am 1-től x-ig összead minden számot

*/

function sum(num){
    let amount = 0;
    for (let i = 1; i <= num; i++){
        amount += i;
    }
    return amount;

    console.log(sum(4))
}