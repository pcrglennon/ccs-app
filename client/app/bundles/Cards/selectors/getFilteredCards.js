import { createSelector } from 'reselect';

// TODO - move Portfolio filtering into here!

function applyPropertyFilters(propertyFilters, cards) {
  let filteredCards = cards;

  Object.keys(propertyFilters).forEach((filterKey) => {
    const filterValue = propertyFilters[filterKey];

    if (filterValue === '') { return; }

    filteredCards = filteredCards.filter(card => card[filterKey] === filterValue);
  });

  return filteredCards;
}

const getPartialName = state => state.filtersStore.partialCardName;
const getPropertyFilters = state => state.filtersStore.cardProperties;
const getCards = state => Object.values(state.cardsStore.byId);

const getFilteredCards = createSelector(
  [getPartialName, getPropertyFilters, getCards],
  (partialName, propertyFilters, cards) => {
    let filteredCards = applyPropertyFilters(propertyFilters, cards);

    if (partialName.length) {
      const partialCardNameRegExp = new RegExp(partialName, 'i');
      filteredCards = filteredCards.filter(card => partialCardNameRegExp.test(card.name));
    }

    return filteredCards;
  }
);

export default getFilteredCards;
