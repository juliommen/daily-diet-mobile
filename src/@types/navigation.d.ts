/* eslint-disable no-unused-vars */
import { Meal, MealStatistics } from '@utils/entities'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      editMeal: Meal
      mealDetail: Meal
      newMeal: undefined
      statistics: MealStatistics
    }
  }
}
