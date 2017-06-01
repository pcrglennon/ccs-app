import React from 'react';
import { connect } from 'react-redux';

import CardsApp from '../components/CardsApp';

const CardsAppContainer = () => (
  <CardsApp />
);

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsAppContainer);
