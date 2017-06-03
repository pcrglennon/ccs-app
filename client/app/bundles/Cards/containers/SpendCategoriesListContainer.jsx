import { connect } from 'react-redux';

import SpendCategoriesList from '../components/SpendCategoriesList';

function mapStateToProps(state) {
  return {
    spendCategories: state.spendCategoriesStore.spendCategories,
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
