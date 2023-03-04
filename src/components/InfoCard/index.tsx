import { ButtonIcon, Container, Number, Text } from './style'
import { TouchableOpacity } from 'react-native'

type InfoCardProps = {
  color?: 'RED' | 'GREEN'
  text: string
  number: string
  hasIcon?: boolean
  onPress?: () => void
}

export function InfoCard({
  color,
  number,
  text,
  hasIcon = false,
  onPress,
}: InfoCardProps) {
  return (
    <Container color={color}>
      <Number>{number}</Number>
      <Text>{text}</Text>
      {hasIcon && (
        <TouchableOpacity
          onPress={onPress}
          style={{ position: 'absolute', top: 6, right: 6 }}
        >
          <ButtonIcon color={color} name="arrow-up-right"></ButtonIcon>
        </TouchableOpacity>
      )}
    </Container>
  )
}
