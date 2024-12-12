import './button.css';

const Button = (props) => {

    return <button className= "btn">{props.label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'

}

export default Button;

//Para usar o css no componente, você deve importar o css no arquivo do componente

//Não precisa exportar o css para usar no componente

//Preciso adicionar className no botão para usar o css

//Precisa exportar o componente para usar no App.js
