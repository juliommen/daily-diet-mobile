import { Container, Logo, Date } from './style'
import logo from '@assets/logo.png'
import { InfoCard } from '@components/InfoCard'
import { MealCard } from '@components/MealCard'
import { ActionButton } from '@components/ActionButton'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const { navigate } = useNavigation()
  function handleNewMeal() {
    navigate('newMeal')
  }
  function handleDetailMeal() {
    navigate('mealDetail', {
      name: 'Lasanha a Bolognesa',
      description: 'Lasanha com molho de tomate, queijo, presunto.',
      date: '03/03/2023',
      hour: '12:60',
      type: 'out',
    })
  }

  return (
    <Container>
      <Logo source={logo} alt="" />
      <InfoCard
        hasIcon={true}
        color="RED"
        number="50,05%"
        text="das refeições dentro da dieta"
      />

      <ScrollView style={{ width: '100%' }}>
        <Date>12/08/2022</Date>
        <MealCard
          color="GREEN"
          title="Ahudhf auhfudh auhfudh a huh"
          hour="20:00"
          onPress={handleDetailMeal}
        />
      </ScrollView>

      <ActionButton
        title="Nova refeição"
        nameIcon="plus"
        onPress={handleNewMeal}
      />
    </Container>
  )
}
