import { InfoCard } from '@components/InfoCard'
import { ScreenScaffold } from '@components/ScreenScaffold'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GOOD_MEALS_PROPORTION_GOAL, MealStatistics } from '@utils/entities'
import { ScrollView } from 'react-native'

export function Statistics() {
  const { navigate } = useNavigation()
  function handleBackPage() {
    navigate('home')
  }

  const { totalBadMeals, totalGoodMeals } = useRoute().params as MealStatistics

  const totalMeals = totalBadMeals + totalGoodMeals
  const goodMealsProportion = (totalGoodMeals / totalMeals) * 100
  const isProportionGood = goodMealsProportion >= GOOD_MEALS_PROPORTION_GOAL

  return (
    <ScreenScaffold title="Estatísticas gerais" onBack={handleBackPage}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        <InfoCard
          color={isProportionGood ? 'GREEN' : 'RED'}
          number={goodMealsProportion.toFixed(2) + '%'}
          text="das refeições dentro da dieta"
        />

        <InfoCard number={totalMeals.toString()} text="refeições registradas" />
        <InfoCard
          color="GREEN"
          number={totalGoodMeals.toString()}
          text="refeições dentro da dieta"
        />
        <InfoCard
          color="RED"
          number={totalBadMeals.toString()}
          text="refeições fora da dieta"
        />
      </ScrollView>
    </ScreenScaffold>
  )
}
