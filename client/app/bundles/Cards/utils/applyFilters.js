export default function applyFilters(objects, filters) {
  let filteredObjects = objects;

  Object.keys(filters).forEach((filterKey) => {
    const filterValue = filters[filterKey];

    if (filterValue === '') { return; }

    filteredObjects = filteredObjects.filter((object) => {
      return object[filterKey] === filterValue;
    });
  });

  return filteredObjects;
}
