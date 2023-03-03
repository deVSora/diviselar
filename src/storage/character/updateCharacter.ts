import AsyncStorage from "@react-native-async-storage/async-storage";
import { CHARACTER_COLLECTION } from "../storageConfig";
import { CharProps } from "./characterDTO";

export async function UpdateCharacter(updatedChar:CharProps){
    try{
        AsyncStorage.setItem(CHARACTER_COLLECTION, JSON.stringify(updatedChar))
    }
    catch(err){
        console.log(err)
        throw err
    }
       
}