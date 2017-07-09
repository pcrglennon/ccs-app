import banksReducer from './banksReducer';
import cardsReducer from './cardsReducer';
import initializeReducer from './initializeReducer';
import networksReducer from './networksReducer';
import rewardsReducer from './rewardsReducer';
import rewardCurrenciesReducer from './rewardCurrenciesReducer';
import spendCategoriesReducer from './spendCategoriesReducer';
import spendInputsReducer from './spendInputsReducer';

export default {
  banksStore: banksReducer,
  cardsStore: cardsReducer,
  initializeStore: initializeReducer,
  networksStore: networksReducer,
  rewardsStore: rewardsReducer,
  rewardCurrenciesStore: rewardCurrenciesReducer,
  spendCategoriesStore: spendCategoriesReducer,
  spendInputsStore: spendInputsReducer
};
