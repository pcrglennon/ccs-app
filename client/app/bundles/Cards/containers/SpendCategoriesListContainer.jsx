import { connect } from 'react-redux';

import SpendCategoriesList from '../components/SpendCategoriesList';

function mapStateToProps(state) {
  return {
    spendCategories: Object.values(state.spendCategoriesStore.byId),
    isFetching: state.spendCategoriesStore.isFetching,
    fetchErrorMessage: state.spendCategoriesStore.fetchErrorMessage
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
