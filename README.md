# README

### Refactoring TODO:
  - Rails
    - camelCase API response data
    - store `Reward#percentage` properly (TBD)
  - React/Redux:
    - Normalize `cardsStore` so each Card doesn't have nested Rewards
      - `normalizr`?
    - Figure out Selectors
    - Refactor repeated "fetch" action/reducer structure
    - Avoid NaN warning when spendInput input is empty
