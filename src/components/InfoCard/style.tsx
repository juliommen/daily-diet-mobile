import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

type ContainerProps = {
  color: 'RED' | 'GREEN'
}

export const Container = styled.View<ContainerProps>`
  border-radius: 8px;
  padding: 20px 16px;
  background-color: ${({ theme, color }) =>
    color === 'RED' ? theme.COLORS.redLight : theme.COLORS.greenLight};
  align-items: center;
  width: 100%;
  margin: 10px 0;
`
export const Number = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size:32px;
  margin-bottom: 4px;
`
export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  font-size:14px;
`

export const ButtonIcon = styled(Feather).attrs<ContainerProps>(
  ({ theme, color }) => ({
    size: 32,
    color: color === 'GREEN' ? theme.COLORS.greenDark : theme.COLORS.redDark,
  }),
)``
