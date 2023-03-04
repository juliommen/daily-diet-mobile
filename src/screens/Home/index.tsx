/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Logo, Date } from './style'
import logo from '@assets/logo.png'
import { InfoCard } from '@components/InfoCard'
import { MealCard } from '@components/MealCard'
import { ActionButton } from '@components/ActionButton'
import { FlatList, Text } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { GOOD_MEALS_PROPORTION_GOAL, Meal, MealsByDate } from '@utils/entities'
import { getAllMeals } from '@db/AsyncStorage/useCases/getAllMeals'
import { getMealsByDate } from '@utils/getMealsByDate'
import { formatDateIsoToPt } from '@utils/dates'
import { Loading } from '@components/Loading'

export function Home() {
  const { navigate } = useNavigation()
  const [mealsByDate, setMealsByDate] = useState<MealsByDate[]>([])
  const [proportionGoodMeals, setProportionGoodMeals] = useState(0)
  const [badMeals, setBadMeals] = useState(0)
  const [goodMeals, setGoodMeals] = useState(0)
  const [loading, setLoading] = useState(true)

  function handleMealStatistics() {
    navigate('statistics', {
      totalBadMeals: badMeals,
      totalGoodMeals: goodMeals,
    })
  }

  function handleNewMeal() {
    navigate('newMeal')
  }

  function handleDetailMeal(meal: Meal) {
    navigate('mealDetail', meal)
  }

  async function getMeals() {
    setLoading(true)
    const meals = await getAllMeals()
    const mealsByDate = getMealsByDate(meals)
    const totalMeals = meals.length
    const totalGoodMeals = meals.reduce(
      (total, v) => (v.type === 'in' ? (total = total + 1) : total),
      0,
    )
    const proportion = (totalGoodMeals / totalMeals) * 100
    setProportionGoodMeals(proportion)
    setMealsByDate(mealsByDate)
    setGoodMeals(totalGoodMeals)
    setBadMeals(totalMeals - totalGoodMeals)
    setLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      getMeals()
    }, []),
  )

  if (loading) {
    return <Loading />
  } else {
    return (
      <Container>
        <Logo source={logo} alt="" />
        <InfoCard
          hasIcon={mealsByDate.length !== 0}
          color={
            mealsByDate.length === 0
              ? undefined
              : proportionGoodMeals >= GOOD_MEALS_PROPORTION_GOAL
              ? 'GREEN'
              : 'RED'
          }
          number={
            mealsByDate.length === 0
              ? '0%'
              : proportionGoodMeals.toFixed(2) + '%'
          }
          text="das refeições dentro da dieta"
          onPress={handleMealStatistics}
        />

        <FlatList
          style={{ width: '100%', flex: 1 }}
          contentContainerStyle={
            mealsByDate.length === 0 && {
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }
          }
          data={mealsByDate}
          keyExtractor={(item) => item.date}
          ListEmptyComponent={() => (
            <Text>Comece cadastrando uma refeição que tenha feito</Text>
          )}
          renderItem={({ item }) => {
            return (
              <>
                <Date>{formatDateIsoToPt(item.date)}</Date>
                {item.meals.map((meal) => {
                  return (
                    <MealCard
                      key={meal.id}
                      color={meal.type === 'in' ? 'GREEN' : 'RED'}
                      title={meal.name}
                      hour={meal.hour}
                      onPress={() => handleDetailMeal(meal)}
                    />
                  )
                })}
              </>
            )
          }}
        />

        <ActionButton
          title="Nova refeição"
          nameIcon="plus"
          onPress={handleNewMeal}
        />
      </Container>
    )
  }
}
