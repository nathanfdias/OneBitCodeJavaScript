let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é " + newSpaceship)

//A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.