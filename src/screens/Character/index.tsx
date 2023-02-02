import { useState, useEffect } from 'react'

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
} from './styles'

import exampleChar from './../../utils/characterData'

import { Header } from './../../components/Header'
import { TextAreaDisabled } from '../../components/TextAreaDisabled'
import { PickerStyled } from '../../components/PickerStyled'
import { AttributeBar } from './../../components/AttributeBar'

export function Character(){
    const [activeWeapon, setActiveWeapon] = useState('')
    const [activeArmor, setActiveArmor] = useState('')
    const [activeExtraItem, setActiveExtraItem] = useState('')
    const [HP, setHP] = useState(0)
    const [AC, setAC] = useState(0)
    const [CA, setCA] = useState(0)

    function getFastResumeStats(hp:number = exampleChar.hp, ac:number = 0, ca:number = 0){
        exampleChar.weapons.filter( el => {
            if (el.name === activeWeapon){
                hp += el.hp 
                ac += el.ac
                ca += el.ca 
            }
        })
        exampleChar.armors.filter( el => {
            if (el.name === activeArmor){
                hp += el.hp 
                ac += el.ac
                ca += el.ca 
            }
        })
        exampleChar.extraItems.filter( el => {
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

    function getForceLevel(force : number = 0){
        if(exampleChar.race.indexOf('Monstro') !== -1){
            force += 1
        }
        if(exampleChar.race.indexOf('Humano') !== -1){
            force += 1
        }
        return force
    }

    function getDexterityLevel(dexterity : number = 0){
        if(exampleChar.race.indexOf('Monstro') !== -1){
            dexterity += 1
        }
        if(exampleChar.race.indexOf('Elfo') !== -1){
            dexterity += 1
        }
        return dexterity
    }

    function getConstitutionLevel(contitution : number = 0){
        if(exampleChar.race.indexOf('Monstro') !== -1){
            contitution += 1
        }
        if(exampleChar.race.indexOf('Demonoid') !== -1){
            contitution += 1
        }
        return contitution
    }

    function getIntelligenceLevel(intelligence : number = 0){
        if(exampleChar.race.indexOf('Monstro') !== -1){
            intelligence += 1
        }
        if(exampleChar.race.indexOf('Demonoid') !== -1){
            intelligence += 1
        }
        return intelligence
    }

    function getWisdomLevel(wisdom : number = 0){
        if(exampleChar.race.indexOf('Monstro') !== -1){
            wisdom += 1
        }
        if(exampleChar.race.indexOf('Demonoid') !== -1){
            wisdom += 1
        }
        return wisdom
    }

    function getCharismaLevel(charisma : number = 0){
        if(exampleChar.race.indexOf('Monstro') !== -1){
            charisma += 1
        }
        if(exampleChar.race.indexOf('Demonoid') !== -1){
            charisma += 1
        }
        return charisma
    }

    function getForceBonus(forceLevel:number = 0){
        if (forceLevel > 1 && forceLevel < 4){
            return 2
        }
        else if(forceLevel > 3){ 
            return 5
        }
        else {
            return 0
        }
    }

    function getDexterityBonus(dexterityLevel:number = 0){
        if (dexterityLevel > 0){
            return 2
        }
        else if(dexterityLevel > 3){ 
            return 5
        }
        else {
            return 0
        }
    }

    function getConstitutionBonus(constitutionLevel:number = 0){
        if (constitutionLevel > 2 && constitutionLevel < 5){
            return 2
        }
        else if(constitutionLevel > 4){ 
            return 5
        }
        else {
            return 0
        }
    }

    function getIntelligenceBonus(intelligenceLevel:number = 0){
        if (intelligenceLevel > 2 && intelligenceLevel < 5){
            return 3
        }
        else if(intelligenceLevel > 4){ 
            return 5
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

    useEffect(()=>{
        getFastResumeStats()
    },[activeArmor, activeExtraItem, activeWeapon])

    return(
        <Container>
            <Header backArrow title='Personagem' edit/>
            <ScrollContainer>

                {/* Basic information Section - Start */}

                <CharImg source={{uri : (exampleChar.imgURL)}}/>

                <Line/>

                <CharName>{exampleChar.name}</CharName>

                <Line/>

                <LineContainer>
                    <CharSex> Sexo: {exampleChar.sex === 'M' ? 'Masculino' : 'Feminino'}</CharSex>
                    <CharAge> Idade: {exampleChar.age} anos</CharAge>
                </LineContainer>

                <CharRace> Raça: {exampleChar.race}</CharRace>

                <TextAreaDisabled highLightText='História' text={exampleChar.history}/>

                {/* Basic information Section - End */}

                <Line/>

                {/* Active Items Section - Start */}

                <SubTitle>Equipamento Ativo</SubTitle>

                <PickerStyled 
                    selectedValue={activeWeapon}
                    onValueChange={setActiveWeapon}
                    placeHolder='Arma Ativa'
                    valueArrays={ exampleChar.weapons.map(el=> el.name) }
                />
                {
                    exampleChar.weapons.map(el => {
                        if(el.name === activeWeapon){
                            if(el.effect !== ''){
                                return (<TextAreaDisabled key={el.name} highLightText={`${el.name} - Efeito`} text={el.effect}/>)
                            }
                        }})
                }

                <PickerStyled 
                    selectedValue={activeArmor}
                    onValueChange={setActiveArmor}
                    placeHolder='Armadura Ativa'
                    valueArrays={ exampleChar.armors.map(el=> el.name) }
                />
                {
                    exampleChar.armors.map(el => {
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
                    valueArrays={ exampleChar.extraItems.map(el=> el.name) }
                />
                {
                    exampleChar.extraItems.map(el => {
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

                <CharLevel>{`Nível: ${exampleChar.race.indexOf('Monstro') !== 1 ? exampleChar.level + 6 : exampleChar.level}`}</CharLevel>

                <Line/>

                <LineContainer>
                    <CharFor>{`FOR: ${getForceBonus(getForceLevel(exampleChar.attributes.for))}`}</CharFor>
                    <CharDex>{`DEX: ${getDexterityBonus(getDexterityLevel(exampleChar.attributes.dex))}`}</CharDex>
                    <CharCon>{`CON: ${getConstitutionBonus(getConstitutionLevel(exampleChar.attributes.con))}`}</CharCon>
                </LineContainer>

                <LineContainer>
                    <CharInt>{`INT: ${getIntelligenceBonus(getIntelligenceLevel(exampleChar.attributes.int))}`}</CharInt>
                    <CharSab>{`SAB: ${getWisdomBonus(getWisdomLevel(exampleChar.attributes.sab))}`}</CharSab>
                    <CharCar>{`CAR: ${getCharismaBonus(getCharismaLevel(exampleChar.attributes.car))}`}</CharCar>
                </LineContainer>

                {/* Fast Resume Section - End */}

                <Line/>

                 {/* Magics Section - Start */}

                <SubTitle>Magias</SubTitle>

                {
                    exampleChar.magics.map((el, i) => {
                        let type = ''
                        if (el.type === 'O') {type = 'Ordinária'}
                        if (el.type === 'C') {type = 'Comum'}
                        if (el.type === 'R') {type = 'Rara'}
                        if (el.type === 'E') {type = 'Épica'}
                        if (el.type === 'L') {type = 'Lendária'}
                        if (el.type === 'A') {type = 'Ancestral'}

                        return(<TextAreaDisabled key={`${type}-${i}`} highLightText={type} text={el.description} />)
                    })
                }

                 {/* Magics Section - End */}

                <Line/>

                {/* Attributes Section - Start */}

                <SubTitle>Atributos</SubTitle>

                <AttributeBar attribute='For' level={getForceLevel(exampleChar.attributes.for)}/>
                <AttributeBar attribute='Dex' level={getDexterityLevel(exampleChar.attributes.dex)}/>
                <AttributeBar attribute='Con' level={getConstitutionLevel(exampleChar.attributes.con)}/>
                <AttributeBar attribute='Int' level={getIntelligenceLevel(exampleChar.attributes.int)}/>
                <AttributeBar attribute='Sab' level={getWisdomLevel(exampleChar.attributes.sab)}/>
                <AttributeBar attribute='Car' level={getCharismaLevel(exampleChar.attributes.car)}/>

                {/* Attributes Section - End */}

            </ScrollContainer>
        </Container>
    )
}