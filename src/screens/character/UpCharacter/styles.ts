import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
`

export const ScrollContainer = styled.ScrollView`
    padding-right: 20px;
    padding-left: 20px;
`

export const SubTitle = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.xl};
        font-family: ${theme.fontFamily.Bold};
        text-align: center;
        color: ${theme.colors.fourth};
        text-transform: uppercase;
        margin-top: 10px;
    `}
`

export const Line = styled.View`
    width: 80px;
    align-self: center;
    border: 2px solid ${({theme}) => theme.colors.secondary};
    margin-top: 10px;
    border-radius: 5px;
`

export const CharImg = styled.Image`
    margin-top: 10px;
    width: 200px;
    height: 250px;
    align-self: center;
    border: 2px solid ${({theme})=> theme.colors.secondary};
    border-radius: 5px;
`

export const CharName = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.fontSize.xl};
        font-family: ${theme.fontFamily.Bold};
        color: ${theme.colors.fourth};
        text-align: center;
        text-transform: capitalize;
        margin-top: 10px;
    `}
`

export const LineContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const CharRace = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        text-align: center;
        margin-top: 10px;
    `}
`

export const HPUpContainer = styled.View`
    ${({theme})=> css`
        background-color: ${theme.colors.fourth};
        border: 2px solid ${theme.colors.fourth};
        border-radius: 5px;
        margin-top: 10px;
    `}
`

export const RollsContainer = styled.View`
    ${({theme})=> css`
        background-color: ${theme.colors.secondary};
        border: 1px solid ${theme.colors.fourth};
        height: 40px;
        align-items: center;
        justify-content: center;
    `}
`

export const HPContainer = styled.View`
    ${({theme})=> css`
        background-color: ${theme.colors.secondary};
        border: 1px solid ${theme.colors.fourth};
        height: 40px;
        flex-grow: 2;
        align-items: center;
        justify-content: center;
        margin-bottom: -11px;
    `}
`

export const DiceContainer = styled.View`
    ${({theme})=> css`
        background-color: ${theme.colors.secondary};
        border: 1px solid ${theme.colors.fourth};
        height: 40px;
        margin-bottom: -11px;
        align-items: center;
        justify-content: center;
    `}
`

export const DefaultText = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        align-self: center;
        padding-left: 20px;
        padding-right: 20px;
    `}
`

export const CharHP = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharAC = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharCA = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharLevel = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        text-align: center;
        margin-top: 10px;
    `}
`

export const CharWeight = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        text-align: center;
        margin-top: 10px;
    `}
`


export const CharFor = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharDex = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharCon = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharInt = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharSab = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const CharCar = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        margin-top: 10px;
    `}
`

export const EndContainer = styled.View`
    background-color: transparent;
    height: 20px;
`

export const MagicContainer = styled.View`
    background-color: ${({theme}) => theme.colors.secondary};
    border: 2px solid ${({theme})=> theme.colors.third};
    border-radius: 5px;
    margin-top: 10px;
`