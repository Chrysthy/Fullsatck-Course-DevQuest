import { Component } from "react";

async function createDeck() {

    const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    
    const deck = response.json()

    return deck.deck.id
}

class DeckOfCards extends Component {

    constructor() {

        super();
        this.state = {}

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