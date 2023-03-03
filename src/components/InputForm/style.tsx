import styled, { css } from 'styled-components/native'

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size:14px;
  margin-bottom: 4px;
  margin-top: 20px;
`
