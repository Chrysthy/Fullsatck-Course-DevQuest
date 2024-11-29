const root = document.getElementById('root');
const p = React.createElement('p', null, 'Hello, React!');
//Para criar um componente React usando JS
//Dentro do create element, passamos 3 argumentos: o tipo do elemento, as propriedades (Objetos, classes, ID, um atributo) e o conteúdo (um simples texto para o parágrafo)

//Para não dar o erro no console, criamos uma raiz do react usando o método createRoot
const reactRoot = React.createRoot(root);

reactRoot.render(p);

//agora vamos renderizar (injetar, colocar na tela) o componente
//O método render recebe dois argumentos: o p que criamos e o local onde queremos renderizar
//modelo antigo
// ReactDOM.render(p, root);

