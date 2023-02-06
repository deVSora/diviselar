import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppRoutes } from "./app.routes"

import {NewCharacter} from '../screens/character/NewCharacter'
import { UpCharacter } from "../screens/character/UpCharacter"

export function StackRoutes(){
    const stack = createNativeStackNavigator()

    return(
    <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="start" component={AppRoutes}/>
        <stack.Screen name="newCharacter" component={NewCharacter} />
        <stack.Screen name="upCharacter" component={UpCharacter} />
    </stack.Navigator>
    )
}