import { StatusBar } from 'expo-status-bar';
import theme from './src/theme'
import { 
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
 } from '@expo-google-fonts/inter'
import { ThemeProvider } from 'styled-components/native';
import { Character } from './src/screens/Character';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })
  return ( 
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.secondary} style='light' translucent/>
        {fontsLoaded ? <Character/> : <Loading/>}
      </ThemeProvider>
  )
};
