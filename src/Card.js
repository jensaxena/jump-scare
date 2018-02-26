import React, { Component } from 'react';
import classnames from 'classnames';

import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.jump) {
      let sound = document.getElementById('scare');
      sound.play();
    }

    if (!this.props.flipped) {
      this.props.checkMatch(this.props.value, this.props.id);
    }
  }

  render() {
    let cardClass = classnames(
      'Card',
      { 'jump': this.props.jump },
      { 'flip': this.props.flipped },
      { 'match': this.props.matched }
    );
    let cardValue = this.props.flipped ? this.props.value : '';

    return (
      <div className={cardClass} onClick={this.handleClick}>
        {cardValue}
      </div>
    );
  }
}
