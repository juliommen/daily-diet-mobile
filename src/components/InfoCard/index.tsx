import { ButtonIcon, Container, Number, Text } from './style'
import { TouchableOpacity } from 'react-native'

type InfoCardProps = {
  color?: 'RED' | 'GREEN'
  text?: string
  number?: string
  hasIcon?: boolean
}

export function InfoCard({
  color = 'GREEN',
  number = '30,21%',
  text = 'das refeições dentro da dieta',
  hasIcon = true,
}: InfoCardProps) {
  return (
    <Container color={color}>
      <Number>{number}</Number>
      <Text>{text}</Text>
      {hasIcon && (
        <TouchableOpacity style={{ position: 'absolute', top: 6, right: 6 }}>
          <ButtonIcon color={color} name="arrow-up-right"></ButtonIcon>
        </TouchableOpacity>
      )}
    </Container>
  )
}
