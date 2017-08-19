import { connect } from 'react-redux';

import { setSelectedPortfolioId, toggleManagingPortfolioCards, createPortfolio } from '../actions/portfoliosActions';
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
    setSelectedPortfolioId: (portfolioId) => {
      dispatch(setSelectedPortfolioId(portfolioId));
    },
    toggleManagingPortfolioCards: (toggleValue) => {
      dispatch(toggleManagingPortfolioCards(toggleValue));
    },
    createPortfolio: (portfolioName) => {
      dispatch(createPortfolio(portfolioName));
    }
  };
}

const PortfolioManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioManager);

export default PortfolioManagerContainer;
