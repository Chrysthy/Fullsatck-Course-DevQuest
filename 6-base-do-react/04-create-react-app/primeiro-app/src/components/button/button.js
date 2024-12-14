import React from 'react';
import './button.css';

//utilizando com classes
class Button extends React.Component { 
    render() {
        return <button className= "btn">{this.props.label}</button>
    }
}



//utilizando com funções
// const Button = (props) => {

//     return <button className= "btn">{props.label}</button>
// }

Button.defaultProps = {
    label: 'Clique aqui',
    label2: 'Acesse a Receita'

}

export default Button;

//Para usar o css no componente, você deve importar o css no arquivo do componente

//Não precisa exportar o css para usar no componente

//Preciso adicionar className no botão para usar o css

//Precisa exportar o componente para usar no App.js
