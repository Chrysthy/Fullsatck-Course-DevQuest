//Data atual
const dataAtual = new Date()
console.log(dataAtual);

//Adicionando dias, meses e anos (pode subtrair também)
const umDiaDepois = new Date(dataAtual)
umDiaDepois.setDate(dataAtual.getDate() + 1)
console.log(umDiaDepois);

const umMesAtras = new Date(dataAtual)
umMesAtras.setMonth(dataAtual.getMonth() - 1)
console.log(umMesAtras);

const umAnoDepois = new Date(dataAtual)
umAnoDepois.setFullYear(dataAtual.getFullYear() + 1)
console.log(umAnoDepois);
