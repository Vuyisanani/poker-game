"use strict";
var Suit;
(function (Suit) {
    Suit[Suit["Spades"] = 0] = "Spades";
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Diamonds"] = 3] = "Diamonds";
})(Suit || (Suit = {}));
;
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Object.defineProperty(Card.prototype, "rankName", {
        get: function () {
            return Card.rankNames[this.rank - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "suitNames", {
        get: function () {
            return Suit[this.suit];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this.rankName + ' of ' + this.suitNames;
        },
        enumerable: true,
        configurable: true
    });
    //A: Ace, J: Jack, K: King, Q: Queen
    Card.rankNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j <= 13; j++) {
                this.cards.push(new Card(j, i));
            }
        }
    }
    Deck.prototype.shuffle = function () {
        this.cards.sort(function () { return Math.floor(Math.random() * 3 - 1); });
    };
    Deck.prototype.draw = function () {
        return this.cards.shift();
    };
    return Deck;
}());
var test = new Deck();
test.shuffle();
console.log(test.draw().name);
//# sourceMappingURL=app.js.map