import React from 'react';
import './card.css';

class Card extends React.Component {

    render() {

        return (

            <div className='card'>

                <h3>Título</h3>

                <p>Esse é um texto do card</p>

            </div>
        )
    }
}

export default Card;

//Para criar uma classe, usamos a palavra class seguido da palavra extends, que significa extender alguns caracteristicas de uma outra classe para dentro do nosso componente. Nesse caso estamos estendendo as caracteristicas do React.Component, fazendo uma herança.

//Quem está do lado direito está herdando as caracteristicas e do lado esquerdo é quem está passando as heranças

//Precisa importar o React para usar o React.Component

//Dentro da classe, criamos uma função render, que é obrigatório em um componente de classe. E dentro da função render, usando o return para retornamos o que queremos que seja renderizado na tela

//Precisa exportar o Card para usar no App.js e importar o Card no App.js

//Novamente, precisa importar o css para usar no Card.js e colocar className no div para usar o css