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

//Formantando Data
const opcoes = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes)
console.log(dataFormatada);

//Formatando data com API Intel.DateTimeFormat
const opcoes2 = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
const formatador = new Intl.DateTimeFormat('pt-BR', opcoes2)
const dataFormatada2 = formatador.format(dataAtual)
console.log(dataFormatada2);
