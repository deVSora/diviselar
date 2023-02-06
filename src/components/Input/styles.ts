import styled, {css} from 'styled-components/native'

export const Container = styled.TextInput`
    ${({theme})=> css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.fourth};
        font-family: ${theme.fontFamily.Medium};
        font-size: ${theme.fontSize.md};
        border: 2px solid ${theme.colors.third};
        border-radius: 5px;
        margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 13px;
        padding-bottom: 13px;
        min-width: 170px;
    `}
`