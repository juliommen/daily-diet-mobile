import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

type Props = {
  type: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;

  margin: 10px 0;

  ${({ theme, type }) => {
    if (type === 'PRIMARY') {
      return css`
        background-color: ${theme.COLORS.gray2};
        border-color: ${theme.COLORS.gray2};
        border-width: 1px;
      `
    } else {
      return css`
        background-color: ${theme.COLORS.gray7};
        border-color: ${theme.COLORS.gray1};
        border-width: 1px;
      `
    }
  }};
`

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.white : theme.COLORS.gray1,
  size: 18,
}))`
  margin-right: 16px;
`

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  ${({ theme, type }) =>
    type === 'PRIMARY'
      ? css`
          color: ${theme.COLORS.white};
        `
      : css`
          color: ${theme.COLORS.gray1};
        `};
  font-size: 14px;
`
