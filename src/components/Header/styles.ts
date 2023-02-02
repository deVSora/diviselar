import { CaretLeft, NotePencil } from "phosphor-react-native";
import styled, {css} from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    background-color: ${({theme})=> theme.colors.secondary};
    height: 90px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.fourth};
        font-size: ${theme.fontSize.xl};
        font-family: ${theme.fontFamily.Bold};
    `};
`

export const BackButton = styled.TouchableOpacity`
`

export const EditButton = styled.TouchableOpacity`
`

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
    color: theme.colors.fourth,
    size: `${32}px`
}))``

export const EditIcon = styled(NotePencil).attrs(({theme}) => ({
    color: theme.colors.fourth,
    size: `${32}px`
}))``