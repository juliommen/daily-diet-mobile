import { Container, Icon, Title } from './style'
import { TouchableOpacityProps } from 'react-native'

type ActionButtonProps = TouchableOpacityProps & {
  nameIcon?: 'trash-2' | 'plus' | 'edit-3'
  title: string
  type?: 'PRIMARY' | 'SECONDARY'
}

export function ActionButton({
  nameIcon,
  title,
  type = 'PRIMARY',
  ...rest
}: ActionButtonProps) {
  return (
    <Container type={type} {...rest}>
      {nameIcon && <Icon name={nameIcon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
