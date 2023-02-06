import styled, {css} from 'styled-components/native'

export type level = number

type Props = {
    type : level
}

export const Container = styled.View`
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
`

export const LevelContainer = styled.View`
    flex-direction: row;
`

export const LevelText = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.fontSize.lg};
        font-family: ${theme.fontFamily.Semibold};
        color: ${theme.colors.fourth};
        text-align: left;
        margin-right: 40px;
        text-transform: uppercase;
    `}
`

export const FirstLevel = styled.View<Props>`
    width: 45px;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    ${({theme, type})=>css`
        border: 1px solid ${type === 6 ? theme.colors.fourth : theme.colors.third};
        background-color: ${type !== 6 ? type > 0 ? theme.colors.secondary : theme.colors.fourth : theme.colors.red};
    `}
`

export const FirstLevelUp = styled.TouchableOpacity`
    width: 45px;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    justify-content: center;
    align-items: center;
    ${({theme})=>css`
        border: 1px solid ${theme.colors.third};
        background-color: ${theme.colors.third};
    `}
`

export const SecondLevel = styled.View<Props>`
    width: 45px;
    height: 40px;
    ${({theme, type})=>css`
        border: 1px solid ${type === 6 ? theme.colors.fourth : theme.colors.third};
        background-color: ${type !== 6 ? type > 1 ? theme.colors.secondary : theme.colors.fourth : theme.colors.red};
    `}
`

export const SecondLevelUp = styled.TouchableOpacity`
    width: 45px;
    height: 40px;
    justify-content: center;
    align-items: center;
    ${({theme})=>css`
        border: 1px solid ${theme.colors.third};
        background-color: ${theme.colors.third};
    `}
`

export const ThirdLevel = styled.View<Props>`
    width: 45px;
    height: 40px;
    ${({theme, type})=>css`
        border: 1px solid ${type === 6 ? theme.colors.fourth : theme.colors.third};
        background-color: ${type !== 6 ? type > 2 ? theme.colors.secondary : theme.colors.fourth : theme.colors.red};
    `}
`

export const ThirdLevelUp = styled.TouchableOpacity`
    width: 45px;
    height: 40px;
    justify-content: center;
    align-items: center;
    ${({theme})=>css`
        border: 1px solid ${theme.colors.third};
        background-color: ${theme.colors.third};
    `}
`

export const FourthLevel = styled.View<Props>`
    width: 45px;
    height: 40px;
    ${({theme, type})=>css`
        border: 1px solid ${type === 6 ? theme.colors.fourth : theme.colors.third};
        background-color: ${type !== 6 ? type > 3 ? theme.colors.secondary : theme.colors.fourth : theme.colors.red};
    `}
`

export const FourthLevelUp = styled.TouchableOpacity`
    width: 45px;
    height: 40px;
    justify-content: center;
    align-items: center;
    ${({theme})=>css`
        border: 1px solid ${theme.colors.third};
        background-color: ${theme.colors.third};
    `}
`

export const FifthLevel = styled.View<Props>`
    width: 45px;
    height: 40px;
    ${({theme, type})=>css`
        border: 1px solid ${type === 6 ? theme.colors.fourth : theme.colors.third};
        background-color: ${type !== 6 ? type > 4 ? theme.colors.secondary : theme.colors.fourth : theme.colors.red};
    `}
`

export const FifthLevelUp = styled.TouchableOpacity`
    width: 45px;
    height: 40px;
    justify-content: center;
    align-items: center;
    ${({theme})=>css`
        border: 1px solid ${theme.colors.third};
        background-color: ${theme.colors.third};
    `}
`

export const SixthLevel = styled.View<Props>`
    width: 45px;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    ${({theme, type})=>css`
        border: 1px solid ${type === 6 ? theme.colors.fourth : theme.colors.third};
        background-color: ${type > 5 ? theme.colors.red : theme.colors.fourth};
    `}
`

export const SixthLevelUp = styled.TouchableOpacity`
    width: 45px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    ${({theme})=>css`
        border: 1px solid ${theme.colors.fourth};
        background-color: ${theme.colors.red};
    `}
`