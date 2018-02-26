import React, { Component } from 'react';
import Card from './Card';
import CardDeck from './CardDeck';

import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      cards: CardDeck(),
      lastCard: null,
      locked: false,
      matches: 0
    };
  }

  checkMatch(value, id) {
    if (this.state.locked) {
      return;
    }

    let cards = this.state.cards;
    cards[id].flipped = true;

    this.setState({ locked: true });

    if (cards[id].jump) {
      if (this.state.lastCard) {
        cards[this.state.lastCard.id].flipped = false;
      }
      this.setState({
        lastCard: null,
        locked: false
      });
    } else if (this.state.lastCard) {
      if (value === this.state.lastCard.value) {
        let matches = this.state.matches;
        cards[id].matched = true;
        cards[this.state.lastCard.id].matched = true;

        this.setState({
          lastCard: null,
          locked: false,
          matches: matches + 1
        });
      } else {
        setTimeout(() => {
          cards[id].flipped = false;
          cards[this.state.lastCard.id].flipped = false;

          this.setState({
            lastCard: null,
            locked: false
          });
        }, 1000);
      }
    } else {
      this.setState({
        lastCard: {
          id,
          value
        },
        locked: false
      });
    }
  }

  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card
          checkMatch={this.checkMatch}
          id={index}
          jump={card.jump}
          flipped={card.flipped}
          key={index}
          matched={card.matched}
          value={card.value}
        />
      );
    });
  }

  reset() {
    this.setState({
      cards: CardDeck(),
      lastCard: null,
      locked: false,
      matches: 0
    });
  }

  render() {
    let buttonText = 'Reset';
    if (this.state.matches === (this.state.cards.length - 1) / 2) {
      buttonText = 'Play Again';
    }

    return (
      <div className="Game">
        {this.renderCards(this.state.cards)}
        <button onClick={this.reset}>{buttonText}</button>
      </div>
    );
  }
}
