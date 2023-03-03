import { TouchableOpacityProps, View } from 'react-native'
import { Card, Indicator, Label, SelectionLabel } from './style'

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
      <Indicator type={selectionType} active={isSelected} />
      <Label>{selectionType === 'in' ? 'Sim' : 'Não'}</Label>
    </Card>
  )
}
