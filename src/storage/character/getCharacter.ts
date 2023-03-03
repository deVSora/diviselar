import AsyncStorage from "@react-native-async-storage/async-storage";
import { CHARACTER_COLLECTION } from "../storageConfig";
import { CharProps } from "./characterDTO";

export async function GetCharacter(){
    try{
        const storage = await AsyncStorage.getItem(CHARACTER_COLLECTION)

        const dataExists : CharProps = storage ? JSON.parse(storage) : undefined

        return dataExists
    }
    catch(err){
        throw err
    }
}