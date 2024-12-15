import React from 'react';
import './card.css';

const Card = (props, color, showCardColor) => {
    return (

        <div
            className='card'
            style={{ backgroundColor: color }}
            onClick={() => showCardColor()}>

            {props.children}

        </div>
    )
}

/*
ou 
shorthand
const Card = (children) => {
    return (

        <div className='card'> 

        {children}    

        </div>
    )
}


*/

// const Card = (props) => {
//     return (

//         <div className='card'>

//             <h3>{props.title}</h3>

//             <p>Esse é um texto do card</p>

//         </div>
//     )
// }

//shorthand

// const Card = ({title}) => {
//     return (

//         <div className='card'>

//             <h3>{title}</h3>

//             <p>Esse é um texto do card</p>

//         </div>
//     )
// }

// class Card extends React.Component {

//     render() {

//         return (

//         <div className='card'>

//             <h3>{this.props.title}</h3>

//             <p>Esse é um texto do card</p>

//         </div>
//         )
//     }
// }

Card.defaultProps = {
    color: 'orange'
}


export default Card;

//Para criar uma classe, usamos a palavra class seguido da palavra extends, que significa extender alguns caracteristicas de uma outra classe para dentro do nosso componente. Nesse caso estamos estendendo as caracteristicas do React.Component, fazendo uma herança.

//Quem está do lado direito está herdando as caracteristicas e do lado esquerdo é quem está passando as heranças

//Precisa importar o React para usar o React.Component

//Dentro da classe, criamos uma função render, que é obrigatório em um componente de classe. E dentro da função render, usando o return para retornamos o que queremos que seja renderizado na tela

//Precisa exportar o Card para usar no App.js e importar o Card no App.js

//Novamente, precisa importar o css para usar no Card.js e colocar className no div para usar o css

//{this.props.title} é necessário colocar entre chaves para o React entender que é um código javascript, Ssenão ele vai entender que é uma string e vai renderizar para todos os cards o mesmo título

//shorthand é uma forma de simplificar o código, passando direto o props para dentro do componente