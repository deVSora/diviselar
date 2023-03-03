import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'

import * as ImagePicker from 'expo-image-picker'

import {
    Container,
    ScrollContainer,
    LineContainer,
    CharImg,
    Line
} from './styles'

import { Header } from '../../../components/Header'
import { Input } from '../../../components/Input'
import { PickerStyled } from '../../../components/PickerStyled'
import { Button } from '../../../components/Button'
import { useState } from 'react'
import { Alert } from 'react-native'
import { EndContainer } from '../ShowCharacter/styles'
import { CharProps } from '../../../storage/character/characterDTO'
import { AppError } from '../../../utils/AppError'
import { AddCharacter } from '../../../storage/character/addCharacter'
import { GetCharacter } from '../../../storage/character/getCharacter'

export function NewCharacter(){
    const [sex, setSex] = useState('')
    const [race, setRace] = useState('')

    const [image, setImage] = useState('')
    const [charName, setCharName] = useState('')
    const [age, setAge] = useState('')
    const [history, setHistory] = useState('')

    const sexArray = ['Masculino', 'Feminino']
    const raceArray = ['Demonoid', 'Elfo', 'Furry','Humano']

    const navigation = useNavigation()

    async function fetchCharacter(){
        const data = await GetCharacter()
        
        if(data){
            navigation.navigate('showCharacter', {charInfo : data})
        }
    }


    async function handleSubmit(){
        try{
            if(charName === ''){
                return Alert.alert('Personagem sem nome', 'Dê um nome ao seu personagem')
            }

            if(image === ''){
                return Alert.alert('Personagem sem foto', 'Dê um imagem ao seu personagem')
            }

            if(history === ''){
                return Alert.alert('Personagem sem historia', 'O seu personagem precisa de uma história')
            }

            if(sex === '' || sex === 'Sexo'){
                return Alert.alert('Sexo inválido', 'Selecione um sexo para seu personagem')
            }

            if(typeof(Number(age)) !== 'number' || Number(age) < 1 || Number(age) > 999){
                return Alert.alert('Idade inválida', 'Aceitamos apenas valores de 1 a 999')
            }

            if(race === '' || race === 'Raça'){
                return Alert.alert('Raça inválido', 'Selecione uma raça para seu personagem')
            }

            const force = race === 'Humano' ? 1 : 0
            const dexterity = race === 'Elfo' ? 1 : 0
            const constitution = race === 'Demonoid' ? 1 : 0
            const wisdom = race === 'Furry' ? 1 : 0

            const charInfo : CharProps = {
                name : charName,
                imgURL : image,
                sex : sex,
                age : Number(age),
                race : race,
                attributePoints: 1,
                weight: 0,
                hpPoints: 1,
                level : 1,
                hp : 1,
                history : history,
                attributes : {
                    for : force, 
                    dex : dexterity,
                    con : constitution,
                    int : 0,
                    sab : wisdom,
                    car : 0,
                },
                weapons : [{
                    name: '',
                    hp: 0,
                    ac: 0,
                    ca: 0,
                    dmg: '',
                    effect: '',
                    description: ''
                }],
                armors : [{
                    name: '',
                    hp: 0,
                    ac: 0,
                    ca: 0,
                    effect: '',
                    description: ''
                }],
                extraItems : [{
                    name: '',
                    hp: 0,
                    ac: 0,
                    ca: 0,
                    effect: '',
                    description: ''
                }],
                magics : [{
                    type: '',
                    description: ''
                }]
            }

            await AddCharacter(charInfo)

            navigation.navigate('showCharacter', {charInfo: await GetCharacter()})
        }
    catch(err){
        if(err instanceof AppError){
            Alert.alert('Novo Personagem', err.message)
        } else {
            Alert.alert('Novo Personagem', 'Não foi possível criar o personagem')
            console.log(err)
        }
    }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [3,4], 
        })

        if(!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    useFocusEffect(useCallback(()=>{fetchCharacter()}, []))

    return(
        <Container>

            <Header backArrow title='Novo personagem'/>

            <ScrollContainer>
                <CharImg source={{uri : image}}/>

                <Line/>

                <Button text='Escolher Imagem' onPress={pickImage}/> 

                <Line/>

                <Input placeholder='Nome do Personagem' onChangeText={setCharName} value={charName} maxLength={30}/>

                <LineContainer>
                    <PickerStyled
                        placeHolder='Sexo'
                        valueArrays={sexArray}
                        selectedValue={sex}
                        onValueChange={setSex}
                    />
                    <Input placeholder='Idade(Anos)' maxLength={3} keyboardType={'numeric'} onChangeText={setAge} value={age}/>
                </LineContainer>

                <PickerStyled
                    placeHolder='Raça'
                    valueArrays={raceArray}
                    selectedValue={race}
                    onValueChange={setRace}
                />
                <Input placeholder='História' multiline onChangeText={setHistory} value={history}/>

                <Line/>

                <Button text='Criar personagem' onPress={handleSubmit}/>

                <EndContainer/>
            </ScrollContainer> 

        </Container>
    )
}