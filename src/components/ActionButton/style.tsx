import styled from 'styled-components/native'
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
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.gray1 : theme.COLORS.gray7};
  margin: 10px 0;
`

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.white : theme.COLORS.gray1,
  size: 18,
}))`
  margin-right: 10px;
`

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.white : theme.COLORS.gray1};
  font-size: 14px;
`
