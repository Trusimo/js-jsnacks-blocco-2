const listanomi = ["Simone", "Serena", "Floki", "Giuseppe", "Mariella"];
const listacognomi = ["Rossi", "Bianchi", "Verdi", "Trunfio", "Falcone"];

const falsalista = [];

var nomefalso = listanomi[Math.floor(Math.random()*listanomi.length)];
var cognomefalso = listacognomi[Math.floor(Math.random()*listacognomi.length)];

falsalista.push(nomefalso + cognomefalso)

console.log(falsalista)