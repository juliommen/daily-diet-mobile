import styled, { css } from 'styled-components/native'

type CardProps = {
  type: 'in' | 'out'
  active?: boolean
}

export const Card = styled.TouchableOpacity<CardProps>`
  flex: 1;
  height: 50px;
  flex-direction: row;
  gap: 10px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  ${({ theme, type, active }) => {
    if (active) {
      if (type === 'in') {
        return css`
          background-color: ${theme.COLORS.greenLight};
          border-color: ${theme.COLORS.greenDark};
        `
      } else {
        return css`
          background-color: ${theme.COLORS.redLight};
          border-color: ${theme.COLORS.redDark};
        `
      }
    } else {
      return css`
        background-color: ${theme.COLORS.gray6};
        border-color: ${theme.COLORS.gray6};
      `
    }
  }}
`
export const Indicator = styled.View<CardProps>`
  height: 8px;
  width: 8px;
  border-radius: 1000px;
  ${({ theme, type }) =>
    type === 'in'
      ? css`
          background-color: ${theme.COLORS.greenDark};
        `
      : css`
          background-color: ${theme.COLORS.redDark};
        `};
`
export const Label = styled.Text``
