import cardsReducer from './cardsReducer';
import rewardsReducer from './rewardsReducer';
import rewardCurrenciesReducer from './rewardCurrenciesReducer';
import spendCategoriesReducer from './spendCategoriesReducer';
import spendInputsReducer from './spendInputsReducer';

export default {
  cardsStore: cardsReducer,
  rewardsStore: rewardsReducer,
  rewardCurrenciesStore: rewardCurrenciesReducer,
  spendCategoriesStore: spendCategoriesReducer,
  spendInputsStore: spendInputsReducer
};
