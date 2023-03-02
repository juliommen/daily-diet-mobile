import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  padding: 14px 0;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray5};
`
export const Hour = styled.Text.attrs({ borderRightWidth: 1 })`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    border-color: ${theme.COLORS.gray5};
  `}
  font-size:12px;
  padding: 0 12px;
`
export const MealTitle = styled.Text.attrs({ numberOfLines: 1 })`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  font-size:16px;
  padding: 0 12px;
  flex: 1;
`

type IndicatorProps = {
  color: 'RED' | 'GREEN'
}
export const Indicator = styled.View<IndicatorProps>`
  margin: 0 16px;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, color }) =>
    color === 'GREEN' ? theme.COLORS.greenMid : theme.COLORS.redMid};
`
