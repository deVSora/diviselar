import {
    Container,
    HighLightText,
    Text,
} from './styles'

interface Props{
    highLightText : String,
    text : String,
}

export function TextAreaDisabled({highLightText, text}: Props){
    return(
        <Container>
            <HighLightText>{highLightText}</HighLightText>
            <Text>{text}</Text>
        </Container>
    )
}