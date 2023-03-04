export type Meal = {
  id: string
  name: string
  description: string
  date: string
  hour: string
  type: 'in' | 'out'
}

export type MealStatistics = {
  totalGoodMeals: number
  totalBadMeals: number
}

export type MealsByDate = {
  date: string
  meals: Meal[]
}

export const GOOD_MEALS_PROPORTION_GOAL = 80
