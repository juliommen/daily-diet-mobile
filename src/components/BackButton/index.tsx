import { Button, Icon, IconProps } from './style'
import Constants from 'expo-constants'
import { TouchableOpacityProps } from 'react-native'

const statusBarHeight = Constants.statusBarHeight

type BackButtonProps = IconProps & TouchableOpacityProps

export function BackButton({ color = 'BLACK', ...rest }: BackButtonProps) {
  return (
    <Button style={{ marginTop: statusBarHeight }} {...rest}>
      <Icon color={color} name="arrow-left" />
    </Button>
  )
}
