import { Meal, MealStatistics } from '@utils/entities'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      editMeal: {
        meal: Meal
      }
      mealDetail: {
        meal: Meal
      }
      newMeal: undefined
      statistics: {
        mealStatistics: MealStatistics
      }
    }
  }
}
