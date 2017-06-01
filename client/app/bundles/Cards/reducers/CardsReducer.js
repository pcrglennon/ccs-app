const initialState = [];

export default function cardsReducer(state = initialState, action) {
  const { type, name } = action;

  switch (type) {
    default:
      return state;
  }
}
