import { BackButton } from '@components/BackButton'
import { ReactNode } from 'react'
import { Card, Header, HeaderTitle } from './style'

type ScreenScaffoldProps = {
  children: ReactNode
  title: string
  color?: 'GREEN' | 'BLACK' | 'RED'
  onBack?: () => void
}

export function ScreenScaffold({
  children,
  title,
  color = 'BLACK',
  onBack,
}: ScreenScaffoldProps) {
  return (
    <>
      <Header color={color}>
        <BackButton color={color} onPress={onBack} />
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <Card>{children}</Card>
    </>
  )
}
