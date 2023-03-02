import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  align-items: center;
`

export const Logo = styled.Image`
  margin-top: 25px;
  margin-bottom: 15px;
`

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size:18px;
  text-align: left;
  width: 100%;
  margin-top: 20px;
`
