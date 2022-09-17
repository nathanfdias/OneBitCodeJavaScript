let spaceShip = prompt("Digite o nome da nave:");
let spaceShipInvrt = "";

for (let i = spaceShip.length - 1; i >= 0; i--) {
    if( spaceShip[i] == "e") {
        break;
    } else {
        spaceShipInvrt += spaceShip[i] 
    }
}

alert(`Nome da nave: ${spaceShip} 
Nome da nave oculta: ${spaceShipInvrt}`)