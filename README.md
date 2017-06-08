# README

### Refactoring TODO:
  - Rails
    - camelCase API response data (or maybe should be handled on frontend?)
    - Store `Reward#percentage` properly (TBD)
    - Allow creation of multiple Rewards on Card (w/o having to submit multiple times)
    - Create endpoint to Redux can fetch all records in one call
      - Alternatively, pass in records via `data` attributes?
  - React/Redux:
    - Normalize `cardsStore` so each Card doesn't have nested Rewards
      - `normalizr`?
    - Figure out Selectors
    - Refactor repeated "fetch" action/reducer structure
    - Avoid NaN warning when spendInput input is empty
    - Once data load order race condition is sorted, move status/error messages from App to to individual components
    - Differentiate `App` components (`startup/App.jsx`, `components/App.jsx`)
