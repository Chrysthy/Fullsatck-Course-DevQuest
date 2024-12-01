import './App.css';
import Button from './components/button/button';

function App() {

  
  return <Button/>

}

export default App;

//O return sempre deve retornar um elemento, por isso, se você quiser retornar mais de um elemento, você deve envolvê-los em uma div

//Se tiver só um elemento, não precisa envolver em uma div e nem usar parenteses

//ex.: return <h1>Olá Mundo</h1>

//Se você não quiser envolver em uma div, você pode usar o fragment

//Para não deixar uma div englobado os elementos, podemos usar o fragment. Ele não renderiza nada, mas que serve para envolver outros elementos

// < > </> é a forma de usar o fragment ou
// <React.Fragment> </React.Fragment>