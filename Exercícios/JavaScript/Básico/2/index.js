let boletoPago = false

//não precisa colocar === true, pois se ele for verdadeiro, irá cair nesse.

if (boletoPago) {
    alert("O boleto está pago!");
     
} else if (boletoPago === false) {
    alert("O boleto não está pago!");
}

//Pode até usar o else, porém o else if fica melhor e para ser mais específico, pode usar o === false