import { useNavigation } from '@react-navigation/native'

import {
    Container,
    ScrollContainer,
    LineContainer,
    CharImg
} from './styles'

import { Header } from '../../../components/Header'
import { Input } from '../../../components/Input'
import { PickerStyled } from '../../../components/PickerStyled'
import { Button } from '../../../components/Button'
import { useState } from 'react'
import { CharProps } from '../../../@types/routes'
import { Alert } from 'react-native'
import { EndContainer } from '../ShowCharacter/styles'

export function NewCharacter(){
    const [sex, setSex] = useState('')
    const [race, setRace] = useState('')

    const [url, setUrl] = useState('')
    const [charName, setCharName] = useState('')
    const [age, setAge] = useState('')
    const [history, setHistory] = useState('')

    const sexArray = ['Masculino', 'Feminino']
    const raceArray = ['Demonoid', 'Elfo', 'Furry','Humano']

    const navigation = useNavigation()

    function handleSubmit(){
        if(charName === ''){
            return Alert.alert('Personagem sem nome', 'Dê um nome ao seu personagem')
        }

        if(url === ''){
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
            imgURL : url,
            sex : sex,
            age : Number(age),
            race : race,
            attributePoints: 1,
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

        navigation.navigate('showCharacter', { charInfo : charInfo})
    }

    return(
        <Container>

            <Header backArrow title='Novo personagem'/>

            <ScrollContainer>
                <CharImg source={{uri : (url)}}/>
                <Input placeholder='Foto da personagem (URL)' onChangeText={setUrl} value={url} multiline/>
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

                <Button text='Criar personagem' onPress={handleSubmit}/>

                <EndContainer/>
            </ScrollContainer> 

        </Container>
    )
}