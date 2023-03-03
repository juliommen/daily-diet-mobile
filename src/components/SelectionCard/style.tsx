import styled from 'styled-components/native'

type CardProps = {
  type: 'in' | 'out'
  active: boolean
}

export const Card = styled.TouchableOpacity<CardProps>``
export const Indicator = styled.View<CardProps>``
export const Label = styled.Text``
