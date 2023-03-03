import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export type IconProps = {
  color?: 'GREEN' | 'BLACK' | 'RED'
}

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 24px;
`

export const Icon = styled(Feather).attrs<IconProps>(({ theme, color }) => ({
  size: 32,
  color:
    color === 'GREEN'
      ? theme.COLORS.greenDark
      : color === 'RED'
      ? theme.COLORS.redDark
      : theme.COLORS.gray2,
}))``
