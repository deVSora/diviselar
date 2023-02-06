import styled,{css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({theme})=> css`
        background-color: ${theme.colors.third};
        border: 2px solid ${theme.colors.fourth};
        border-radius: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 10px;
        min-width: 50%;
    `}
`

export const TextButton = styled.Text`
    ${({theme})=> css`
        color: ${theme.colors.fourth};
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        text-align: center;
    `}
`