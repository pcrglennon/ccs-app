import React from 'react';

export default class CardsList extends React.Component {
  render() {
    return (
      <div>
        <h3>CardsList</h3>
        <p>
          Total # of cards: <em>{this.props.cards.length}</em>
        </p>
      </div>
    );
  }
}
