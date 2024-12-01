import logo from './logo.svg';
import './App.css';

function App() {

  //O return sempre deve retornar um elemento, por isso, se você quiser retornar mais de um elemento, você deve envolvê-los em uma div

  //Se tiver só um elemento, não precisa envolver em uma div e nem usar parenteses

  //ex.: return <h1>Olá Mundo</h1>

  //Se você não quiser envolver em uma div, você pode usar o fragment

  //Para não deixar uma div englobado os elementos, podemos usar o fragment. Ele não renderiza nada, mas que serve para envolver outros elementos

  // < > </> é a forma de usar o fragment

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
