function saveHouse() {
    event.preventDefault()

    let state = document.querySelector("input[name='state']").value
    let city = document.querySelector("input[name='city']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let number = document.querySelector("input[name='number']").value
    let cep = document.querySelector("input[name='cep']").value
    let rented = document.getElementById("rented")
    let forRent = document.getElementById("for-rent")
    let house = document.getElementById("house")
    let apartment = document.getElementById("apartment")

    let newListValue = document.createElement("li");

    if (rented.checked == true && house.checked == true) {
        newListValue.innerText = `${state} ${city} ${neighborhood}, número ${number}, CASA CEP: ${cep}. ALUGADO`
        newListValue.style.backgroundColor = "red"
        newListValue.style.color = "white"
    } else if (forRent.checked == true && house.checked == true) {
        newListValue.innerText = `${state} ${city} ${neighborhood}, número ${number}, CASA CEP: ${cep}. ALUGA-SE `
    } else if (rented.checked == true && apartment.checked == true) {
        newListValue.innerText = `${state} ${city} ${neighborhood}, número ${number}, APARTAMENTO CEP: ${cep}. ALUGADO `
        newListValue.style.backgroundColor = "red"
        newListValue.style.color = "white"
    } else if (forRent.checked == true && apartment.checked == true) {
        newListValue.innerText = `${state} ${city} ${neighborhood}, número ${number}, APARTAMENTO CEP: ${cep}. ALUGA-SE `
    }

    let removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remover";
    removeButton.setAttribute("onclick", "removeHouse(this)");
    newListValue.appendChild(removeButton);
    document.getElementById("im-list").appendChild(newListValue);

    resetForm();
}

function removeHouse(button) {
    let liToRemove = button.parentNode;
    document.getElementById("im-list").removeChild(liToRemove);
}

function resetForm() {
    document.getElementsByClassName("complete-form")
    document.querySelector("input[name='state']").value = '';
    document.querySelector("input[name='city']").value = '';
    document.querySelector("input[name='neighborhood']").value = '';
    document.querySelector("input[name='number']").value = '';
    document.querySelector("input[name='cep']").value = '';
}


