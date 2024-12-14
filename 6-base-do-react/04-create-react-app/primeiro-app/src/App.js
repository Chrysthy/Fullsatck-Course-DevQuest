import './App.css';
import Button from './components/button/button';
import Card from './components/card/card';

function App() {


  return (

    <>

      <Card>
        <h3>Título 1</h3>

        <p>Texto 1</p>

      </Card>

      <Card>
        <h3>Título 2</h3>

        <p>Texto 2</p>

      </Card>


      <Card>
        <h3>Título 2</h3>

        <p>Texto 2</p>

      </Card>

      {/* <Card title='Título card 1' /> 
      <Card title='Título card 2' />
      <Card title='Título card 3' /> */}

      <Button label='Baixar CV' />
      <Button/>
      <Button />

    </>

  )

}

export default App;

//O return sempre deve retornar um elemento, por isso, se você quiser retornar mais de um elemento, você deve envolvê-los em uma div

//Se tiver só um elemento, não precisa envolver em uma div e nem usar parenteses

//ex.: return <h1>Olá Mundo</h1>

//Se você não quiser envolver em uma div, você pode usar o fragment

//Para não deixar uma div englobado os elementos, podemos usar o fragment. Ele não renderiza nada, mas que serve para envolver outros elementos

// < > </> é a forma de usar o fragment ou
// <React.Fragment> </React.Fragment>

// As letras maiúsculas são importantes para o React entender que é um componente React e não uma tag html

//Precisa importar o button para usar no App.js

//Precisa importar o card para usar no App.js

//<Card title="Título card 1"/> passando uma prop para dentro do componente card