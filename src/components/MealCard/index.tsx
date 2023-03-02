import { Container, Hour, Indicator, MealTitle } from './style'
import { TouchableOpacityProps } from 'react-native'

type MealCardProps = TouchableOpacityProps & {
  color: 'GREEN' | 'RED'
  title: string
  hour: string
}

export function MealCard({ color, hour, title, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <MealTitle>{title}</MealTitle>
      <Indicator color={color} />
    </Container>
  )
}
