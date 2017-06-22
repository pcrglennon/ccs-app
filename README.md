# README

### Refactoring TODO:
  - Rails
    - **Swap out inefficient controllers/JBuilder views for GraphQL!!!**
    - ~~camelCase API response data (or maybe should be handled on frontend?)~~
      - will be resolved by GraphQL
    - Store `Reward#percentage` properly (TBD)
      - Or maybe store # points/miles back per 1$ spend?
    - ~~Create endpoint to Redux can fetch all records in one call~~
      - will be resolved by GraphQL
  - React/Redux:
    - Normalize `cardsStore` so each Card doesn't have nested Rewards
      - `normalizr`?
    - Figure out Selectors
    - Refactor repeated "fetch" action/reducer structure
    - Avoid NaN warning when spendInput input is empty
    - Once data load order race condition is sorted, move status/error messages from App to to individual components
      - will be resolved by GraphQL
    - Differentiate `App` components (`startup/App.jsx`, `components/App.jsx`)
