class Deck {
    private cards: Card[];

    public constructor() {
        this.cards = [];

        for(let i = 0; i < 4; i++) {
            for(let j = 1; j<= 13; j++) {
                this.cards.push(new Card(j, i));
            }
        }
    }

    public shuffle(): void {
        this.cards.sort(() => Math.floor(Math.random() * 3 - 1));
    }
    public draw(): Card {
        return <Card> this.cards.shift();
    }
}