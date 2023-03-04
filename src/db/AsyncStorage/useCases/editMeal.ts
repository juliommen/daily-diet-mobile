import asyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'
import { Meal } from '@utils/entities'
import { DB_KEY } from '@db/AsyncStorage/index'
import { getAllMeals } from './getAllMeals'

export async function editMeal(mealEdited: Meal) {
  try {
    const meals = await getAllMeals()
    const mealsFiltered = meals.filter((meal) => meal.id !== mealEdited.id)
    mealsFiltered.push(mealEdited)
    await asyncStorage.setItem(DB_KEY, JSON.stringify(mealsFiltered))
  } catch (error) {
    throw new AppError('Não foi possível editar a refeição.')
  }
}
