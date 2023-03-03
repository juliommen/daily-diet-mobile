export type Meal = {
  name: string
  description: string
  date: string
  hour: string
  type: 'in' | 'out'
}

export type MealStatistics = {
  totalMeals: string
  maxGoodMealsInARow: string
  totalGoodMeals: string
  totalBadMeals: string
}
