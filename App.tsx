import { StatusBar } from 'expo-status-bar'
import theme from '@theme/index'
import { Loading } from '@components/Loading'
import { ThemeProvider } from 'styled-components/native'
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { Routes } from '@routes/index'
import { View } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <View style={{ flex: 1, backgroundColor: theme.COLORS.gray6 }}>
          <Routes />
        </View>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  )
}
