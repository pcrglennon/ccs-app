function applyPropertyFilters(propertyFilters, cards) {
  let filteredCards = cards;

  Object.keys(propertyFilters).forEach((filterKey) => {
    const filterValue = propertyFilters[filterKey];

    if (filterValue === '') { return; }

    filteredCards = filteredCards.filter((card) => {
      return card[filterKey] === filterValue;
    });
  });

  return filteredCards;
}

export default function applyCardFilters(filters, cards, selectedCardIds) {
  let filteredCards = applyPropertyFilters(filters.cardProperties, cards);

  if (filters.selectedCardsOnly) {
    filteredCards = filteredCards.filter(card => selectedCardIds.indexOf(card.id) > -1);
  }

  return filteredCards;
}
