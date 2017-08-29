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

export default function applyCardFilters(filters, cards) {
  let filteredCards = applyPropertyFilters(filters.cardProperties, cards);

  if (filters.partialCardName.length) {
    const partialCardNameRegExp = new RegExp(filters.partialCardName, 'i');
    filteredCards = filteredCards.filter(card => partialCardNameRegExp.test(card.name));
  }

  return filteredCards;
}