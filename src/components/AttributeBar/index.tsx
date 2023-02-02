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
    level
} from './styles'

type Props = {
    attribute : string,
    level : level
}

export function AttributeBar({attribute, level = 0} : Props){
    return(
        <Container>
            <LevelText>{attribute}</LevelText>
            <LevelContainer>
                <FirstLevel type={level}/>
                <SecondLevel type={level}/>
                <ThirdLevel type={level}/>
                <FourthLevel type={level}/>
                <FifthLevel type={level}/>
                <SixthLevel type={level}/>
            </LevelContainer>
        </Container>
    )
}