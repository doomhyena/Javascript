function egyezik(lista1, lista2) {
    lista1 = lista1.toString();
    lista2 = lista2.toString();
    if (lista1 === lista2) {
        return true;
    } else {
        return false;
    }
}

function egyezik(lista1, lista2) {
    for (let i = 0; i < lista1.length; i++) {
        if (lista1[i] !== lista[i]) {
            return false;
        }
    }
    return true;
}

// --------------------------------------------------------------------------


