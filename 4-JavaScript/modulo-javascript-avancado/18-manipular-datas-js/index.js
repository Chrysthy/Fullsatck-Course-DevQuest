//Data atual
const dataAtual = new Date()
console.log(dataAtual);

//Adicionando dias, meses e anos (pode subtrair também)
const umDiaDepois = new Date(dataAtual)
umDiaDepois.setDate(dataAtual.getDate() + 1)
console.log(umDiaDepois);