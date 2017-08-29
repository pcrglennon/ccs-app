import banksReducer from './banksReducer';
import cardsReducer from './cardsReducer';
import cardsPortfoliosReducer from './cardsPortfoliosReducer';
import filtersReducer from './filtersReducer';
import initializeReducer from './initializeReducer';
import networksReducer from './networksReducer';
import portfoliosReducer from './portfoliosReducer';
import rewardsReducer from './rewardsReducer';
import rewardCurrenciesReducer from './rewardCurrenciesReducer';
import spendCategoriesReducer from './spendCategoriesReducer';
import spendInputsReducer from './spendInputsReducer';

export default {
  banksStore: banksReducer,
  cardsStore: cardsReducer,
  cardsPortfoliosStore: cardsPortfoliosReducer,
  filtersStore: filtersReducer,
  initializeStore: initializeReducer,
  networksStore: networksReducer,
  portfoliosStore: portfoliosReducer,
  rewardsStore: rewardsReducer,
  rewardCurrenciesStore: rewardCurrenciesReducer,
  spendCategoriesStore: spendCategoriesReducer,
  spendInputsStore: spendInputsReducer
};
