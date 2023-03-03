import styled, { css } from 'styled-components/native'

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size:20px;
  margin-top: 26px;
  margin-bottom: 4px;
`
export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  font-size:16px;
  margin-bottom: 4px;
`

export const DateTimeLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size:20px;
  margin-top: 14px;
  margin-bottom: 4px;
`
export const DateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  font-size:16px;
  margin-bottom: 4px;
`

export const Tag = styled.View`
  padding: 8px 16px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.gray6};
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  align-self: flex-start;
`

type IndicatorProps = {
  type: 'in' | 'out'
}

export const Indicator = styled.View<IndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 1000px;
  background-color: ${({ theme, type }) =>
    type === 'in' ? theme.COLORS.greenDark : theme.COLORS.redDark};
`

export const IndicatorText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  font-size:14px;
  margin-top: -3px;
`
