import { TouchableOpacityProps } from 'react-native'
import { Card, Indicator, Label } from './style'

type SelectionCardProps = TouchableOpacityProps & {
  selectionType: 'in' | 'out'
  isSelected: boolean
}

export function SelectionCard({
  isSelected,
  selectionType,
  ...rest
}: SelectionCardProps) {
  return (
    <Card type={selectionType} active={isSelected} {...rest}>
      <Indicator type={selectionType} />
      <Label>{selectionType === 'in' ? 'Sim' : 'Não'}</Label>
    </Card>
  )
}
