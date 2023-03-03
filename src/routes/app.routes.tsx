import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from './../screens/Home'
import {ShowInventory} from '../screens/inventory/ShowInventory'

import { House, User, Sword } from "phosphor-react-native";
import theme from './../theme'
import { GetCharacter } from '../storage/character/getCharacter';
import { NewCharacter } from '../screens/character/NewCharacter';


export function AppRoutes(){
    const Tab = createBottomTabNavigator();

    async function fetchCharacter(){
        const data = await GetCharacter()

        return data
    }

    return(
        <Tab.Navigator screenOptions={{
            headerShown: false, 
            tabBarStyle: {
                backgroundColor: theme.colors.secondary,
                }
            }}>
            <Tab.Screen 
                name="home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon : ({color}) => (<House color={color} weight={'fill'}/>),
                    tabBarActiveTintColor : theme.colors.third,
                    tabBarInactiveTintColor : theme.colors.fourth,
                }}
                />

            <Tab.Screen 
                name="newCharacter" 
                component={NewCharacter}
                options={{
                    tabBarLabel: 'Ficha',
                    tabBarIcon : ({color}) => (<User color={color} weight={'fill'}/>),
                    tabBarActiveTintColor : theme.colors.third,
                    tabBarInactiveTintColor : theme.colors.fourth,
                }}
            />    

            <Tab.Screen 
                name="showInventory" 
                component={ShowInventory}
                options={{
                    tabBarLabel: 'Itens',
                    tabBarIcon : ({color}) => (<Sword color={color} weight={'fill'}/>),
                    tabBarActiveTintColor : theme.colors.third,
                    tabBarInactiveTintColor : theme.colors.fourth,
                }}
            />
        </Tab.Navigator>
    )
}