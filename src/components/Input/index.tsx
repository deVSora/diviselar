import { TextInputProps } from 'react-native'

import {
    Container
} from './styles'

import theme from '../../theme'

interface Props extends TextInputProps{}

export function Input({...rest}:Props){
    return(
        <Container {...rest} placeholderTextColor={theme.colors.fourth}>

        </Container>
    )
}