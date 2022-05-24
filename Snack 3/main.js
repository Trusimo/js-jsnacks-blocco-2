const numerinteri = [12, 24, 36, 48, 60, 72, 84];

let somma = [];
let indicedispari;

for (let i = 0; i < numerinteri.length; i++) {
    if (i % 2 === 1) {
        indicedispari = i
    }
}

somma.push(indicedispari)

console.log(somma)