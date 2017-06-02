import React from 'react';
import { connect } from 'react-redux';

import CardsApp from '../components/CardsApp';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const CardsAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsApp);

export default CardsAppContainer;
