import { useEffect, useState } from "react";

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

const CardsList = (props) => {
    return (

        <ul>
            {

                props.cards.map((card, index) => {

                    return (<li key={index}>

                        <img src={card.image} alt={card.value} />
                    </li>
                    )
                })

            }

        </ul>


    )
}


const DeckOfCards = () => {

    //setDeck
    const [deck, setDeck] = useState({

        cards: []
    })

    useEffect(() => {

        const fetchData = async () => {

            const deckId = await createDeck();
            const data = await getCards(deckId);

            setDeck({
                cards: data.cards
            })

        }

        fetchData();

    }, [])


    return (

        <section>

            {deck.cards.length > 0 ? <CardsList cards={deck.cards} /> : "Nenhuma carta encontrada"}

        </section>

    )

}

export default DeckOfCards;

