import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { CHARACTER_COLLECTION } from "../storageConfig";
import { CharProps } from "./characterDTO";
import { GetCharacter } from "./getCharacter";

export async function AddCharacter(newCharacter : CharProps){
    try{
        const characterAlreadyExists = await GetCharacter()

        if(characterAlreadyExists){
            throw new AppError('Já existe um personagem registrado')
        }

        await AsyncStorage.setItem(CHARACTER_COLLECTION, JSON.stringify(newCharacter))
    }
    catch(err){
        console.log(err)
        throw err
    }
}