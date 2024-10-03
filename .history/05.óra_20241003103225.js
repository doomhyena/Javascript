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