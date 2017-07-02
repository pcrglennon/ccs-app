import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';

// TODO - refactor!
function buildIdMap(spendCategoriesArray) {
  return spendCategoriesArray.reduce((object, spendCategory) => {
    object[spendCategory.id] = spendCategory;
    return object;
  }, {});
}

function byId(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS: {
      return Object.assign({}, state, buildIdMap(data.spendCategories));
    }

    default:
      return state;
  }
}

export default combineReducers({
  byId: byId
});
