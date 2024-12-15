//Criando um componente cards que vai ter todos os cards dentro dele.
import Card from "../card/card";
const cardsTitle = ['Título 1', 'Título 2', 'Título 3'];

const Cards = () => {
    return (

        <div>

            <h2>Meus Cards</h2>

            {
                cardsTitle.map((cardsTitle, index) => (

                    <Card key={index}>

                        <h3>{cardsTitle}</h3>

                        <p>Texto 1</p>

                    </Card>

                ))
            }

            {/* <div>

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

            </div> */}

        </div>

    )
}

export default Cards;