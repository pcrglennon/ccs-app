export default function buildIdMap(objectsArray) {
  return objectsArray.reduce((idMap, object) => {
    idMap[object.id] = object;
    return idMap;
  }, {});
}
