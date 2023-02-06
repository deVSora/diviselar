import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { StackRoutes } from './stack.routes';

export function Route(){
    const { colors } = useTheme();
    return(
        <View style={{backgroundColor: colors.primary, flex: 1}}>
            <NavigationContainer>
                <StackRoutes/>
            </NavigationContainer>
        </View>
    )
}