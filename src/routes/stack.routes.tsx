import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppRoutes } from "./app.routes"

import { UpCharacter } from "../screens/character/UpCharacter"
import { ShowCharacter } from "../screens/character/ShowCharacter"

export function StackRoutes(){
    const stack = createNativeStackNavigator()

    return(
    <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="start" component={AppRoutes}/>
        <stack.Screen name="showCharacter" component={ShowCharacter} />
        <stack.Screen name="upCharacter" component={UpCharacter} />
    </stack.Navigator>
    )
}