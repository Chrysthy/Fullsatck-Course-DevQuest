//Componentes de Função
function Welcome(props) {
    return <h1>Olá, {props.name}</h1>;
}
  
//Componentes de Classe
class Welcome extends React.Component {
    render() {
      return <h1>Olá, {this.props.name}</h1>;
    }
  }