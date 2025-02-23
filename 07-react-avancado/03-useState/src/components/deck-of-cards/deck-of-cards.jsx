import { useState } from "react";

async function createDeck() {
    const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const deck = await response.json();
    return deck.deck_id;
}

async function getCards(deckId) {
    const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
    );
    return await response.json();
}

//using useState
const DeckOfCards = () => {

    const [deck, setDeck] = useState({

        cards: []


    })

    return (

        <sectio>

            <ul>
                {

                    deck.cards.map((card, index) => {

                        (<li key={index}>

                            <img src={card.image} alt={card.value} />
                        </li>
                        )
                    })

                }

            </ul>


        </sectio>

    )

}

export default DeckOfCards;

//useState quando exceuta retorna duas coisas: a variável que a gente vai usar e o segundo vai ser uma função responsável por atualizar o array, o objeto.

//setDeck é a função que vai atualizar o deck
//Por convenção, usamos o set antes do nome da variável que vamos atualizar

//Ele retorna num formato de array, onde o primeiro elemento é a variável e o segundo é a função que vai atualizar o deck

//os colchetes são para desestruturar o array