// TODO - revisit this, it probably makes more sense to "everything else" rewards
// on a Card by attaching a Reward w/o a `nil` SpendCategory.
// Would require refactoring here, on backend, (including on the Card form), and
// a migration for the exisint "Non-Bonus Spend" SpendCategory
export const UNCATEGORIZED_SPEND_NAME = 'Non-Bonus Spend';
