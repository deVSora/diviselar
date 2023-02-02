import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({theme})=> css`
        background-color: ${theme.colors.secondary};
        border: 2px solid ${theme.colors.third};
        border-radius: 5px;
        margin-top: 10px;
    `}
`

export const HighLightText = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.sm};
        font-family: ${theme.fontFamily.Regular};
        text-align: center;
        margin-top: 10px;
        color: ${theme.colors.fourth};
    `}
`

export const Text = styled.Text`
    ${({theme})=> css`
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: ${theme.fontSize.md};
        font-family: ${theme.fontFamily.Medium};
        color: ${theme.colors.fourth};
    `}
`