let spaceShip = {
    pilotName: "",
    countryName: "",
    shipName: "",
    typeShip: "",
    maxSpeed: "", 
} 
    spaceShip.pilotName = prompt("Please pilot, write your name: ")
    spaceShip.countryName = prompt("Where are you from?")
    alert(`Hello Sr.${spaceShip.pilotName} from ${spaceShip.countryName}, please enter your ship data.`)

    spaceShip.shipName = prompt("Please pilot, write the name of your ship:")

    let confirmSpaceShipName = confirm(`Your ship's name is ${spaceShip.shipName}?`)

    if(confirmSpaceShipName == true){alert("Good choice pilot!")}else if(confirmSpaceShipName == false){spaceShip.shipName = prompt("Please pilot, write the name of your ship:")} else{alert("Invalid")}

    let typeShip = prompt("What is the kind of spaceship:\n1-War ship"+
    "\n2-Supply ship"+
    "\n3-Passenger ship")

    switch(typeShip){
        case "1": spaceShip.typeShip = "warship";
        spaceShip.maxSpeed = "2000"
        alert("A warship can reach 2000 km/s")
        break
        case "2": spaceShip.typeShip = "supplyship";
        spaceShip.maxSpeed = "1000"
        alert("A supplyship can reach 1000 km/s")
        break
        case "2": spaceShip.typeShip = "passengership";
        spaceShip.maxSpeed = "1200"
        alert("A passengership can reach 1200 km/s")
        break
        default:alert("Incorrect type")
    }

    let cofirmData = confirm("Please confirm your data: \n Pilot Name: " + spaceShip.pilotName+
    "\n Spaceship: " + spaceShip.shipName +
    "\n Country: " + spaceShip.countryName +
    "\n Type of ship: " + spaceShip.typeShip +
    "\n Maximum speed: " + spaceShip.maxSpeed )


    let velCurrent = 0
    
    function speedUp(){
        if(velCurrent <= spaceShip.maxSpeed){
            velCurrent = velCurrent + 100
        } else if(velCurrent > spaceShip.maxSpeed){
            alert( "Dangerous speed, please slow down.")
        }   
    }

    function slowDown(){
        if(velCurrent <= spaceShip.maxSpeed){
            alert( "Good Speed to navigate.")
        } else if(velCurrent > spaceShip.maxSpeed){
            velCurrent = velCurrent - 100
        }   
    }

    function print(){
        if(velCurrent > spaceShip.maxSpeed){
            alert( "Dangerous speed, please slow down.")
        } else if(velCurrent <= spaceShip.maxSpeed){
            alert( "Speed " + velCurrent + "km/s")
        }
    }

    let velocityController = prompt("What do you want to do? \n1- Speed up the ship to 100 km/s \n2- Speed down the ship to -100 km/s \n3- Print the data \n4- Close program")

    while(velCurrent != "4") {
        } if(velCurrent == "1") {
          speedUp()
        } else if(velCurrent == "2") {
          slowDown()
        } else if(velCurrent == "3") {
          imprimir()
        } else {
          alert("Valor inválido!")
        }
   