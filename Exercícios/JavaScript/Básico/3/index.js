let hotelNight = confirm("Seja Bem vindo (a), Aventureiro (a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?")

if (hotelNight) {
    alert("Ótimo! Nós temos as melhores camas de toda a região!")

} else if (hotelNight === false) {
    alert("Que pena! Você parecia ser uma pessoa mais legal.")
}

//se quiser, pode usar o else, pois não precisa ser tão específico por ser um sim ou não - true ou false

//operador ternário

// hotelNight? confirm ("Ótimo! Nós temos as melhores camas de toda a região!") : confirm ("Que pena! Você parecia ser uma pessoa mais legal.")