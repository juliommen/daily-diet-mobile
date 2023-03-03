import { InputForm } from '@components/InputForm'
import { ScreenScaffold } from '@components/ScreenScaffold'
import { useNavigation } from '@react-navigation/native'
import { Form } from './style'

export function NewMeal() {
  const { navigate } = useNavigation()
  function handleBackPage() {
    navigate('home')
  }
  return (
    <ScreenScaffold title="Nova refeição" onBack={handleBackPage}>
      <Form>
        <InputForm type="new" />
      </Form>
    </ScreenScaffold>
  )
}
