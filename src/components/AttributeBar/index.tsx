import { Plus } from 'phosphor-react-native'
import {
    Container,
    LevelContainer,
    LevelText,
    FirstLevel,
    SecondLevel,
    ThirdLevel,
    FourthLevel,
    FifthLevel,
    SixthLevel,
    level,
    FirstLevelUp,
    SecondLevelUp,
    ThirdLevelUp,
    FourthLevelUp,
    FifthLevelUp,
    SixthLevelUp
} from './styles'

import theme from '../../theme'

interface Props {
    attribute : string,
    level : level,
    upAttribute ?: boolean
    attributePoint ?: number
    upClick ?: () => void
}

export function AttributeBar({attribute, level = 0, upAttribute = false, attributePoint, upClick} : Props){
    return(
        <Container>
            <LevelText>{attribute}</LevelText>
            <LevelContainer>
                {upAttribute && attributePoint !== 0 && level === 0 ? 
                    <FirstLevelUp onPress={upClick}>{<Plus color={theme.colors.secondary}/>}</FirstLevelUp> : 
                    <FirstLevel type={level}/>}

                {upAttribute && attributePoint !== 0 && level === 1 ? 
                <SecondLevelUp onPress={upClick}>{<Plus color={theme.colors.secondary}/>}</SecondLevelUp> : 
                <SecondLevel type={level}/>}

                {upAttribute && attributePoint !== 0 && level === 2 ?
                 <ThirdLevelUp onPress={upClick}>{<Plus color={theme.colors.secondary}/>}</ThirdLevelUp> :
                  <ThirdLevel type={level}/>}

                {upAttribute && attributePoint !== 0 && level === 3 ?
                 <FourthLevelUp onPress={upClick}>{<Plus color={theme.colors.secondary}/>}</FourthLevelUp> :
                  <FourthLevel type={level}/>} 

                {upAttribute && attributePoint !== 0 && level === 4 ?
                 <FifthLevelUp onPress={upClick}>{<Plus color={theme.colors.secondary}/>}</FifthLevelUp> :
                  <FifthLevel type={level}/>}

                {upAttribute && attributePoint !== 0 && level === 5 ?
                 <SixthLevelUp onPress={upClick}>{<Plus color={theme.colors.fourth}/>}</SixthLevelUp> :
                  <SixthLevel type={level}/>}

            </LevelContainer>
        </Container>
    )
}