import { InputForm } from '@components/InputForm'
import { ScreenScaffold } from '@components/ScreenScaffold'
import { useNavigation } from '@react-navigation/native'
import { Form } from './style'

export function EditMeal() {
  const { goBack } = useNavigation()
  function handleBackPage() {
    goBack()
  }
  return (
    <ScreenScaffold title="Editar refeição" onBack={handleBackPage}>
      <Form>
        <InputForm type="edit" />
      </Form>
    </ScreenScaffold>
  )
}
