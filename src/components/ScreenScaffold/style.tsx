import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  color: 'GREEN' | 'BLACK' | 'RED'
}

export const Header = styled(SafeAreaView)<Props>`
  flex: 1;
  min-height: 132px;
  max-height: 132px;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color === 'BLACK'
      ? theme.COLORS.gray5
      : color === 'GREEN'
      ? theme.COLORS.greenLight
      : theme.COLORS.redLight};
`

export const HeaderTitle = styled.Text`
  margin-top: 20px;
  ${({ theme }) => css`
    color: ${theme.COLORS.gray1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size:18px;
`

export const Card = styled.View`
  margin-top: -26px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  padding: 0 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray7};
`
