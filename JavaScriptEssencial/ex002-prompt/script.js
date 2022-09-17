alert("Bem vindo, Preencha as idades a seguir!");

let nameOldest = prompt("Nome irmão mais velho");
console.log(nameOldest);
let ageOldest = prompt("Idade do irmão mais velho");
console.log(ageOldest);
let nameYoungest = prompt("Nome irmão mais novo");
console.log(nameYoungest);
let ageYoungest = prompt("Idade do irmão mais novo");
console.log(ageYoungest);
let ageDiference = (ageOldest - ageYoungest);
console.log(ageDiference);

alert("Nome irmão mais velho: " + nameOldest);
alert("Idade irmão mais velho: " + ageOldest);
alert("Nome irmão mais novo: " + nameYoungest);
alert("Idade irmão mais novo: " + ageYoungest);
alert("Diferença de Idade entre eles: " + ageDiference);

