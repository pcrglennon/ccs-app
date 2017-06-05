# README

### Refactoring TODO:
  - Rails
    - camelCase API response data (or maybe should be handled on frontend?)
    - Store `Reward#percentage` properly (TBD)
    - Allow creation of multiple Rewards on Card (w/o having to submit multiple times)
  - React/Redux:
    - Normalize `cardsStore` so each Card doesn't have nested Rewards
      - `normalizr`?
    - Figure out Selectors
    - Refactor repeated "fetch" action/reducer structure
    - Avoid NaN warning when spendInput input is empty
