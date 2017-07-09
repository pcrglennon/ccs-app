# README

### TODO:
  - Rails
    - Store `Reward#percentage` properly (TBD)
      - Or maybe store # points/miles back per 1$ spend?
    - Revisit efficiency of GraphQL index queries
  - React/Redux:
    - Figure out Selectors
    - Refactor repeated `buildIdMap` function in reducers
    - Avoid NaN warning when spendInput input is empty
  - Webpack/general tooling
    - React CSS Modules plugin, to avoid camelCased CSS classes
    - Use `ExtractTextPlugin` to extract CSS into separate file
    - `autoprefixer`
