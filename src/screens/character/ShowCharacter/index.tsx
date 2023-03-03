import { useState, useEffect, useCallback} from 'react'
import { useNavigation, useRoute, useFocusEffect} from '@react-navigation/native'

import {
    Container,
    ScrollContainer,
    CharImg,
    SubTitle,
    Line,
    CharName,
    LineContainer,
    CharSex,
    CharAge,
    CharRace,
    CharHP,
    CharAC,
    CharCA,
    CharLevel,
    CharFor,
    CharDex,
    CharSab,
    CharInt,
    CharCon,
    CharCar,
    EndContainer,
    CharWeight,
} from './styles'

import { Header } from '../../../components/Header'
import { TextAreaDisabled } from '../../../components/TextAreaDisabled'
import { PickerStyled } from '../../../components/PickerStyled'
import { AttributeBar } from '../../../components/AttributeBar'
import { Alert } from 'react-native'
import { CharProps } from '../../../storage/character/characterDTO'
import { GetCharacter } from '../../../storage/character/getCharacter'

export function ShowCharacter(){
    const [firstActiveWeapon, setFirstActiveWeapon] = useState('')
    const [secondActiveWeapon, setSecondActiveWeapon] = useState('')
    const [activeArmor, setActiveArmor] = useState('')
    const [activeExtraItem, setActiveExtraItem] = useState('')
    const [currentWeight, setCurrentWeight] = useState(0)
    const [HP, setHP] = useState(0)
    const [AC, setAC] = useState(0)
    const [CA, setCA] = useState(0)

    const navigation = useNavigation()
    
    interface RouteParams{
        charInfo : CharProps
    }

    const route = useRoute()
    const { charInfo } = route.params as RouteParams

    if(charInfo === undefined){
        navigation.navigate(`newCharacter`)
    }

    console.log(charInfo)

    function getFastResumeStats(hp:number = charInfo!.hp, ac:number = 0, ca:number = 0){
        charInfo!.weapons.filter( el => {
            if (el.name === firstActiveWeapon){
                hp += el.hp 
                ac += el.ac
                ca += el.ca 
            }
            if (el.name === secondActiveWeapon){
                hp += el.hp 
                ac += el.ac
                ca += el.ca 
            }
        })
        charInfo!.armors.filter( el => {
            if (el.name === activeArmor){
                hp += el.hp 
                ac += el.ac
                ca += el.ca 
            }
        })
        charInfo!.extraItems.filter( el => {
            if (el.name === activeExtraItem){
                hp += el.hp 
                ac += el.ac
                ca += el.ca
            }
        })
        setHP(hp)
        setAC(ac)
        setCA(ca)
    }
    
    function getForceBonus(forceLevel:number = 0){
        if (forceLevel > 3){ 
            return 5
        }
        if (forceLevel > 1){
            return 2
        }
        else {
            return 0
        }
    }
    
    function getDexterityBonus(dexterityLevel:number = 0){
        if (dexterityLevel > 3){ 
            return 5
        }
        if (dexterityLevel > 0){
            return 2
        }
        else {
            return 0
        }
    }
    
    function getConstitutionBonus(constitutionLevel:number = 0){
        if(constitutionLevel > 4){ 
            return 5
        }

        if (constitutionLevel > 2){
            return 2
        }
        else {
            return 0
        }
    }
    
    function getIntelligenceBonus(intelligenceLevel:number = 0){
        if(intelligenceLevel > 4){ 
            return 5
        }
        if (intelligenceLevel > 2){
            return 3
        }
        else {
            return 0
        }
    }
    
    function getWisdomBonus(wisdomLevel:number = 0){
        if(wisdomLevel > 3){ 
            return 5
        }
        else {
            return 0
        }
    }
    
    function getCharismaBonus(charismaLevel:number = 0){
        if (charismaLevel === 1){
            return 1
        }
        else if(charismaLevel === 2){ 
            return 2
        }
        else if(charismaLevel === 3){ 
            return 3
        }
        else if(charismaLevel > 3){ 
            return 5
        }
        else {
            return 0
        }
    }

    async function handleUpChar(){
        navigation.navigate('upCharacter', {charInfo : await GetCharacter()})
    }

    useEffect(()=>{
        getFastResumeStats()
    },[activeArmor, activeExtraItem, firstActiveWeapon, secondActiveWeapon])

    return(
        <Container>

            <Header backArrow title='Meu Personagem' edit editScreen={handleUpChar}/>

            <ScrollContainer>

                {/* Basic information Section - Start */}

                <CharImg source={{uri : (charInfo!.imgURL)}}/>

                <Line/>

                <CharName>{charInfo!.name}</CharName>

                <Line/>

                <LineContainer>
                    <CharSex> Sexo: {charInfo!.sex}</CharSex>
                    <CharAge> Idade: {charInfo!.age} anos</CharAge>
                </LineContainer>

                <CharRace> Raça: {charInfo!.race}</CharRace>

                <TextAreaDisabled highLightText='História' text={charInfo!.history}/>

                {/* Basic information Section - End */}

                <Line/>

                {/* Active Items Section - Start */}

                <SubTitle>Equipamento Ativo</SubTitle>
                <PickerStyled 
                    selectedValue={firstActiveWeapon}
                    onValueChange={setFirstActiveWeapon}
                    placeHolder='Arma Principal'
                    valueArrays={ charInfo!.weapons.map(el=> el.name) }
                />
                {
                    charInfo!.weapons.map(el => {
                        if(el.name === firstActiveWeapon){
                            if(el.effect !== ''){
                                return (<TextAreaDisabled key={el.name} highLightText={`${el.name} - Efeito`} text={el.effect}/>)
                            }
                        }})
                }

                { 
                charInfo!.attributes.dex > 0 &&
                    <PickerStyled 
                        selectedValue={secondActiveWeapon}
                        onValueChange={setSecondActiveWeapon}
                        placeHolder='Arma Secundária'
                        valueArrays={ charInfo!.weapons.map(el=> el.name) }
                    />
                }
                {
                    charInfo!.weapons.map(el => {
                        if(el.name === secondActiveWeapon){
                            if(el.effect !== ''){
                                return (<TextAreaDisabled key={el.name} highLightText={`${el.name} - Efeito`} text={el.effect}/>)
                            }
                        }})
                }

                <PickerStyled 
                    selectedValue={activeArmor}
                    onValueChange={setActiveArmor}
                    placeHolder='Armadura Ativa'
                    valueArrays={ charInfo!.armors.map(el=> el.name) }
                />
                {
                    charInfo!.armors.map(el => {
                        if(el.name === activeArmor){
                            if(el.effect !== ''){
                                return (<TextAreaDisabled key={el.name} highLightText={`${el.name} - Efeito`} text={el.effect}/>)
                            }
                        }})
                }

                <PickerStyled 
                    selectedValue={activeExtraItem}
                    onValueChange={setActiveExtraItem}
                    placeHolder='Item Extra'
                    valueArrays={ charInfo!.extraItems.map(el=> el.name) }
                />
                {
                    charInfo!.extraItems.map(el => {
                        if(el.name === activeExtraItem){
                            if(el.effect !== ''){
                                return (<TextAreaDisabled key={el.name} highLightText={`${el.name} - Efeito`} text={el.effect}/>)
                            }
                        }})
                }

                {/* Active Items Section - End */}

                <Line/>

                {/* Fast Resume Section - Start */}

                <SubTitle>Resumo Rápido</SubTitle>

                <LineContainer>
                    <CharHP>{`HP: ${HP}`}</CharHP>
                    <CharAC>{`AC: ${AC}`}</CharAC>
                    <CharCA>{`CA: ${CA}`}</CharCA>
                </LineContainer>
                
                <LineContainer style={{ justifyContent: 'space-around' }}>
                    <CharLevel>{`Nível: ${charInfo!.level}`}</CharLevel>
                    <CharWeight>{`Peso: ${currentWeight}/${charInfo!.weight}`}</CharWeight>
                </LineContainer>

                <Line/>

                <SubTitle>BÔNUS</SubTitle>

                <LineContainer>
                    <CharFor>{`FOR: ${getForceBonus(charInfo!.attributes.for)}`}</CharFor>
                    <CharDex>{`DEX: ${getDexterityBonus(charInfo!.attributes.dex)}`}</CharDex>
                    <CharCon>{`CON: ${getConstitutionBonus(charInfo!.attributes.con)}`}</CharCon>
                </LineContainer>

                <LineContainer>
                    <CharInt>{`INT: ${getIntelligenceBonus(charInfo!.attributes.int)}`}</CharInt>
                    <CharSab>{`SAB: ${getWisdomBonus(charInfo!.attributes.sab)}`}</CharSab>
                    <CharCar>{`CAR: ${getCharismaBonus(charInfo!.attributes.car)}`}</CharCar>
                </LineContainer>

                {/* Fast Resume Section - End */}

                <Line/>

                {/* Magics Section - Start */}

                <SubTitle>Magias</SubTitle>

                {
                    charInfo!.magics.map((el, i) => {
                        if(el.type !== ''){
                            return(<TextAreaDisabled key={`${el.type}-${i}`} highLightText={el.type} text={el.description} />)
                        }
                    })
                }

                    {/* Magics Section - End */}

                <Line/>

                {/* Attributes Section - Start */}

                <SubTitle>Atributos</SubTitle>

                <AttributeBar attribute='For' level={charInfo!.attributes.for}/>
                <AttributeBar attribute='Dex' level={charInfo!.attributes.dex}/>
                <AttributeBar attribute='Con' level={charInfo!.attributes.con}/>
                <AttributeBar attribute='Int' level={charInfo!.attributes.int}/>
                <AttributeBar attribute='Sab' level={charInfo!.attributes.sab}/>
                <AttributeBar attribute='Car' level={charInfo!.attributes.car}/>

                {/* Attributes Section - End */}

                <EndContainer/>
            </ScrollContainer>
        </Container>
    )
}