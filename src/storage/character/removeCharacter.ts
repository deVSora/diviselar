import AsyncStorage from "@react-native-async-storage/async-storage";
import { CHARACTER_COLLECTION } from "../storageConfig";

export async function RemoveCharacter(){
    try{
        await AsyncStorage.removeItem(CHARACTER_COLLECTION)
    }
    catch(err){
        console.log(err)
        throw err
    }
}