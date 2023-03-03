import { View, StyleSheet, ScrollView, Alert, TextInput } from 'react-native'
import { Title } from './style'
import { MaskedTextInput } from 'react-native-mask-text'
import theme from '@theme/index'
import { useEffect, useState } from 'react'
import { ActionButton } from '@components/ActionButton'
import { isDateValid, isTimeValid } from '@utils/input'
import { useRoute } from '@react-navigation/native'
import { Meal } from '@utils/entities'
import { SelectionCard } from '@components/SelectionCard'

type InputFormProps = {
  onChangeTitle?: () => void
  onChangeDescription?: () => void
  onChangeDate?: () => void
  onChangeHour?: () => void
  onConfirm?: () => void
  type: 'new' | 'edit'
}

export function InputForm({
  onChangeDate = () => {},
  onChangeDescription = () => {},
  onChangeHour = () => {},
  onChangeTitle = () => {},
  onConfirm = () => {},
  type = 'new',
}: InputFormProps) {
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [mealType, setMealType] = useState<'in' | 'out' | ''>('')

  function changeMealType(selection: 'in' | 'out') {
    setMealType(selection)
  }

  function handleConfirm() {
    if (!name) {
      Alert.alert('Nome vazio', 'Insira um nome')
      return
    }
    if (!description) {
      Alert.alert('Descrição vazia', 'Insira uma descrição')
      return
    }
    if (!date || !isDateValid(date)) {
      Alert.alert('Data inválida', 'Insira uma data válida')
      return
    }
    if (!hour || !isTimeValid(hour)) {
      Alert.alert('Hora inválida', 'Insira uma hora válida')
    }
  }

  const meal = useRoute().params as Meal
  useEffect(() => {
    if (type === 'edit') {
      setName(meal.name)
      setDescription(meal.description)
      setDate(meal.date)
      setHour(meal.hour)
      setMealType(meal.type)
    }
  }, [meal, type])

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Nome</Title>
        <TextInput
          style={inputStyle}
          onChangeText={setName}
          value={name}
          cursorColor={theme.COLORS.gray1}
          maxLength={30}
          keyboardType="ascii-capable"
        />
        <Title>Descrição</Title>
        <TextInput
          style={{ ...inputStyle, ...descriptionStyle }}
          onChangeText={setDescription}
          value={description}
          cursorColor={theme.COLORS.gray1}
          multiline={true}
        />
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View style={{ flex: 1 }}>
            <Title>Data</Title>
            <MaskedTextInput
              style={inputStyle}
              onChangeText={setDate}
              value={date}
              placeholder="dd/mm/aaaa"
              mask="99/99/9999"
              keyboardType="numeric"
              cursorColor={theme.COLORS.gray1}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Title>Hora</Title>
            <MaskedTextInput
              style={inputStyle}
              onChangeText={setHour}
              value={hour}
              placeholder="00:00"
              mask="99:99"
              keyboardType="numeric"
              cursorColor={theme.COLORS.gray1}
            />
          </View>
        </View>
        <Title>Está dentro da dieta?</Title>
        <View style={{ flexDirection: 'row' }}>
          <SelectionCard
            isSelected={mealType === 'in'}
            onPress={() => changeMealType('in')}
            selectionType="in"
          />
          <SelectionCard
            isSelected={mealType === 'out'}
            onPress={() => changeMealType('out')}
            selectionType="out"
          />
        </View>
      </ScrollView>
      <ActionButton
        title={type === 'new' ? 'Cadastrar refeição' : 'Salvar alterações'}
        onPress={handleConfirm}
      ></ActionButton>
    </>
  )
}

export const { inputStyle, descriptionStyle } = StyleSheet.create({
  inputStyle: {
    padding: 14,
    borderColor: theme.COLORS.gray5,
    borderWidth: 1,
    borderRadius: 6,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 16,
  },
  descriptionStyle: {
    height: 120,
    textAlignVertical: 'top',
  },
})
