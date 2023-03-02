import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gray7};
`
export const Indicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.gray1,
  size: 'large',
}))``
