import { connect } from 'react-redux';

import SpendCategoriesList from '../components/SpendCategoriesList';

function mapStateToProps(state) {
  return {
    spendCategories: Object.values(state.spendCategoriesStore.byId)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const SpendCategoriesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendCategoriesList);

export default SpendCategoriesListContainer;
