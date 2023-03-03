import styled, {css} from 'styled-components/native'

export type itemType = string

type Props = {
    type : itemType
}

export const Container = styled.View<Props>`
    ${({theme, type}) => css`
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        border: 2px solid ${theme.colors.fourth};
        background-color: ${type === 'Weapon' ? theme.colors.red : type === 'Armor' ? theme.colors.secondary : theme.colors.third};
    `}
    margin-top: 10px;
    border-radius: 5px;
`

export const LineContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const TypeText = styled.Text`
    ${({theme}) =>  css`
        font-size: ${theme.fontSize.sm};
        font-family: ${theme.fontFamily.Regular};
        color: ${theme.colors.fourth};
    `}
    margin-top: 10px;
    text-align: center;
`

export const Line = styled.View`
    height: 2px;
    border-radius: 5px;
    background-color: ${({theme})=> theme.colors.fourth};
    width: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-self: center;
`

export const NameText = styled.Text`
    ${({theme}) =>  css`
        font-size: ${theme.fontSize.xl};
        font-family: ${theme.fontFamily.Bold};
        color: ${theme.colors.fourth};
    `}
    margin-top: 10px;
    text-align: center;
`

export const MediumText = styled.Text`
    ${({theme}) =>  css`
        font-size: ${theme.fontSize.md};
        font-family: ${theme.fontFamily.Medium};
        color: ${theme.colors.fourth};
    `}
`

export const SemiBoldText = styled.Text`
        ${({theme}) =>  css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
    `}
    text-align: center;
    margin-bottom: 5px
`