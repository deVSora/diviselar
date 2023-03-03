import { useRoute, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import theme from './../../../theme'

import {
    Container, 
    ScrollContainer,
    CharImg,
    SubTitle,
    Line,
    CharName,
    LineContainer,
    CharRace,
    CharLevel,
    CharFor,
    CharDex,
    CharSab,
    CharInt,
    CharCon,
    CharCar,
    HPUpContainer,
    RollsContainer,
    HPContainer,
    DiceContainer,
    DefaultText,
    EndContainer,
    MagicContainer,
    CharWeight,
} from './styles'

import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'
import { AttributeBar } from '../../../components/AttributeBar'
import { Alert } from 'react-native'
import { Input } from '../../../components/Input'
import { PickerStyled } from '../../../components/PickerStyled'
import { CharProps } from '../../../storage/character/characterDTO'
import { UpdateCharacter } from '../../../storage/character/updateCharacter'
import { GetCharacter } from '../../../storage/character/getCharacter'
import { RemoveCharacter } from '../../../storage/character/removeCharacter'



export function UpCharacter(){
    const navigation = useNavigation()

    interface RouteParams{
        charInfo : CharProps
    }

    const route = useRoute()
    const { charInfo } = route.params as RouteParams

    const [char, setChar] = useState(charInfo)
    const [level, setLevel] = useState(char.level)
    const [attributePoints, setAttributePoints] = useState(char.attributePoints)
    const [hpPoints, setHpPoints] = useState(char.hpPoints)
    const [hp, setHp] = useState(char.hp)
    const [hpUp, setHpUp] = useState(char.hp)
    const [dice, setDice] = useState('D8')
    const [race, setRace] = useState(char.race)
    const [force, setForce] = useState(char.attributes.for)
    const [dexterity, setDexterity] = useState(char.attributes.dex)
    const [constitution, setConstitution] = useState(char.attributes.con)
    const [intelligence, setIntelligence] = useState(char.attributes.int)
    const [wisdom, setWisdom] = useState(char.attributes.sab)
    const [charisma, setCharisma] = useState(char.attributes.car)
    const [weight, setWeight] = useState(char.weight)
    const countMagics = char.magics.length

    const [magicType1, setMagicType1] = useState(countMagics >= 1 ? char.magics[0].type : '')
    const [magicType2, setMagicType2] = useState(countMagics >= 2 ? char.magics[1].type : '')
    const [magicType3, setMagicType3] = useState(countMagics >= 3 ? char.magics[2].type : '')
    const [magicType4, setMagicType4] = useState(countMagics >= 4 ? char.magics[3].type : '')
    const [magicType5, setMagicType5] = useState(countMagics >= 5 ? char.magics[4].type : '')
    const [magicType6, setMagicType6] = useState(countMagics === 6 ? char.magics[5].type : '')

    const magicTypes = ['Ordinária', 'Comum', 'Rara', 'Épica', 'Lendária', 'Ancestral']

    const [magicDescription1, setMagicDescription1] = useState(countMagics >= 1 ? char.magics[0].description : '')
    const [magicDescription2, setMagicDescription2] = useState(countMagics >= 2 ? char.magics[1].description : '')
    const [magicDescription3, setMagicDescription3] = useState(countMagics >= 3 ? char.magics[2].description : '')
    const [magicDescription4, setMagicDescription4] = useState(countMagics >= 4 ? char.magics[3].description : '')
    const [magicDescription5, setMagicDescription5] = useState(countMagics >= 5 ? char.magics[4].description : '')
    const [magicDescription6, setMagicDescription6] = useState(countMagics === 6 ? char.magics[5].description : '')    

    function handleUpLevel(){
        if(race.indexOf('Monstro') === -1){
            if(level < 15){
                setLevel(prevState => prevState+1)
                setHpPoints(prevState => prevState+1)
                setAttributePoints(prevState => prevState+1)
            }
            else{
            Alert.alert('Nível máximo', 'Este player ou NPC já chegou em seu nível máximo')
            }
        }
        else{
            if(level < 21){
                setLevel(prevState => prevState+1)
                setHpPoints(prevState => prevState+1)
                setAttributePoints(prevState => prevState+1)
            }
            else{
                Alert.alert('Nível máximo', 'Este player ou NPC já chegou em seu nível máximo')
            }
        }
    }

    function handleAttributeUp(attribute: string){
        if(attributePoints > 0){
            if(attribute === 'FOR'){
                if(force === 5){
                    if(race.indexOf('Monstro') === -1){
                        return Alert.alert('Nível apenas para monstros', 'Para alcançar esse nível você deve ser pelo menos meio monstro')
                    }
                }
                setAttributePoints(prevState => prevState - 1)
                setForce(prevState => prevState + 1)
            }
            else if(attribute === 'DEX'){
                if(dexterity === 5){
                    if(race.indexOf('Monstro') === -1){
                        return Alert.alert('Nível apenas para monstros', 'Para alcançar esse nível você deve ser pelo menos meio monstro')
                    }
                }
                setAttributePoints(prevState => prevState - 1)
                setDexterity(prevState => prevState + 1)
            }
            else if(attribute === 'CON'){
                if(constitution === 5){
                    if(race.indexOf('Monstro') === -1){
                        return Alert.alert('Nível apenas para monstros', 'Para alcançar esse nível você deve ser pelo menos meio monstro')
                    }
                }
                setAttributePoints(prevState => prevState - 1)
                setConstitution(prevState => prevState + 1)
            }
            else if(attribute === 'INT'){
                if(intelligence === 5){
                    if(race.indexOf('Monstro') === -1){
                        return Alert.alert('Nível apenas para monstros', 'Para alcançar esse nível você deve ser pelo menos meio monstro')
                    }
                }
                setAttributePoints(prevState => prevState - 1)
                setIntelligence(prevState => prevState + 1)
            }
            else if(attribute === 'SAB'){
                if(wisdom === 5){
                    if(race.indexOf('Monstro') === -1){
                        return Alert.alert('Nível apenas para monstros', 'Para alcançar esse nível você deve ser pelo menos meio monstro')
                    }
                }
                setAttributePoints(prevState => prevState - 1)
                setWisdom(prevState => prevState + 1)
            }
            else if(attribute === 'CAR'){
                if(charisma === 5){
                    if(race.indexOf('Monstro') === -1){
                        return Alert.alert('Nível apenas para monstros', 'Para alcançar esse nível você deve ser pelo menos meio monstro')
                    }
                }
                setAttributePoints(prevState => prevState - 1)
                setCharisma(prevState => prevState + 1)
            }
        } else {
            Alert.alert('Pontos de atributo esgotados', 'Procure upar seu nível para obter mais pontos.')
        }
    }

    function handleHPUp(){
        const tempResult = ((Math.floor(Math.random() * (8 - 1) + 1)));
        if(hpPoints > 0){
            setHp(hpUp)
            setHpUp(hpUp+tempResult)
            setDice(tempResult.toString())
            setHpPoints(prevState => prevState - 1)
        } else {
            Alert.alert('Rolagem de HP esgotada', 'Procure upar seu nível para obter mais rolagens.')
        }
    }

    async function handleDeleteChar(){
        Alert.alert(`Deseja deletar ${char.name}?`, `A personagem ${char.name} será deletada permanentemente!`, [
            {
              text: 'Cancelar',
              onPress: () => {},
              style: 'cancel',
            },
            {text: 'Deletar', onPress: () => {
                RemoveCharacter()
                navigation.navigate('home')
                Alert.alert('Deletado', 'Personagem deletado')
                }},
          ]);
    }

    function handleMonsterlization(){
        if(race.indexOf('Monstro') === -1){
            setLevel(prevState => prevState + 6)
            setHpPoints(prevState => prevState + 6)

            setForce(prevState => prevState + 1)
            setDexterity(prevState => prevState + 1)
            setConstitution(prevState => prevState + 1)
            setIntelligence(prevState => prevState + 1)
            setWisdom(prevState => prevState + 1)
            setCharisma(prevState => prevState + 1)
            
            setRace(prevState => prevState + '-Monstro')
        } else {
            Alert.alert('O personagem já é um monstro')
        }
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

    function handleWeight(){
        
        if(force === 1) {
            setWeight(30)
        }
        else if(force === 2) {
            setWeight(50)
        }
        else if(force === 3) {
            setWeight(70)
        }
        else if(force === 4) {
            setWeight(90)
        }
        else if(force === 5) {
            setWeight(110)
        }
        else if(force === 6) {
            setWeight(140)
        }

        if(race.indexOf('Humano') !== -1){
            setWeight( prevState => prevState += 10)
        }
        else if(race.indexOf('Elfo') !== -1){
            setWeight( prevState => prevState += 5)
        }
        else if(race.indexOf('Demonoid') !== -1){
            setWeight( prevState => prevState += 20)
        }
        else if(race.indexOf('Furry') !== -1){
            setWeight( prevState => prevState += 15)
        }


        if(dexterity === 1) {
            setWeight( prevState => prevState += 5)
        }
        if(dexterity === 2) {
            setWeight( prevState => prevState += 10)
        }
        if(dexterity === 3) {
            setWeight( prevState => prevState += 20)
        }
        if(dexterity === 4) {
            setWeight( prevState => prevState += 30)
        }
        if(dexterity === 5) {
            setWeight( prevState => prevState += 40)
        }
        if(dexterity === 6) {
            setWeight( prevState => prevState += 50)
        }

    }

    async function handleUpdateChar(){
        let validation = true
        let magicsArray = [magicType1, magicType2, magicType3, magicType4, magicType5, magicType6]
        
        magicsArray.map((magic, i) => {
            if (magic === 'Tipo da Magia'){
                validation = false
                return Alert.alert('Selecione um tipo para sua magia', `Sua magia ${i+1} não tem tipo`)
            }
            if (magic === 'Comum' && intelligence <= 1){
                validation = false
                return Alert.alert(`Inteligência insuficiente para ter sua magia ${i+1}`, 'Você precisa de no mínimo 2 de inteligência para desbloquear magias comuns')
            }
            if (magic === 'Rara' && intelligence <= 2){
                validation = false
                return Alert.alert(`Inteligência insuficiente para ter sua magia ${i+1}`, 'Você precisa de no mínimo 3 de inteligência para desbloquear magias raras')
            }
            if (magic === 'Épica' && intelligence <= 3){
                validation = false
                return Alert.alert(`Inteligência insuficiente para ter sua magia ${i+1}`, 'Você precisa de no mínimo 4 de inteligência para desbloquear magias épicas')
            }
            if (magic === 'Lendária' && intelligence <= 4){
                validation = false
                return Alert.alert(`Inteligência insuficiente para ter sua magia ${i+1}`, 'Você precisa de no mínimo 5 de inteligência para desbloquear magias lendárias')
            }
            if (magic === 'Ancestral' && intelligence <= 5){
                validation = false
                return Alert.alert(`Inteligência insuficiente para ter sua magia ${i+1}`, 'Você precisa de 6 de inteligência para desbloquear magias ancestrais')
            }
        })

        if(validation){
            const updatedChar : CharProps = {
                name : char.name,
                imgURL : char.imgURL,
                sex : char.sex,
                age : char.age,
                weight: weight,
                race : race,
                level : level,
                hp : hpUp,
                attributePoints: attributePoints,
                hpPoints: hpPoints,
                history : char.history,
                attributes : {
                    for : force, 
                    dex : dexterity,
                    con : constitution,
                    int : intelligence,
                    sab : wisdom,
                    car : charisma,
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
                magics : [
                    {
                        type: magicType1,
                        description: magicDescription1 === '' ? 'Magia não criada' : magicDescription1
                    },
                    {
                        type: magicType2,
                        description: magicDescription2 === '' ? 'Magia não criada' : magicDescription2
                    },
                    {
                        type: magicType3,
                        description: magicDescription3 === '' ? 'Magia não criada' : magicDescription3
                    },
                    {
                        type: magicType4,
                        description: magicDescription4 === '' ? 'Magia não criada' : magicDescription4
                    },
                    {
                        type: magicType5,
                        description: magicDescription5 === '' ? 'Magia não criada' : magicDescription5
                    },
                    {
                        type: magicType6,
                        description: magicDescription6 === '' ? 'Magia não criada' : magicDescription6
                    }
                ]
            }
            
            
            await UpdateCharacter(updatedChar)

            navigation.navigate(`showCharacter`, {charInfo: await GetCharacter()})
            Alert.alert('Personagem upado', 'Parabéns pelo esforço, continue evoluindo!')
        }
    }

    useEffect(()=>{
        handleWeight()
    },[dexterity, force])

    return(
        <Container>

            <Header title={'Evoluir Personagem'} backArrow/>

            <ScrollContainer>
                              {/* Basic information Section - Start */}

                <CharImg source={{uri : (char.imgURL)}}/>

                <Line/>

                <CharName>{char.name}</CharName>

                <Line/>
                
                <CharRace> Raça: {race}</CharRace>

                {/* Basic information Section - End */}

                <Line/>

                <LineContainer>
                    <CharLevel>{`Nível: ${level}`}</CharLevel>
                    <CharWeight>{`Peso Máx: ${weight}`}</CharWeight>
                </LineContainer>

                <HPUpContainer>
                    <RollsContainer>
                        <DefaultText>{`Rolagens restantes: ${hpPoints}`}</DefaultText>
                    </RollsContainer>

                    <LineContainer>
                        <HPContainer>
                            <DefaultText>{`HP: ${hp} -> ${hpUp}`}</DefaultText>
                        </HPContainer>
                        <DiceContainer>
                            <DefaultText>{ dice }</DefaultText>
                        </DiceContainer>
                    </LineContainer>
                    <Button text='Rolar' onPress={handleHPUp}/>
                </HPUpContainer>

                <Line/>

                <SubTitle>BÔNUS</SubTitle>

                <LineContainer>
                    <CharFor>{`FOR: ${getForceBonus(force)}`}</CharFor>
                    <CharDex>{`DEX: ${getDexterityBonus(dexterity)}`}</CharDex>
                    <CharCon>{`CON: ${getConstitutionBonus(constitution)}`}</CharCon>
                </LineContainer>

                <LineContainer>
                    <CharInt>{`INT: ${getIntelligenceBonus(intelligence)}`}</CharInt>
                    <CharSab>{`SAB: ${getWisdomBonus(wisdom)}`}</CharSab>
                    <CharCar>{`CAR: ${getCharismaBonus(charisma)}`}</CharCar>
                </LineContainer>

                <Line/>

                <LineContainer>
                    <Button text='+1 Nível' onPress={handleUpLevel} />
                    <Button text='Deletar' onPress={handleDeleteChar}/>
                </LineContainer>

                <Button text='Monstrualizar' onPress={handleMonsterlization}/>

                <Line/>

                <SubTitle> Atributos </SubTitle>

                <DefaultText>Pontos restantes : {attributePoints}</DefaultText>

                <AttributeBar 
                    attributePoint={attributePoints} 
                    upClick={() =>handleAttributeUp('FOR')} 
                    level={force} 
                    attribute={'FOR'} 
                    upAttribute/>
                <AttributeBar 
                    attributePoint={attributePoints} 
                    upClick={() =>handleAttributeUp('DEX')} 
                    level={dexterity} 
                    attribute={'DEX'} 
                    upAttribute/>
                <AttributeBar 
                    attributePoint={attributePoints} 
                    upClick={() =>handleAttributeUp('CON')} 
                    level={constitution} 
                    attribute={'CON'} 
                    upAttribute/>
                <AttributeBar 
                    attributePoint={attributePoints} 
                    upClick={() => handleAttributeUp('INT')} 
                    level={intelligence} 
                    attribute={'INT'} 
                    upAttribute/>
                <AttributeBar 
                    attributePoint={attributePoints} 
                    upClick={() => handleAttributeUp('SAB')} 
                    level={wisdom} 
                    attribute={'SAB'} 
                    upAttribute/>
                <AttributeBar 
                    attributePoint={attributePoints} 
                    upClick={() => handleAttributeUp('CAR')} 
                    level={charisma} 
                    attribute={'CAR'}
                    upAttribute/>

                <Line/>

                <SubTitle>Magias</SubTitle>
                { intelligence >= 1 && 
                    <MagicContainer>
                        <DefaultText style={{marginTop: 10, color : theme.colors.fourth}}>MAGIA 1</DefaultText>
                        <PickerStyled
                            placeHolder='Tipo da Magia'
                            onValueChange={setMagicType1}
                            valueArrays={magicTypes}
                            selectedValue={magicType1}
                        />
                        <Input value={magicDescription1} 
                            placeholder={'Descrição da magia'} 
                            style={{marginTop:-1}} 
                            onChangeText={setMagicDescription1} 
                            multiline/>
                    </MagicContainer>
                }
                { intelligence >= 2 && 
                    <MagicContainer>
                        <DefaultText style={{marginTop: 10, color : theme.colors.fourth}}>MAGIA 2</DefaultText>
                        <PickerStyled
                            placeHolder='Tipo da Magia'
                            onValueChange={setMagicType2}
                            valueArrays={magicTypes}
                            selectedValue={magicType2}
                        />
                        <Input value={magicDescription2} 
                            placeholder={'Descrição da magia'} 
                            style={{marginTop:-1}} 
                            onChangeText={setMagicDescription2} 
                            multiline/>
                    </MagicContainer>
                }
                { intelligence >= 3 && 
                    <MagicContainer>
                        <DefaultText style={{marginTop: 10, color : theme.colors.fourth}}>MAGIA 3</DefaultText>
                        <PickerStyled
                            placeHolder='Tipo da Magia'
                            onValueChange={setMagicType3}
                            valueArrays={magicTypes}
                            selectedValue={magicType3}
                        />
                        <Input value={magicDescription3} 
                            placeholder={'Descrição da magia'} 
                            style={{marginTop:-1}} 
                            onChangeText={setMagicDescription3} 
                            multiline/>
                    </MagicContainer>
                }
                { intelligence >= 4 && 
                    <MagicContainer>
                        <DefaultText style={{marginTop: 10, color : theme.colors.fourth}}>MAGIA 4</DefaultText>
                        <PickerStyled
                            placeHolder='Tipo da Magia'
                            onValueChange={setMagicType4}
                            valueArrays={magicTypes}
                            selectedValue={magicType4}
                        />
                        <Input value={magicDescription4} 
                            placeholder={'Descrição da magia'} 
                            style={{marginTop:-1}} 
                            onChangeText={setMagicDescription4} 
                            multiline/>
                    </MagicContainer>
                }
                { intelligence >= 5 && 
                    <MagicContainer>
                        <DefaultText style={{marginTop: 10, color : theme.colors.fourth}}>MAGIA 5</DefaultText>
                        <PickerStyled
                            placeHolder='Tipo da Magia'
                            onValueChange={setMagicType5}
                            valueArrays={magicTypes}
                            selectedValue={magicType5}
                        />
                        <Input value={magicDescription5} 
                            placeholder={'Descrição da magia'} 
                            style={{marginTop:-1}} 
                            onChangeText={setMagicDescription5} 
                            multiline/>
                    </MagicContainer>
                }
                { intelligence === 6 && 
                    <MagicContainer>
                        <DefaultText style={{marginTop: 10, color : theme.colors.fourth}}>MAGIA 6</DefaultText>
                        <PickerStyled
                            placeHolder='Tipo da Magia'
                            onValueChange={setMagicType6}
                            valueArrays={magicTypes}
                            selectedValue={magicType6}
                        />
                        <Input value={magicDescription6} 
                            placeholder={'Descrição da magia'} 
                            style={{marginTop:-1}} 
                            onChangeText={setMagicDescription6} 
                            multiline/>
                    </MagicContainer>
                }

                <Line/>

                <Button text='Evoluir Personagem' onPress={handleUpdateChar}/>
                
                <EndContainer/>
            </ScrollContainer>
        </Container>
    )
}