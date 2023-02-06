import { TouchableProps } from 'react-native-svg'
import {
    Container, TextButton
} from './styles'

interface Props extends TouchableProps{
    text : string
}

export function Button({text, ...rest}: Props){
    return(
        <Container {...rest}>
            <TextButton>{text}</TextButton>
        </Container>
    )
}