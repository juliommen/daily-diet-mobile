import { ActionButton } from '@components/ActionButton'
import { ScreenScaffold } from '@components/ScreenScaffold'
import { removeMeal } from '@db/AsyncStorage/useCases/removeMeal'
import { useNavigation, useRoute } from '@react-navigation/native'
import { formatDateIsoToPt } from '@utils/dates'
import { Meal } from '@utils/entities'
import { Alert, View } from 'react-native'
import {
  DateTime,
  DateTimeLabel,
  Description,
  Indicator,
  Name,
  IndicatorText,
  Tag,
} from './style'

export function MealDetail() {
  const { navigate } = useNavigation()
  const meal = useRoute().params as Meal

  function handleBackPage() {
    navigate('home')
  }

  function handleEditMeal() {
    navigate('editMeal', meal)
  }

  function handleRemoveMeal() {
    Alert.alert('Exclusão', 'Tem certeza que quer excluir esta refeição?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          await removeMeal(meal)
          navigate('home')
        },
      },
    ])
  }

  return (
    <ScreenScaffold
      title="Refeição"
      onBack={handleBackPage}
      color={meal.type === 'in' ? 'GREEN' : 'RED'}
    >
      <View style={{ flex: 1 }}>
        <Name>{meal.name}</Name>
        <Description>{meal.description}</Description>
        <DateTimeLabel>Data e hora</DateTimeLabel>
        <DateTime>{formatDateIsoToPt(meal.date) + ' às ' + meal.hour}</DateTime>
        <Tag>
          <Indicator type={meal.type}></Indicator>
          <IndicatorText>
            {meal.type === 'in' ? 'dentro da dieta' : 'fora da dieta'}
          </IndicatorText>
        </Tag>
      </View>
      <ActionButton
        title="Editar refeição"
        nameIcon="edit-3"
        onPress={handleEditMeal}
      />
      <ActionButton
        title="Excluir refeição"
        type="SECONDARY"
        nameIcon="trash-2"
        onPress={handleRemoveMeal}
      />
    </ScreenScaffold>
  )
}
