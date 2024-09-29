//Usando export default
//não conseguimos usar as chaves no import
//So podemos ter apenas uma exportação por arquivo
//a nomenclatura da importação é totalmente independente do nome da função
import somar from './operacoes-matematicas.js'

console.log(somar(2, 2));

//Usando export nomeada
//precisa usar as chaves
//podemos ter várias importações nomeadas por arquivo
//o nome do módulo importado tem que ser o mesmo do módulo exportado
import { somar } from './operacoes-matematicas.js'

console.log(somar(2, 2));