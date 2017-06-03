import React from 'react';

import CardsListContainer from '../containers/CardsListContainer';
import SpendCategoriesListContainer from '../containers/SpendCategoriesListContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CardsListContainer />
        <SpendCategoriesListContainer />
      </div>
    );
  }
}
