import styled from 'styled-components/native'

export const Card = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  padding: 0 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray7};
`

export const Form = styled.View`
  flex: 1;
  background-color: transparent;
`
