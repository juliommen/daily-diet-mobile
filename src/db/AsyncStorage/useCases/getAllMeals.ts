import asyncStorage from '@react-native-async-storage/async-storage'
import { Meal } from '@utils/entities'
import { DB_KEY } from '@db/AsyncStorage/index'

export async function getAllMeals() {
  const mealsRaw = await asyncStorage.getItem(DB_KEY)
  const meals: Meal[] = mealsRaw ? JSON.parse(mealsRaw) : []
  return meals
}
