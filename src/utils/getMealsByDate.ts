import { Meal } from '@utils/entities'

type MealByDate = {
  date: string
  meals: Meal[]
}

export function getMealsByDate(meals: Meal[]) {
  meals.sort((a, b) => {
    const dateA = a.date + a.hour
    const dateB = b.date + b.hour
    return dateB.localeCompare(dateA)
  })

  const datesUnique = meals
    .map((meal) => meal.date)
    .filter((v, i, a) => a.indexOf(v) === i)

  const mealsByDate: MealByDate[] = datesUnique.map((date) => ({
    date,
    meals: meals.filter((meal) => meal.date === date),
  }))

  return mealsByDate
}
