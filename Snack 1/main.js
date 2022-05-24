const numero = prompt("Inserisci il numero")

// controllo se il numero è pari
if(numero % 2 == 0) {
    console.log(parseInt(numero));
}
// se è dispari
else {
    console.log((parseInt(numero) + 1));
}