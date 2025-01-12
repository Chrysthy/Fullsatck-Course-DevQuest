import { Component } from "react";

async function createDeck() {

    const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");

    const deck = response.json()

    return deck.deck_id
}

async function getCards(deckId) {

    const response = await fetch(`https://deckofcardsapi.com/api/${deckId}/draw/?count=52`);

    return await response.json()
}

class DeckOfCards extends Component {

    constructor() {

        super();
        this.state = {
            cards: []
        }

    }

    componentDidMount() {

        const deckId = await createDeck();
        const cards = await getCards(deckId);

        this.setState({
            cards: cards
        })
    }

    render() {

        return (

            <section>

                <ul></ul>

            </section>
        )
    }
}

export default DeckOfCards;