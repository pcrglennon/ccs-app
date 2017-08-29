import { connect } from 'react-redux';

import {
  createPortfolio,
  destroyPortfolio,
  setSelectedPortfolioId,
  toggleManagingPortfolioCards
} from '../actions/portfoliosActions';
import PortfolioManager from '../components/PortfolioManager';

function mapStateToProps(state, props) {
  return {
    selectedPortfolioId: state.portfoliosStore.selectedId,
    managingCards: state.portfoliosStore.managingCards,
    portfolios: Object.values(state.portfoliosStore.byId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedPortfolioId: (id) => {
      dispatch(setSelectedPortfolioId(id));
    },
    toggleManagingPortfolioCards: (toggleValue) => {
      dispatch(toggleManagingPortfolioCards(toggleValue));
    },
    createPortfolio: (name) => {
      dispatch(createPortfolio(name));
    },
    destroyPortfolio: (id) => {
      dispatch(destroyPortfolio(id));
    }
  };
}

const PortfolioManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioManager);

export default PortfolioManagerContainer;
